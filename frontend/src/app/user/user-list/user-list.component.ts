import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInterface } from 'src/app/model/user';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public loggedIn: UserInterface = this.auth.currentUserValue;
  public userList: UserInterface[] = [];

  constructor(
    private userService: UserService,
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    // GETTING ALL THE USERS
    this.userService.getAll().subscribe(
      (res) => {
        this.userList = res;
      }
    );
    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal?.addEventListener('shown.bs.modal', function () {
      myInput?.focus()
    })
  }

  // USER DELETE ACTION
  public onDelete(email: string) {
    console.log(email);
    if (this.auth.currentUserValue.email == email) {
      console.log("You cannot delete yourself!");
      return null;
    } else {
      return this.userService.delete(email).subscribe(
        (res) => {
          console.log(res);
          this.ngOnInit();
        }
      );
    }

  }


}
