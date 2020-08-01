import { Component, OnInit, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';
import{ Howl} from 'howler';
import { ActivatedRoute, Router } from '@angular/router';
export interface Track{ 
  name:string;
  Caratula:string;
  path:string;

}

@Component({
  selector: 'app-musica',
  templateUrl: './musica.page.html',
  styleUrls: ['./musica.page.scss'],
})
export class MusicaPage {

Banda="";
GeneroF="";

InfoBanda:Array<any>=[
  {
    ImagenInfo:"",
    InfoBanda:""

  }
];

  playlist: Track[]=
  [
   {
   name:"",
   Caratula:"",
   path:""
   },
   {
     name:"",
     Caratula:"",
     path:""
   },
   {
     name:"",
     Caratula:"",
     path:""
   }, {
    name:"",
    Caratula:"",
    path:""
    }
  ];
  activetrack: Track = null;
  player: Howl = null;
  isPlaying = false;
  progres = 0;
  @ViewChild('range', {static: false }) range: IonRange;

  constructor( private activaterRouter:ActivatedRoute , public router:Router) {}
  start(track: Track  ){
    if (this.player){
      this.player.stop();
    }
    this.player= new Howl({
      src: [track.path],
      onplay: () =>
      {
        this.isPlaying = true;
        this.activetrack = track;
        this.updateProgress();
      },
      onend : () => {
        console.log('onend');
       let  index = this.playlist.indexOf(this.activetrack);
        if(index  !=  this.playlist.length-1){
          this.start(this.playlist[index +1]);
         }else{
          this.player.pause();
         }
      }
    });
    this.player.play();
  }
  toggleplayer(pause){
    this.isPlaying= !pause;
    if(pause){
      this.player.pause();
    }else {
      this,this.player.play();
    }
  }
  next(){
    let index = this.playlist.indexOf(this.activetrack);
    if(index != this.playlist.length-1){
      this.start(this.playlist[index +1]);
     }else{
       this.start(this.playlist[0]);
     }
  }
  prev(){
    let index = this.playlist.indexOf(this.activetrack);
    if(index>0){
      this.start(this.playlist[index - 1]);
    }else{
      this.start(this.playlist[this.playlist.length - 1]);
    }

  }
  seek(){
let  newValue = +this.range.value;

let duration = this.player.duration();
this.player.seek(duration * (newValue/100));
  }

  updateProgress(){
    let seek = this.player.seek();
    this.progres =(seek/this.player.duration()) *100 || 0;
    setTimeout(() => {
      this.updateProgress();
    },100)
  }
  stop(){    
    this.player.stop();
  this.activetrack = null;

  }
  Artistas(){
    this.router.navigate(['/prin',this.GeneroF]);
  }
  Generos(){
    this.router.navigate(['/home']);
  }

  ngOnInit() {

    this.Banda = this.activaterRouter.snapshot.paramMap.get("ArtistaF");
    this.GeneroF=this.activaterRouter.snapshot.paramMap.get("GeneroF");


    switch (this.Banda) {
      case "AC DC":
        this.InfoBanda=[
          {
            ImagenInfo:"./assets/InfoB/infoac.jpg",
            InfoBanda:"AC/DC es un grupo de hard rock australiano formado en 1973 en Sídney, Australia, por los hermanos escoceses Malcolm y Angus Young"
          }
        ];


        this.playlist= [{
        name:"Back in black",
        Caratula:"./assets/CaratulasAlbunes/CaratulasRock/back.jpg",
        path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
        },
        {
          name:"Thunderstruck",
          Caratula:"./assets/CaratulasAlbunes/CaratulasRock/back.jpg",
          path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
        },
        {
          name:"Highway to hell",
          Caratula:"./assets/CaratulasAlbunes/CaratulasRock/back.jpg",
          path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
        },
        {
          name:"Hells bells",
          Caratula:"./assets/CaratulasAlbunes/CaratulasRock/back.jpg",
          path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
        }
        ];
        
        break;
      case "Nirvana":
        this.InfoBanda=[
          {
            ImagenInfo:"./assets/InfoB/nirvanainfo.jpg",
            InfoBanda:"Nirvana fue una banda de grunge estadounidense procedente de Aberdeen, Washington, Estados Unidos fundada por el vocalista y guitarrista Kurt Cobain y el bajista Krist Novoselic en 1987"
          }
        ];

        this.playlist= [{
          name:"Come as you are",
          Caratula:"./assets/CaratulasAlbunes/never.jpg",
          path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
          },
          {
            name:"Smells like teen spirit",
            Caratula:"./assets/CaratulasAlbunes/never.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
          },
          {
            name:"Where Did You Sleep Last Night",
            Caratula:"./assets/CaratulasAlbunes/never.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
          },
          {
            name:"Scentless Apprentice",
            Caratula:"./assets/CaratulasAlbunes/never.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"

          }
          ];
          break;
        case"Led Zepelling":

        this.InfoBanda=[
          {
            ImagenInfo:"./assets/InfoB/ledinfo.jpg",
            InfoBanda:"Led Zeppelin fue un grupo británico de hard rock fundado en 1968 por el guitarrista Jimmy Page, quien había pertenecido a The Yardbirds. La banda estuvo integrada por John Paul Jones como bajista y teclista, el vocalista Robert Plant y John Bonham a la batería"
          }
        ];
        this.playlist= [{
          name:"Stairway to Heaven",
          Caratula:"./assets/CaratulasAlbunes/CaratulasRock/ledC.jpg",
          path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
          },
          {
            name:"Immigrant Song",
            Caratula:"./assets/CaratulasAlbunes/CaratulasRock/ledC.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
          },
          {
            name:"Rock and roll",
            Caratula:"./assets/CaratulasAlbunes/CaratulasRock/ledC.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
          },
          {
            name:"Whole lotta love",
            Caratula:"./assets/CaratulasAlbunes/CaratulasRock/ledC.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
          
          }
          ];
          break;
          case"Rolling stones":
          this.InfoBanda=[
            {
              ImagenInfo:"./assets/InfoB/rollinfo.jpg",
              InfoBanda:"Led Zeppelin es una banda británica de rock originaria de Londres. La banda se formó en abril de 1962​ por Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts e Ian"
            }            
          ];
          this.playlist= [{
            name:"Paint It Black",
            Caratula:"./assets/CaratulasAlbunes/CaratulasRock/rollC.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
            },
            {
              name:"Sympathy for the Devil",
              Caratula:"./assets/CaratulasAlbunes/CaratulasRock/rollC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
            },
            {
              name:"You can't always get what you want",
              Caratula:"./assets/CaratulasAlbunes/CaratulasRock/rollC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
            },
            {
              name:"Gimme shelter",
              Caratula:"./assets/CaratulasAlbunes/CaratulasRock/rollC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
  
            }
            ];
            break;
      case "Burzum":
        this.InfoBanda=[
          {
            ImagenInfo:"./assets/InfoB/burinfo.jpg",
            InfoBanda:"Burzum es un proyecto musical de black metal formado en 1991 por el noruego Count Grishnackh. Está considerado como uno de los proyectos impulsores del black metal noruego a comienzos de la década de 1990"
          }
        ];
        this.playlist= [{
          name:"Lost wisdom",
          Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/bur.jpg",
          path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
          },
          {
            name:"Dunkelheit",
            Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/bur.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
          },
          {
            name:"Spell of destruction",
            Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/bur.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
          },
          {
            name:"Dominus sathanas",
            Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/bur.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"

          }
          ];
          break;
        case "Judas Priest":
          this.InfoBanda=[
            {
              ImagenInfo:"./assets/InfoB/judasinfo.jpg",
              InfoBanda:"Judas Priest es una banda británica de heavy metal fundada en 1969 en Birmingham, Inglaterra. Su alineación inicial estuvo liderada por el vocalista Al Atkins"
            }
          ];
          this.playlist= [{
            name:"Turbo lover",
            Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/judasC.jpg",
            path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
            },
            {
              name:"Painkiller",
              Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/judasC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
            },
            {
              name:"Prisoner of your eyes",
              Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/judasC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
            },
            {
              name:"Breakin the law",
              Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/judasC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
  
            }
            ];
            break;
          case "Mayhem":
            this.InfoBanda=[
              {
                ImagenInfo:"./assets/InfoB/mayhem.jpg",
                InfoBanda:"Mayhem es una banda noruega de black metal fundada en 1984 por el bajista Jørn «Necrobutcher» Stubberud, el baterista Kjetil Manheim y el guitarrista Øystein «Euronymous» Aarseth"
              }
            ];
            this.playlist= [{
              name:"Life eternal",
              Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/mayC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
              },
              {
                name:"De mysteriis dom sathanas",
                Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/mayC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
              },
              {
                name:"Freezing moon",
                Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/mayC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
              },
              {
                name:"Falsified and hated",
                Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/mayC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
    
              }
              ];
              break;
          case "Slipknot":
            this.InfoBanda=[
              {
                ImagenInfo:"./assets/InfoB/slipkinfo.jpg",
                InfoBanda:"Slipknot es una banda estadounidense de metal alternativo formada en 1995 en Des Moines, Iowa, Estados Unidos. Desde el año 1999 hasta 2010 mantuvo su formación más exitosa después de diversos cambios en la misma"
              }
            ];
            this.playlist= [{
              name:"Psychosocial",
              Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/slipkC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
              },
              {
                name:"Wait and bleed",
                Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/slipkC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
              },
              {
                name:"Killpop",
                Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/slipkC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
              },
              {
                name:"XIX",
                Caratula:"./assets/CaratulasAlbunes/CaratulasMetal/slipkC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
    
              }
              ];
              break;

            /*Electronica*/ 
            case "Martin garrix":
            this.InfoBanda=[
              {
                ImagenInfo:"./assets/InfoB/martinfo.jpg",
                InfoBanda:"Martijn Gerard Garritsen, más conocido como Martin Garrix, ​​ es un DJ y productor neerlandés fundador del sello STMPD RCRDS. Ingresó a la encuesta anual Top 100 DJ's realizada por la revista DJ Magazine, directamente al puesto 40. En 2014,"
              }
            ];
            this.playlist= [{
              name:"Animals",
              Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/martC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
              },
              {
                name:"In the name of love",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/martC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
              },
              {
                name:"Scared to be lonely",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/martC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
              },
              {
                name:"So far away",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/martC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
    
              }
              ];
              break;
          case "Skrillex":
            this.InfoBanda=[
              {
                ImagenInfo:"./assets/InfoB/skinfo.jpg",
                InfoBanda:"Sonny John Moore, ​ más conocido por su nombre artístico Skrillex, es un DJ, productor musical, músico y cantante estadounidense de EDM y exvocalista y guitarrista de su primera banda atRisk entre 2001 a 2003​ y actual vocalista de la banda de post-hardcore y metalcore From First to Last"
              }
            ];
            this.playlist= [{
              name:"Bangarang",
              Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/skC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
              },
              {
                name:"first of the year",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/skC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
              },
              {
                name:"scary monsters and nice sprites",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/skC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
              },
              {
                name:"where are ü now",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/skC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
    
              }
              ];
              break;
              case "LMFAO":
            this.InfoBanda=[
              {
                ImagenInfo:"./assets/InfoB/lmfinfo.jpg",
                InfoBanda:"Sonny John Moore, ​ más conocido por su nombre artístico Skrillex, es un DJ, productor musical, músico y cantante estadounidense de EDM y exvocalista y guitarrista de su primera banda atRisk entre 2001 a 2003​ y actual vocalista de la banda de post-hardcore y metalcore From First to Last"
              }
            ];
            this.playlist= [{
              name:"Party rock anthem",
              Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/lmfC.jpg",
              path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
              },
              {
                name:"Sexy And I Know It",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/lmfC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
              },
              {
                name:"Sorry for party rocking",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/lmfC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
              },
              {
                name:"all night long",
                Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/lmfC.jpg",
                path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
    
              }
              ];
              break;
              
              
              
              case "avicii":
                this.InfoBanda=[
                  {
                    ImagenInfo:"./assets/InfoB/aviinfo.jpg",
                    InfoBanda:"Tim Bergling ​ más conocido por su nombre artístico Avicii, fue un DJ y compositor sueco, especializado en programación de audio, remezcla y producción de discos.​A los 16 años, comenzó a publicar sus remixes en foros de música electrónica, lo que lo llevó a su primer contrato discográfico"
                  }
                ];
                this.playlist= [{
                  name:"wake me up",
                  Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/aviC.jpg",
                  path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
                  },
                  {
                    name:"the nights",
                    Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/aviC.jpg",
                    path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
                  },
                  {
                    name:"waiting for love",
                    Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/aviC.jpg",
                    path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                  },
                  {
                    name:"hey brother",
                    Caratula:"./assets/CaratulasAlbunes/CaratulasElectro/aviC.jpg",
                    path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
        
                  }
                  ];
                  break;

                  //hip hop

                  case "Ice cube":
                this.InfoBanda=[
                  {
                    ImagenInfo:"./assets/InfoB/iceinfo.jpg",
                    InfoBanda:"O'Shea Jackson, conocido artísticamente como Ice Cube, es un rapero y actor estadounidense.​ Comenzó su carrera como miembro del polémico grupo de gangsta rap, N.W.A., y posteriormente lanzó su exitosa carrera en solitario en la música y en el cine."
                  }
                ];
                this.playlist= [{
                  name:"ain't got no haters",
                  Caratula:"./assets/CaratulasAlbunes/CaratulasH/iceC.jpg",
                  path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
                  },
                  {
                    name:"it was a good day",
                    Caratula:"./assets/CaratulasAlbunes/CaratulasH/iceC.jpg",
                    path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
                  },
                  {
                    name:"no vaseline",
                    Caratula:"./assets/CaratulasAlbunes/CaratulasH/iceC.jpg",
                    path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                  },
                  {
                    name:"good cop bad cop",
                    Caratula:"./assets/CaratulasAlbunes/CaratulasH/iceC.jpg",
                    path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
        
                  }
                  ];
                  break;
                  
                  case "Snoop dogg":
                    this.InfoBanda=[
                      {
                        ImagenInfo:"./assets/InfoB/doginfo.jpg",
                        InfoBanda:"Calvin Cordozar Broadus Jr. más conocido como Snoop Dogg o Snoop Lion, ​ es un rapero, cantante, productor y actor estadounidense. Es uno de los artistas de hip-hop y musica grupera con más éxito del West Coast rap además de uno de los más notables amigos del productor Dr. Dre"
                      }
                    ];
                    this.playlist= [{
                      name:"young, wild & free",
                      Caratula:"./assets/CaratulasAlbunes/CaratulasH/dogC.jpg",
                      path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
                      },
                      {
                        name:"imagine",
                        Caratula:"./assets/CaratulasAlbunes/CaratulasH/dogC.jpg",
                        path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
                      },
                      {
                        name:"doggy dogg world",
                        Caratula:"./assets/CaratulasAlbunes/CaratulasH/dogC.jpg",
                        path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                      },
                      {
                        name:"smoke weed everyday",
                        Caratula:"./assets/CaratulasAlbunes/CaratulasH/dogC.jpg",
                        path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
            
                      }
                      ];
                      break;
                      case "Eminem":
                        this.InfoBanda=[
                          {
                            ImagenInfo:"./assets/InfoB/emiinfo.jpg",
                            InfoBanda:"Marshall Bruce Mathers III, conocido por su nombre artístico Eminem y también por su álter ego Slim Shady, es un rapero, productor discográfico y actor estadounidense"
                          }
                        ];
                        this.playlist= [{
                          name:"rap god",
                          Caratula:"./assets/CaratulasAlbunes/CaratulasH/emiC.jpg",
                          path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
                          },
                          {
                            name:"the real slim shady",
                            Caratula:"./assets/CaratulasAlbunes/CaratulasH/emiC.jpg",
                            path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
                          },
                          {
                            name:"lose yourself",
                            Caratula:"./assets/CaratulasAlbunes/CaratulasH/emiC.jpg",
                            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                          },
                          {
                            name:"without me",
                            Caratula:"./assets/CaratulasAlbunes/CaratulasH/emiC.jpg",
                            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                
                          }
                          ];
                          break;
                          case "50 cent":
                        this.InfoBanda=[
                          {
                            ImagenInfo:"./assets/InfoB/50info.jpg",
                            InfoBanda:" Curtis James Jackson III más conocido por su nombre artístico 50 Cent, es un rapero, compositor y actor estadounidense. Alcanzó la fama mundial con el lanzamiento de sus álbumes Get Rich or Die Tryin' y The Massacre, ambos de ellos logrando éxito multi-platino."
                          }
                        ];
                        this.playlist= [{
                          name:"in da club",
                          Caratula:"./assets/CaratulasAlbunes/CaratulasH/50C.jpg",
                          path:"./assets/CaratulasArt/MusicaR/Hero2.mp3"
                          },
                          {
                            name:"21 questions",
                            Caratula:"./assets/CaratulasAlbunes/CaratulasH/50C.jpg",
                            path:"./assets/CaratulasArt/MusicaR/Hero1.mp3"
                          },
                          {
                            name:"i'm the man",
                            Caratula:"./assets/CaratulasAlbunes/CaratulasH/50C.jpg",
                            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                          },
                          {
                            name:"outta control",
                            Caratula:"./assets/CaratulasAlbunes/CaratulasH/50C.jpg",
                            path:"./assets/CaratulasArt/MusicaR/Hero3.mp3"
                
                          }
                          ];
                          break;
                         



          

    
      default:
        break;
    }

  }

}




