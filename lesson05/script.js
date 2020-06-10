let arr = ['5', '16', '29', '33', '41', '267', '448'];
arr.forEach((num)=>{
    if (num.startsWith('2') || num.startsWith('4')) {
        console.log(num)
    }
});

var userNumber = 10; // число полученое от пользователя
var list = new Array;

nextPrime:
for (var n = 2; n <= 100; n++) {
  for (var j = 2; j < n; j++) {
    if (n % j == 0) continue nextPrime;
  }
  console.log(n + " 1 " + n)
}
