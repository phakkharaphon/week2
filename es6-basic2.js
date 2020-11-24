//keyword
const orange = 12;
let apple = 15;
var banana = 10;
{
    var banana = 5; //10
    console.log(banana + 5); //10
}
orange = 10;
console.log(banana + 10); //15
console.log(apple); //15