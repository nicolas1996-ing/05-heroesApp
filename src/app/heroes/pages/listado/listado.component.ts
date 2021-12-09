import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/Heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
      .flex-tarjets{
        display : flex; 
        widht: 100%;
        flex-wrap : wrap;
        flex-direction: row; 
        justify-content: space-around;
      }

      .tarjets{
        height: 100%;
        witdh: 100%;
        margin-bottom:20px;
               
      }

      .tarjets-img{
        height: 500px;
        width: 100%
      }

      .texto{
        max-witdh: 10px;
        overflow: hidden;
        border: 1px solid black;
      }
    
     
    
    `
  ]
})
export class ListadoComponent implements OnInit {

  constructor(private heroesService: HeroesService) { } // importar servicios 
  heroes: Heroe[] = [];

  ngOnInit(): void {
    // subscribirse al servicio 
    this.heroesService.getHeroes()
      .subscribe(resp => {
        // resp[0].characters;
        // resp.length;
        this.heroes = resp;
      });
  }

}
