var num = 266219
//превращаем число в строку
var strNum = String(num)
//разделяем строку на символы, создавая массив
console.log(strNum.split(""))
//перемножаем символы между собой
var multi = strNum[0]*strNum[1]*strNum[2]*strNum[3]*strNum[4]*strNum[5]
console.log(multi)
//создаём переменную со степенью
var exp = 3
//возводим multi в степень
var result = multi**exp
console.log(result)
//превращаем result в строку
var strResult = String(result)
//выдёргиваем из строки 2 символа, начиная с нулевого
console.log(strResult.substr(0, 2))