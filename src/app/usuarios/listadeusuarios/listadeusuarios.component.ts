import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/usuarios.service';

@Component({
  selector: 'app-listadeusuarios',
  templateUrl: './listadeusuarios.component.html',
  styleUrls: ['./listadeusuarios.component.css']
})
export class ListadeusuariosComponent implements OnInit {
  usuarioSelecionado: Usuario;
  usuarios: Usuario[] = [];

  constructor(
    private service: UsuariosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.service.getUsuarios()
      .subscribe( resposta => {
        this.usuarios = resposta;
      })
  }

  novoCadastro(){
    this.router.navigate(['/usuarios-form']);
  }

  prepararDelecao(usuario: Usuario){

    this.usuarioSelecionado = usuario;

  }
  deletarCliente(){
    this.service.deletar(this.usuarioSelecionado)
    .subscribe( resposta =>{
      alert("Usuario deletado com sucesso")
    }, erro => {
      alert("Ocorreu erro ao deletar Usuario");
    })
  }


}
