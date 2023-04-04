import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {EventService} from "src/app/service/event.service"
import {UserInterface} from "../../model/user";
import {AuthService} from "../../service/auth.service";
import {Event} from "../../model/event";
@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss']
})
export class EventFormComponent implements OnInit {

  public updating: boolean = false;
  public eventId: string | null = '';
  public loggedIn: UserInterface = this.auth.currentUserValue;
  public currentEvent?: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private auth: AuthService,
    private activatedRoute: ActivatedRoute
  ) {
  }


  public eventForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    cause: new FormControl('', [Validators.required]),
    nature: new FormControl('', [Validators.required]),
    location: new FormGroup({
      zip: new FormControl('', [Validators.required]),
      city: new FormControl('', [Validators.required]),
      address: new FormControl('', [Validators.required]),
      floorDoor: new FormControl('')
    }),
    locationCode: new FormControl('', [Validators.required]),
    public: new FormControl('', [Validators.required]),
    startTime: new FormControl('', [Validators.required]),
    endTime: new FormControl('', [Validators.required]),
    dressCode: new FormControl('', [Validators.required])
  });

  public get name() {return this.eventForm.get('name')}
  public get cause() {return this.eventForm.get('cause')}
  public get nature() {return this.eventForm.get('nature')}
  public get location() {return this.eventForm.get('location')}
  public get locationCode() {return this.eventForm.get('locationCode')}
  public get public() {return this.eventForm.get('public')}
  public get startTime() {return this.eventForm.get('startTime')}
  public get endTime() {return this.eventForm.get('endTime')}
  public get dressCode() {return this.eventForm.get('dressCode')}
  public get zip() {return this.eventForm.controls.location.get('zip');}
  public get city() {return this.eventForm.controls.location.get('city');}
  public get address() {return this.eventForm.controls.location.get('address')}
  public get floorDoor() {return this.eventForm.controls.location.get('floorDoor')}

  // get f() {
  //   return this.eventForm.controls;
  // }

  ngOnInit(): void {
    this.eventId = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.eventId) {
      this.updating = true; //THERE ARE VALUES, -> EVENT UPDATE
      this.eventService.get(this.eventId).subscribe(
        (responseData: any) => {
          console.log(responseData);
          // this.currentEvent = responseData;
          this.eventForm.patchValue(responseData);
        }
      )
    }
  }

  submitEvent(): void {
    // console.log(this.eventForm)
    // console.log(this.eventForm.value);
    this.eventService.create(this.eventForm.value).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

  updateEvent(): void {
    this.eventService.update(this.eventId!, this.eventForm.value).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

  deleteEvent(): void {
    this.eventService.delete(this.eventId!).subscribe(
      res => console.log(res),
      err => console.error(err)
    )
  }

  changeNature(e: any) {
    console.log(e.target.value);
  }
}
