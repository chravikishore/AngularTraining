import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnewayComponent } from './oneway/oneway.component';
import { TwowayComponent } from './twoway/twoway.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplatedrivenComponent } from './templatedriven/templatedriven.component';
import { ValidationsComponent } from './validations/validations.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    OnewayComponent,
    TwowayComponent,
    ReactiveformsComponent,
    TemplatedrivenComponent,
    ValidationsComponent
  ],
  exports: [
    OnewayComponent
  ]
})
export class ExamplesModule { }
