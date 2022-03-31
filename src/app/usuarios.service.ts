import { Usuario } from './usuarios/usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlUsuario: string = 'http://localhost:8000/api/usuarios';

  constructor( private http: HttpClient) { }

  salvar( usuario: Usuario) : Observable<any>{
    return this.http.post<any>(this.urlUsuario, usuario);
  }
  atualizar( usuario: Usuario) : Observable<any>{
     return this.http.put<any>(`${this.urlUsuario}/${usuario.id}`, usuario);
   }

    getUsuarios() : Observable<Usuario[]>{
     return this.http.get<Usuario[]>(this.urlUsuario);
   }

   getUsuarioById(id: number) : Observable<Usuario>{
      return this.http.get<any>(`${this.urlUsuario}/${id}`);
    }
  deletar( usuario: Usuario) : Observable<any>{
     return this.http.delete<any>(`${this.urlUsuario}/${usuario.id}`);
   }
}
