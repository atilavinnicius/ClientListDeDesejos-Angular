import { BuscaDesejo } from './desejos/listadedesejos/buscadesejo';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Desejo } from './desejos/desejo';

@Injectable({
  providedIn: 'root'
})
export class DesejoService {

  urlDesejo: string = 'http://localhost:8000/api/desejos';
  urlDesejofiltrar: string = 'http://localhost:8000/api/desejos/filtrar';

  constructor( private http: HttpClient) { }

  salvar( desejo: Desejo) : Observable<any>{
    return this.http.post<any>(this.urlDesejo, desejo);
  }
  filtrar( filtro: String) : Observable<any>{
    return this.http.post<any>(this.urlDesejofiltrar, {filtro: `${filtro}`});
  }
  // atualizar( desejo: Desejo) : Observable<any>{
  //   return this.http.put<any>(`${this.urlDesejo}/${desejo.id}`, desejo);
  // }

   getDesejos() : Observable<any[]>{
   return this.http.get<Desejo[]>(this.urlDesejo);
   }

  // getDesejoById(id: number) : Observable<Desejo>{
  //   return this.http.get<any>(`${this.urlDesejo}/${id}`);
  // }
  // deletar( desejo: Desejo) : Observable<any>{
  //   return this.http.delete<any>(`${this.urlDesejo}/${desejo.id}`);
  // }
}
