import { DesejoService } from './../../desejo.service';
import { Component, OnInit } from '@angular/core';
import { Desejo } from '../desejo';

@Component({
  selector: 'app-listadedesejos',
  templateUrl: './listadedesejos.component.html',
  styleUrls: ['./listadedesejos.component.css']
})
export class ListadedesejosComponent implements OnInit {
  nome: String;
  usuario_id: String;
  dataPretendida: String;

  desejos: Desejo[] = [];
  constructor(private desejoService: DesejoService) { }

  ngOnInit(): void {
    this.desejoService.getDesejos()
      .subscribe( resposta =>{
        console.log(resposta)
        this.desejos = resposta;
      })
  }

  filtrar(){
    if(this.nome != null){
      this.desejoService.filtrar(this.nome)
      .subscribe( resposta => {
        this.desejos = resposta;

      })
    }
    if(this.usuario_id != null){
      this.desejoService.filtrar(this.usuario_id)
      .subscribe( resposta => {
        this.desejos = resposta;

    })
  }
      if(this.dataPretendida != null){
      this.desejoService.filtrar(this.dataPretendida)
      .subscribe( resposta => {
         this.desejos = resposta;



    })
  }

}
}
