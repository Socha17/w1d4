var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

/* Your code here */
var result = input.map(function(elem) {
  return Math.sqrt(elem.x * elem.x + elem.y * elem.y)
  //
  // var resultMath = 0;
  // var x = 0;
  // var y = 0;
  //
  //
  //   for (var i = 0; i < input.length; i++) {
  //       x = input[i].x * input[i].x
  //       y = input[i].y * input[i].y
  //       resultMath =  x + y
  //       resultMath = Math.sqrt(resultMath)
  //   }
  // return resultMath

  }

);





console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);
