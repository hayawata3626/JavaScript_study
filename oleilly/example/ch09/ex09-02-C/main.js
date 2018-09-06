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

const ADD_POLICY = Symbol();
const GET_POLICY = Symbol();
const IS_INSURED = Symbol();
const _POLICY = Symbol();

function makeInsuable(o) {
  o[ADD_POLICY] = function (p) {this[_POLICY] = p;}
  o[GET_POLICY] = function () {return this[_POLICY];}
  o[IS_INSURED] = function() {return !!this[_POLICY];}
}

makeInsuable(Car.prototype);

const car1 = new Car();
console.log(car1[IS_INSURED]());
car1[ADD_POLICY](new InsurancePolicy());
console.log(car1[IS_INSURED]());

const car2 = new Car();
console.log(car2[IS_INSURED]());
car2[ADD_POLICY](new InsurancePolicy());
console.log(car2[IS_INSURED]());