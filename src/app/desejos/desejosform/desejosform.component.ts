import { DesejoService } from './../../desejo.service';
import { UsuariosService } from 'src/app/usuarios.service';
import { Usuario } from './../../usuarios/usuario';
import { Component, OnInit } from '@angular/core';
import { Desejo } from '../desejo';

@Component({
  selector: 'app-desejosform',
  templateUrl: './desejosform.component.html',
  styleUrls: ['./desejosform.component.css']
})
export class DesejosformComponent implements OnInit {

  usuarios: Usuario[] = [];
  success: boolean = false;
  error: boolean = false;
  desejo: Desejo;


  constructor(
    private usuarioService: UsuariosService,
    private desejoService: DesejoService
  ) { }

  ngOnInit(): void {
    this.desejo = new Desejo();
    this.usuarioService.getUsuarios()
    .subscribe( resposta => {
      this.usuarios = resposta;
    })
  }

  onSubmit(){
    this.desejoService.salvar(this.desejo)
      .subscribe( resposta =>{
        this.desejo = new Desejo();
        this.success = true;
        this.error = false;
      }, error => {
        this.success = false;
        this.error = true;
      })
  }


}
