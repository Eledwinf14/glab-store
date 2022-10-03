const username: string = 'Eduin';
const res = (a:number, b:number) =>{
  return a-b;
}
res(50,20);

/*class persona {
  age: number;
  name: string;


   constructor(age:number,name:string){
this.age = age;
this.name = name
   }
  }*/
  class persona{
    constructor(public age:number,name:string){}
  }

  const eduin = new persona(25,'Eduin');
  eduin.age
