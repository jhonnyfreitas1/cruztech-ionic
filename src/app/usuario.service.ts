import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  [x: string]: any;
  
  public urlUser = 'https://swapi.co/api/films';

  constructor(public http: HttpClient) { 
    console.log("iae sera que entrou o provider?");
    
  }

  public findAll():Observable<any>{
    let header = new HttpHeaders();
    header.append('Accept','application/json');
    header.append('content-type','application/json');
    header.append('Authorization','Bearer ');
    return this.http.get(this.urlUser, { headers: header })
  } 
  find1All():Promise<any> {
    return new Promise((resolve, reject) => {
 
      let url =" https://swapi.co/api/films";
 
      this.http.get(url)
        .subscribe((result: any) => {
          return result;
        },
        (error) => {
          return reject(error.json());
        });
    });
  }
}
