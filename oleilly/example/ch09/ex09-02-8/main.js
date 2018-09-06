class Vehicle {
  constructor(){
    this.passengers = [];
    console.log("Vehicleが生成された");
  }
  addPassener(p){
    this.passengers.push(p);
  }
}

class Car extends Vehicle {
  constructor(){
    super(); // スーパークラスのコンストラクタを呼び出している
    console.log("Carが生成された");
  }
  deployAribags() {
    console.log("バーン！");
  }
}

const v = new Vehicle();
v.addPassener("太郎");
v.addPassener("花子");
console.log(v.passengers);

const c = new Car();
c.addPassener("景子");
c.addPassener("ミドリ");
console.log(c.passengers);
c.deployAribags();

class Motorcycle extends Vehicle {}

const c2 = new Car();
const m = new Motorcycle();
console.log(c instanceof Car);
console.log(c instanceof Vehicle);
console.log(m instanceof Car);
console.log(m instanceof Motorcycle);
console.log(m instanceof Vehicle);