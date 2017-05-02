var colors = require("colors/safe");
function printStar(hight) {
var j = " ";
  
  for (var i = 0; i < hight;  i++){
  setTimeout (function(){
   j += " * ";
  console.log(j);
console.log(colors.rainbow(j));
   },i * 1000);
  }
}
printStar();

module.exports = printStar;