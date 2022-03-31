import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesejosRoutingModule } from './desejos-routing.module';
import { DesejosformComponent } from './desejosform/desejosform.component';
import { ListadedesejosComponent } from './listadedesejos/listadedesejos.component';


@NgModule({
  declarations: [DesejosformComponent, ListadedesejosComponent],
  imports: [
    CommonModule,
    DesejosRoutingModule,
    FormsModule // Utilizar formularios no modulo
  ],
  exports: [
    DesejosformComponent,
    ListadedesejosComponent
  ]
})
export class DesejosModule { }
