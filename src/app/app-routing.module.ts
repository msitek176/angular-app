import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonCreateComponent } from "./people/create/person-create.component";
import { PersonModifyComponent } from "./people/modify/person-modify.component";
import { PersonDetailsComponent } from "./people/details/person-details.component";
import { ListComponent } from "./people/list/list.component";

const ROUTES: Routes = [
  {
    path: '',
    component: ListComponent
  },
  {
    path: 'create',
    component: PersonCreateComponent
  },
  {
    path: 'details/:id',
    component: PersonDetailsComponent
  },
  {
    path: 'modify/:id',
    component: PersonModifyComponent
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
