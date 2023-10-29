import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Person } from "../model/Person";
import { PeopleService } from "../service/people.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    people$: Observable<Person[]>;

    public constructor(private peopleService: PeopleService) {}

    ngOnInit() {
      this.people$ = this.peopleService.getAllPeople();
    };

}
