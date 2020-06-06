var num = 266219
//превращаем число в строку
var strNum = String(num)
//разделяем строку на символы, создавая массив
console.log(strNum.split(""))
//перемножаем символы между собой
var arr = strNum.split("")
var mult = arr.reduce((a,b)=>a*b);
console.log(mult)

// //создаём переменную со степенью
var exp = 3
// //возводим mult в степень
var result = mult**exp
console.log(result)
//превращаем result в строку
var strResult = String(result)
// //выдёргиваем из строки 2 символа, начиная с нулевого
console.log(strResult.substr(0, 2))
