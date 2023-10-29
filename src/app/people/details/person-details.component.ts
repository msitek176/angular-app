import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PeopleService } from "../service/people.service";
import { take } from "rxjs";
import { Person } from "../model/Person";

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html'
})
export class PersonDetailsComponent implements OnInit{
  person: Person;
  id: number;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getPerson()
  }

  getPerson(){
    this.peopleService.getPersonById(this.id)
      .pipe(take(1))
      .subscribe(
      data => this.person = data
    )
  }
}
