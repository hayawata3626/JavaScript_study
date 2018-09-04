const o = {
  name: 'Julie',
  greetBackwards: function () {
    const self = this;
    function getReverseName() {
      let nameBackwords = '';
      for (let i = self.name.length; i >= 0; i--){
        nameBackwords += self.name[i];
      }
      return nameBackwords;
    }
    return `${getReverseName()} si eman ym ,olleH`;
  },
};
console.log(o.greetBackwards());