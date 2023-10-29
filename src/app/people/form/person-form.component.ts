import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { PersonRequest } from "../model/PersonRequest";
import { Person } from "../model/Person";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-person-form',
  templateUrl: './person-form.component.html',
  styleUrls: ['./person-form.component.css']
})
export class PersonFormComponent implements OnChanges{
  @Input()
  person: Person;

  @Output()
  modelChange = new EventEmitter<PersonRequest>();

constructor(private fb: FormBuilder, private route: ActivatedRoute){}

  personForm: FormGroup = this.fb.group({
    name: [null, {
      validators: [
        Validators.required,
        Validators.pattern('[a-zA-Z ]*')]
    }],
    age: [null, {
      validators: [
        Validators.required,
        Validators.min(1)]
    }],
  });

  ngOnChanges(changes: SimpleChanges): void {
    if (this.route.snapshot.params['id'] && changes){
      this.fillForm();
    }
  }

  fillForm(){
    this.personForm.patchValue({
      name: this.person?.name,
      age: this.person?.age
    });
  }

  onSubmit() {
    if(this.personForm.valid){
      this.modelChange.emit(this.personForm.value)
    }
  }

  get name(){
    return this.personForm.get('name');
  }

  get age(){
    return this.personForm.get('age');
  }

}
