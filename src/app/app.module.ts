import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListComponent } from './people/list/list.component';
import { HttpClientModule} from "@angular/common/http";
import { PersonDetailsComponent } from './people/details/person-details.component';
import { PersonCreateComponent } from './people/create/person-create.component';
import { PersonModifyComponent } from './people/modify/person-modify.component';
import { RouterOutlet } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { PersonFormComponent } from './people/form/person-form.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SuccessModalComponent } from './people/notification/success-modal/success-modal.component';
import { BackButtonDirective } from './people/directive/back-button.directive';
import { NgOptimizedImage } from "@angular/common";
import { ButtonBackComponent } from './people/back/button-back.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    PersonDetailsComponent,
    PersonCreateComponent,
    PersonModifyComponent,
    PersonFormComponent,
    SuccessModalComponent,
    BackButtonDirective,
    ButtonBackComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        RouterOutlet,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
