import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import { EventListComponent } from './event-list/event-list.component';
import { EventFormComponent } from './event-form/event-form.component';
import { EventComponent } from './event/event.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {path: "", component: EventListComponent},
  {path: "form", component: EventFormComponent},
  {path: "form/:id", component: EventFormComponent},
  {path: "/:id", component: EventComponent}
]

@NgModule({
  declarations: [
    EventListComponent,
    EventFormComponent,
    EventComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class EventModule { }
