import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  public items = [];
  public search = '';

  constructor() {
    // consulta remota
    this.items.push({
      image: 'https://mapio.net/images-p/6589267.jpg',
      title: 'Titulo',
      subtitle: 'Subtitulo',
      text: 'Texto',
      active: true
    });

    this.items.push({
      image: 'https://www.mexicoenfotos.com/MX12685364049093.jpg',
      title: 'Titulo2',
      subtitle: 'Subtitulo2',
      text: 'Texto2',
      active: false
    });

    this.items.push({
      image: 'https://mapio.net/images-p/22292684.jpg',
      title: 'Titulo3',
      subtitle: 'Subtitulo3',
      text: 'Texto3',
      active: true
    });
  }

  filter(): void{
    console.log('Buscando...' + this.search);

    this.items = this.items.filter((item) => {
      return (item.title.toLocalLowerCase().indexOf(this.search.toLocaleLowerCase()) > -1);
    });
  }

  deleteItem(pos: number): void{
    this.items.splice(pos, 1);
  }

  changeStatus(pos: number): void{
    this.items[pos].active = !this.items[pos].active;
  }

}
