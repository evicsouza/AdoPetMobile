import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule {
  $nome: string;
  email: string;
  senha: string;
  $id?: string;

  constructor(){}
 }
