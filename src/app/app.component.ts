import { Component } from '@angular/core';
import { Product } from 'src/interfaces/product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Marcelo';
  age = 26;
  img = 'https://source.unsplash.com/random';
  btnDisabled = true;
  person={
    name: 'Marco Tulio',
    age: 27,
    avatar: this.img
  }
  names=['Pedro', 'Marcelo', 'Carly', 'Judas'];
  newName = "";
  products: Product[] = [
    {
      name: 'PiZZA',
      price:  150,
      image: 'https://api.lorem.space/image/pizza?w=150&h=150',
      category: 'all'
    },
    {
      name: 'Movies',
      price:  130,
      image: 'https://api.lorem.space/image/movie?w=150&h=220'
    },
    {
      name: 'Games',
      price:  120,
      image: 'https://api.lorem.space/image/game?w=150&h=220'
    },
    {
      name: 'Album',
      price:  110,
      image: 'https://api.lorem.space/image/album?w=150&h=150'
    },
    {
      name: 'Books',
      price:  1560,
      image: 'https://api.lorem.space/image/book?w=150&h=220'
    },
    {
      name: 'People',
      price:  74,
      image: 'https://api.lorem.space/image/face?w=150&h=150'
    },
  ]

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  ageIncrease(){
    this.person.age += 1;
  }
  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }
  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    element.value;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = "";
  }
  deleteName(index: number){
    this.names.splice(index, 1);
  }
}
