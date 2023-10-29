import { Component, OnInit} from '@angular/core';
import { PersonRequest } from "../model/PersonRequest";
import { Person } from "../model/Person";
import { ActivatedRoute, Router } from "@angular/router";
import { PeopleService } from "../service/people.service";
import { take } from "rxjs";

@Component({
  selector: 'app-person-modify',
  templateUrl: './person-modify.component.html'
})
export class PersonModifyComponent implements OnInit{
  person: Person;
  isModal: boolean = false;
  id: number;

  constructor(private route: ActivatedRoute, private peopleService: PeopleService, private router: Router) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getPerson();
  }

  getPerson(){
    this.peopleService.getPersonById(this.id)
      .pipe(take(1))
      .subscribe(
        data => this.person = data
      )
  }

  updatePerson(person: PersonRequest){
    this.peopleService.updatePerson({...person, id: this.id})
      .pipe(take(1))
      .subscribe(
        () => this.openModal()
      )
  }

  openModal(): void{
    this.isModal = true;
  }

  closeModal(isClose: boolean):void{
    this.isModal = isClose;
    this.router.navigate(['/list']);
  }

}
