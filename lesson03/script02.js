'use strict'
var lang = prompt("Введить язык ru или en")

//через if

if (lang==="ru") {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье")
}else if (lang==="en"){
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday")
}else{
    console.log("Язык не определён")
}

//через switch-case 

switch (lang) {
    case "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье")
        break;
    case "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday")
        break;
}

//через многомерный массив без ифов и switch.

var language = [
    ["Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"],
    ["Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"]
]
var result = lang ==="ru" ? language[0] : "ошибка"
console.log(result)

var result02 = lang ==="en" ? language[1] : "error"
console.log(result02)


//--2--

var namePerson = prompt("Введите имя Артём или Максим")
var profession = namePerson === "Артём" ? console.log("директор") : console.log("студент")
var profession = namePerson === "Максим" ? console.log("преподаватель") : console.log("студент")