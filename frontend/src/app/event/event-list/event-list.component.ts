import { Component, OnInit } from '@angular/core';
import {EventService} from "../../service/event.service";
import {Observable} from "rxjs";
import {Event} from "../../model/event";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  list$: Observable<Event[]> = this.eventService.getAll();
  loggedIn: boolean = true;

  constructor(
    private eventService: EventService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onDelete(id: string):void {
    this.eventService.delete(id).subscribe(
      res => {
        console.log(res);
        this.router.navigate(['event']);
      },
      err => console.error(err)
    )
  }

  public updateEvent(id: string): void {
    this.router.navigate(['event', 'form', id])
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }
}
