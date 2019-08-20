import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnewayComponent } from './examples/oneway/oneway.component';
import { TwowayComponent } from './examples/twoway/twoway.component';
import { ReactiveformsComponent } from './examples/reactiveforms/reactiveforms.component';
import { TemplatedrivenComponent } from './examples/templatedriven/templatedriven.component';
import { ValidationsComponent } from './examples/validations/validations.component';

const routes: Routes = [
  {
    path: 'oneway',
    component: OnewayComponent
  },
  {
    path: 'twoway',
    component: TwowayComponent
  },
  {
    path: 'reactive',
    component: ReactiveformsComponent
  },
  {
    path: 'template',
    component: TemplatedrivenComponent
  },
  {
    path: 'validations',
    component: ValidationsComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
