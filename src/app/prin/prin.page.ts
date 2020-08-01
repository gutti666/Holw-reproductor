import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prin',
  templateUrl: './prin.page.html',
  styleUrls: ['./prin.page.scss'],
})
export class PrinPage implements OnInit {


  GeneroF="";
  ArtistaF="";
  Colecciion: Array<any>=[{
    NombreArtista:"" ,ImagenGenero:""},
    {NombreGenero:"", ImagenGenero:""},
    {NombreGenero:"" ,ImagenGenero:""},
    {NombreGenero:"" , ImagenGenero:""}];

 
  constructor(private activaterRouter:ActivatedRoute,public router:Router) { }


  ngOnInit() {

   this.GeneroF = this.activaterRouter.snapshot.paramMap.get("GeneroF");
   switch (this.GeneroF) {
     case "Rock":
        this.Colecciion= [{
        NombreArtista:"Nirvana" ,ImagenGenero:"./assets/CaratulasArt/Nirvana.jpg"},
        {NombreArtista:"AC DC", ImagenGenero:"./assets/CaratulasArt/acdc.jpg"},
        {NombreArtista:"Led Zepelling" ,ImagenGenero:"./assets/CaratulasArt/led.jpg"},
        {NombreArtista:"Rolling stones" , ImagenGenero:"./assets/CaratulasArt/Roll.jpg"}];
        break;
      case "Metal":
        this.Colecciion= [{
          NombreArtista:"Burzum" ,ImagenGenero:"./assets/CaratulasArt/CaratulasM/bur.jpg"},
          {NombreArtista:"Judas Priest", ImagenGenero:"./assets/CaratulasArt/CaratulasM/judas.jpg"},
          {NombreArtista:"Mayhem" ,ImagenGenero:"./assets/CaratulasArt/CaratulasM/may.jpg"},
          {NombreArtista:"Slipknot" , ImagenGenero:"./assets/CaratulasArt/CaratulasM/slipk.jpg"}];
        break;
      case "Electronica":
        this.Colecciion= [{
          NombreArtista:"Skrillex" ,ImagenGenero:"./assets/CaratulasArt/CaratulasE/Sk.png"},
          {NombreArtista:"LMFAO", ImagenGenero:"./assets/CaratulasArt/CaratulasE/Lmf.jpg"},
          {NombreArtista:"Martin garrix" ,ImagenGenero:"./assets/CaratulasArt/CaratulasE/mart.jpg"},
          {NombreArtista:"avicii" , ImagenGenero:"./assets/CaratulasArt/CaratulasE/av.jpg"}];
        break;
        case "Hip Hop":
          this.Colecciion= [{
            NombreArtista:"Ice cube" ,ImagenGenero:"./assets/CaratulasArt/CaratulasH/ice.jpg"},
            {NombreArtista:"Snoop dogg", ImagenGenero:"./assets/CaratulasArt/CaratulasH/dog.jpg"},
            {NombreArtista:"Eminem" ,ImagenGenero:"./assets/CaratulasArt/CaratulasH/emi.jpg"},
            {NombreArtista:"50 cent" , ImagenGenero:"./assets/CaratulasArt/CaratulasH/50.png"}];
          break;
   
     default:

       break;
   }

  }
  EnvioNav(Artista,GeneroF) {
    this.ArtistaF=Artista;
      this.router.navigate(['/musica', this.ArtistaF,this.GeneroF]);

     
  }
  Generos(){
    this.router.navigate(['/home']);
  }

  

}
