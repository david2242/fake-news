import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/model/article';
import { UserProfile } from 'src/app/model/user';
import { ArticleService } from 'src/app/service/article.service';
import { AuthService } from 'src/app/service/auth.service';
import { ProfileService } from 'src/app/service/profile.service';
import {Observable} from "rxjs";
import {Event} from "../../model/event";


@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  list$: Observable<Article[]> = this.articleService.getAll();
  public articleList: Article[] = [];
  codec = new HttpUrlEncodingCodec;
  public loggedIn: boolean = false;
  public pickedUserProfile: UserProfile = {
    username: "",
    bio: "",
    imageRef: ""
  }

  //SORTING STATES
  sortingCreated = [
    {sort: 'none', buttonColor: 'btn btn-light btn-sm m-auto', buttonText: 'Created'},
    {sort: 'increase', buttonColor: 'btn btn-info btn-sm m-auto', buttonText: 'Created &#8595;'},
    {sort: 'decrease', buttonColor: 'btn btn-info btn-sm m-auto', buttonText: 'Created &#8593;'},
  ];
  sortingCreatedState: number = 0;

  sortingFavourite = [
    {sort: 'none', buttonColor: 'btn btn-light btn-sm m-auto', buttonText: 'Favourite'},
    {sort: 'increase', buttonColor: 'btn btn-info btn-sm m-auto', buttonText: 'Favourite &#8595;'},
    {sort: 'decrease', buttonColor: 'btn btn-info btn-sm m-auto', buttonText: 'Favourite &#8593;'},
  ];
  sortingFavouriteState: number = 0;

  constructor(
    private articleService: ArticleService,
    private router: Router,
    private auth: AuthService,
    private profile: ProfileService
  ) { }

  ngOnInit(): void {
    // GETTING ALL THE ARTICLES
    this.articleService.getAll().subscribe(
      (res: any) => {
        this.articleList = res.articles;
      }
    );
    if (this.auth.currentUserValue) this.loggedIn = true;
  }

  // SHOW SPECIFIED ARTICLE ON CLICK EVENT
  public showChosenArticle(slug: string) {
    const encodedSlug = this.codec.encodeValue(slug);
    this.articleService.chosenSlug = slug;
    this.router.navigate(['article', 'show']);
  }

  // SORTING METHODS
  public sortCreated(): void {
    if (this.articleList.length >= 2) {
      this.sortingFavouriteState = 0;
      this.sortingCreatedState = this.sortingStateChange(this.sortingCreatedState);
      switch (this.sortingCreatedState) {
        case 0:
          break;
        case 1:
          this.articleList =  this.articleList.sort((firstItem, secondItem) => firstItem.createdAt! - secondItem.createdAt!);
          break;
        case 2:
          this.articleList =  this.articleList.sort((firstItem, secondItem) =>  secondItem.createdAt! - firstItem.createdAt!);
          break;
        default:
          break;
      }
    }
  }
  public sortFavourite(): void {
    if (this.articleList.length >= 2) {
      this.sortingCreatedState = 0;
      this.sortingFavouriteState = this.sortingStateChange(this.sortingFavouriteState);
      switch (this.sortingFavouriteState) {
        case 0:
          break;
        case 1:
          this.articleList =  this.articleList.sort((firstItem, secondItem) => firstItem.favoriteCount! - secondItem.favoriteCount!);
          break;
        case 2:
          this.articleList =  this.articleList.sort((firstItem, secondItem) =>  secondItem.favoriteCount! - firstItem.favoriteCount!);
          break;
        default:
          break;
      }
    }
  }

  // MAKE BUTTONS CYCLE THROUGH 3 STATE
  private sortingStateChange(state: number) {
    state++;
    if (state == 3) {state = 0};
    return state;
  }

  //GET PICKED USER PROFILE
  public showUser(username: string) {
    this.profile.getProfileInfo(username).subscribe(
      (res) => {
        console.log(res);
        this.pickedUserProfile = res.profile;
        console.log(this.pickedUserProfile);
      },
      (err) => console.log(err)
    )
  }

}
