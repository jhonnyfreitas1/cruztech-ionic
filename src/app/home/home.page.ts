import { Component } from '@angular/core';
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UsuarioService],
})
export class HomePage {

  public usuarios = [];
  
  constructor(private usuarioService:UsuarioService) {
    this.getUsuarios();
  }
  public getUsuarios(){
    
  console.log(this.usuarioService.findAll().subscribe(response => this.usuarios));
   
  }

 


 }
