const o = {apple: 1, xoxhitl: 2, ballon: 3, guitar: 4, xylophone: 5};
Object.keys(o)
  .filter(prop => prop.match(/^x/))
  .forEach(prop => console.log(`${prop}: ${o[prop]}`));
