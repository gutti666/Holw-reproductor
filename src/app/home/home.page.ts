import { RouterModule, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  GeneroF="";
  
  SelcGenero : Array<any>=[{
    NombreGenero:"Rock" ,ImagenGenero:"./assets/CaratulasGen/rock.jpg"},
    {NombreGenero:"Metal", ImagenGenero:"./assets/CaratulasGen/metal.jpg"},
    {NombreGenero:"Electronica" ,ImagenGenero:"./assets/CaratulasGen/Electro.jpg"},
    {NombreGenero:"Hip Hop" , ImagenGenero:"./assets/CaratulasGen/hip.jpg"}]

  constructor(
    public router:Router

  ) {}

  EnvioNav(GeneroFF) {
    this.GeneroF=GeneroFF;
      this.router.navigate(['/prin', this.GeneroF]);

  }

}
