import { Routes } from '@angular/router';
import { TitleComponent } from './pages/index/title/title.component';
import { CardComponent } from './pages/portifolio/card/card.component';

//Craindo rotas e passando o caminho
//Routes pede para trabalhar com objetos

//Caminho (path) vazio para abrir na pagina inicial e vai abrir o Component Title
//pathMatch - ''prefix' a URL precisa ter o caminho e pode ter outras coisas ou 'full' URL exata, não pode ter variação dela
//Para URL principal coloca 'full'

export const routes: Routes = [
  {path:'', component: TitleComponent, pathMatch:'full'},

  //Criando Rotas filhas (Children), pode passar um Vetor dentro de ' children '
  {path:'portifolio',component: CardComponent, children:[
    {path:':id',component: CardComponent}
  ]},


  //Rota Coriga aceita qualquer coisa com caminho - 'redirectTo' redireciona para outra rota
  //Se digitar qualquer coisa que não existe volta para home
  {path:'**', redirectTo:''}
];
