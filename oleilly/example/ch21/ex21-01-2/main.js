const USER_EMAIL = Symbol();

class User {
  set email(value){
    if(!/@/.test(value)) throw new Error(`不正なアドレス：${value}`)
    this[USER_EMAIL] = value
  }
  get email() {
    return this[USER_EMAIL];
  }
}

const u = new User();
u.email = "hoee";
console.log(u.email);