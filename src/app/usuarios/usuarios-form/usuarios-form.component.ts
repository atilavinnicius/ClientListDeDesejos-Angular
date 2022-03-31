import { Router, ActivatedRoute } from '@angular/router';
import { UsuariosService } from './../../usuarios.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-usuarios-form',
  templateUrl: './usuarios-form.component.html',
  styleUrls: ['./usuarios-form.component.css']
})
export class UsuariosFormComponent implements OnInit {

  usuario: Usuario;
  success: boolean = false;
  erro: boolean = false;
  id: number;

  constructor(
    private service: UsuariosService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {//injetado service no construtor
  }

  ngOnInit(): void {
    this.usuario = new Usuario();
    let parametro = this.activatedRoute.params;
    if( parametro && parametro.value && parametro.value.id){
        this.id = parametro.value.id;
        this.service.getUsuarioById(this.id)
          .subscribe( usuario => {
            this.usuario = usuario;
            console.log(usuario);
          })
    }
  }

  onSubmit(){
    // Dados sendo Recebido:
    if( this.id) {
      this.service.atualizar(this.usuario)
        .subscribe( response => {
          console.log(response);
        this.usuario = new Usuario();
        this.success = true;
        this.erro = false;
      }, erro => {
          console.log(erro);
          this.erro = true;
          this.success = false;

      })
    }else{

        this.service
        .salvar(this.usuario)
        .subscribe( response => {
          console.log(response);
        this.usuario = new Usuario();
        this.success = true;
        this.erro = false;
      }, erro => {
          console.log(erro);
          this.erro = true;
          this.success = false;

      })
    }

  }

  voltarParaListagem(){
      this.router.navigate(['/usuarios']);

  }

}
