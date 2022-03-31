import { ListadedesejosComponent } from './listadedesejos/listadedesejos.component';
import { DesejosformComponent } from './desejosform/desejosform.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'desejos-form', component: DesejosformComponent},
  { path: 'desejos', component: ListadedesejosComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesejosRoutingModule { }
