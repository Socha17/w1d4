// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  // for (var i = 0; i < arr.length; i++) {
  //   if (arr[i] === "Waldo") {
  //     found(i);   // execute callback
  //   }
  // }


  arr.forEach(function(i) {
    if (i === "Waldo") {
     found(arr.indexOf(i));
    }
 });

}


function actionWhenFound(i) {
  console.log("Found him! at " + i);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
