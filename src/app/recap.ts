const username:string = 'Marcvicent3';
const sum = (a: number, b:number) => {
  return a + b;
}

sum(1,2);

class Person {
  constructor(public age: number, public lastname: string){
    this.age = age;
    this.lastname = lastname;
  }
}


const marc = new Person(26, 'Marcelo');
marc.age;
