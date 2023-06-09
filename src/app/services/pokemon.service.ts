import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
baseUrl:string=environment.baseUrl;
constructor(private http:HttpClient){}
getPokemons(index:any){
  return this.http.get<any>(`${this.baseUrl}/pokemon/${index}`);
}


}
