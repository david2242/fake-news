import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Event } from '../model/event';



@Injectable({
  providedIn: 'root'
})
export class EventService {

  private readonly EVENT_URL: string = 'http://localhost:3000/api/event';
  // public chosenSlug: string = "";

  constructor(
    private http: HttpClient) { }

  public create(event: Event): Observable<Event> {
    return this.http.post<Event>(this.EVENT_URL, event);
  }

  public getAll(): any {
    return this.http.get(this.EVENT_URL);
  }

  public get(id: string) {
    return this.http.get(`${this.EVENT_URL}/${id}`);
  }

  public update(id: string, event: Event) {
    return this.http.put(`${this.EVENT_URL}/${id}`, event);
  }

  public delete(id: string) {
    return this.http.delete(`${this.EVENT_URL}/${id}`);
  }

}
