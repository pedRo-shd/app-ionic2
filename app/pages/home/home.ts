/* O comando import, importa o que precisa utilizar, neste caso 'Componet' (que
foi importado pelo núcleo do 'angular'), 'NavController' (importado do ionic-angular) */
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/* Este @Component é um comando decorator, serve para dizer que a classe HomePage
representa um componenente, se fosse @Page, serveria para dizer que a classe
HomePage seria uma pagina...*/
/* Dentro do construtor do decorator: ({ }) passamos algumas configurações na
forma de um objeto javascript, com propriedades: 'templateUrl' e atributos/valores:
'build/pages/home/home.html' */
@Component({
  templateUrl: 'build/pages/home/home.html'
})

/* Definição de uma classe, usando typescript, exportamos uma classe para ela
ser visivel de outros arquivos typescript,  se eu tirasse export não
conseguiria enxergar a class HomePage fora desse arquivo, é por isso que
exportamos a classe*/
export class HomePage {
/* Sempre que criarmos uma nova instancia da classe HomePage esse constructor
vai ser o primeiro metodo a ser chamado, podemos usar atributos como: public/
privade, neste caso é public atributo: navCtrl do tipo: NavController...*/
  constructor(public navCtrl: NavController) {

  }
}
