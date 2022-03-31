import { ListadeusuariosComponent } from './listadeusuarios/listadeusuarios.component';
import { UsuariosFormComponent } from './usuarios-form/usuarios-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'usuarios-form', component: UsuariosFormComponent},
  { path: 'usuarios-form/:id', component: UsuariosFormComponent},
  { path: 'usuarios', component: ListadeusuariosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
