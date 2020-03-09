const simplex = require('yasmij');

var input = {
  type: 'maximize',
  objective: '25.15x1 + 1.75x2 + 78x3 + 52.43x4 + 44.69x5',
  constraints: [
    '5000x1 + 10000x2 + 7000x3 + 3000x4 + 15000x5<= 32000',
    '5000x1 + 10000x2 <= 12000',
    '5000x1 <= 5000',
    '10000x2 <= 10000',
    '7000x3 <= 7000',
    '3000x4 <= 3000',
    '15000x5 <= 15000'
  ]
};
var output = simplex.solve(input);

console.log(output);
