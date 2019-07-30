import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { SharedRoutingModule } from './shared-routing.module';
import {MatStepperModule, MatFormFieldModule, MatInputModule, MatCardModule, MatButtonModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'



@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class SharedModule { }
