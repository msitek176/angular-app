import { Component } from '@angular/core';
import { PeopleService } from "../service/people.service";
import { PersonRequest } from "../model/PersonRequest";
import { Router } from "@angular/router";
import { take} from "rxjs";

@Component({
  selector: 'app-person-create',
  templateUrl: './person-create.component.html'
})
export class PersonCreateComponent {
  isModal: boolean = false;

  constructor(private peopleService: PeopleService, private router: Router){}

  createPerson(person: PersonRequest){
    this.peopleService.createPerson(person)
      .pipe(take(1))
      .subscribe(() =>{
      this.openModal()
    })
  }

  openModal(): void{
    this.isModal = true;
  }

  closeModal(isClose: boolean):void{
    this.isModal = isClose;
    this.router.navigate(['/']);
  }

}
