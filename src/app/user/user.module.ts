import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { RegisterComponent } from '../register/register.component';

const routes: Routes = [
    {path:'register', component: RegisterComponent},
]

@NgModule({
  imports: [
    CommonModule, RouterModule.forChild( routes ), FormsModule
  ],
  declarations: [RegisterComponent]
})
export class UserModule { }
