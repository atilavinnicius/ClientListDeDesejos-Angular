import { DesejoService } from './desejo.service';
import { UsuariosService } from './usuarios.service';
import { DesejosModule } from './desejos/desejos.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { TemplateModule } from './template/template.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,//Http client
    AppRoutingModule,
    TemplateModule,
    UsuariosModule,
    DesejosModule
  ],
  providers: [
    UsuariosService,
    DesejoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
