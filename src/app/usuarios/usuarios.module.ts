import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { ListadeusuariosComponent } from './listadeusuarios/listadeusuarios.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UsuariosFormComponent, ListadeusuariosComponent],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    FormsModule // Utilizar formulario
  ],
  exports: [
    UsuariosFormComponent,
    ListadeusuariosComponent
  ]
})
export class UsuariosModule { }
