import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent implements OnInit {

  constructor(private parametro: ActivatedRoute, private navegador: Router){

    //Recuperando a informação do Id passado na URL
    this.parametro.params.subscribe(
      res => console.log(res)
    )

     //Recuperando os QueryParams (parametros de Consulta) da URL
    //Recuperando da URL http://localhost:4200/portifolio/1?name=Natalia&token=123
    //variavel será igual {name:'Natalia', token:'123'}

    this.parametro.queryParams.subscribe(
      variavel => console.log(variavel)
    )

    //Recuperando parametro da Rota Children (Filha de Portifolio)
    //Só colocar 'firstChild' a '?' é pq pode não existir
    this.parametro.firstChild?.params.subscribe(
      res => console.log(res)
    )

    //Rota Children (FILHA) Parametros de Consulta
    this.parametro.firstChild?.queryParams.subscribe(
      variavel => console.log(variavel)
    )
  }

  //Colocando um tempo para ficar na pagina Portifolio
  //Depois de 5 seg redireciona para outra Pagina
  ngOnInit(): void {

    //o ''navigate' permite ir para uma Rota, no caso indo pra Home
    //setInterval(()=>{
   //   this.navegador.navigate(['/'])
   // },5000)
  }


}


