var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


var sortingLogic = function(a, b) {
  //!!!!
  // the [0] is the first letter of name
  //!!!!
  if (a.name[0] === b.name[0]) {
    //if names are the same find lower age
    return a.age - b.age
  } else {
    //if first letter is before alphabetically place ahead
    if (a.name[0] < b.name[0]) {
      return -1;
    } else {
      return 1;
    }
  }
}


//
//   students.sort(function(a, b) {
//
//   if (a < b) {
//     return -1;
//   }
//   if (a > b) {
//     return 1;
//   }
//
//   // names must be equal
//   return 0;
// });
//
//   students.sort(function (a, b) {
//     return a.value - b.value;
//   });
//
//
// }



console.log(students.sort(sortingLogic));
