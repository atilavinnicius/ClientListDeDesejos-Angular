import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from '../home/home.component';



@NgModule({
  declarations: [NavbarComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule //utilizar rotas no modulo template (Sidebar -> routelink)
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
    FooterComponent,

  ]
})
export class TemplateModule { }
