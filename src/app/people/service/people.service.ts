import { Injectable } from '@angular/core';
import { Person } from "../model/Person";
import { HttpClient } from "@angular/common/http";
import { PersonRequest } from "../model/PersonRequest";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  url: string = 'http://127.0.0.1:3000/people';

  constructor(private http: HttpClient) { }

  getAllPeople(){
    return this.http.get<Person[]>(this.url).pipe()
  }

  getPersonById(id:number){
    return this.http.get<Person>(this.url+`/${id}`)
  }

  createPerson(person: PersonRequest) {
    return this.http.post(this.url, person)
  }

  updatePerson(person: Person) {
    return this.http.patch(this.url+`/${person.id}`, person)
  }
}
