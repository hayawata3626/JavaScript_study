class Car {
  constructor(){

  }
}

class InsurancePolicy {

}

function makeInsurable(o) {
  o.addInsurancePolicy = function (p) {
    this.insurancePolicy = p;
  }
  o.getInsurancePolicy = function () {
    return this.insurancePolicy;
  }
  o.isInsured = function () {
    return !!this.insurancePolicy;
  }
}

const car1 = new Car();
makeInsurable(car1);
console.log(car1.isInsured());
car1.addInsurancePolicy(new InsurancePolicy());
console.log(car1.isInsured());
