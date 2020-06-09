var stroka01 = "          Lorem ipsum dolor sit amet.          "
var stroka02 = 1988
var stroka03 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem natus? Perferendis eius a blanditiis odio quia, tenetur aut harum nobis! Molestiae laboriosam sapiente vitae officia natus ab placeat, odio veniam corrupti nam, accusamus saepe, perspiciatis impedit dolorem quod dolore.s"

//— Если в качестве аргумента передана не строка - функция оповещает об этом пользователя
const sum = function(a){    
    if (typeof(a)!="string") {
        alert("Error")
    } else {
        alert(a)
    }
}
sum(stroka02)

// — В полученной (как аргумент) строке функция должна убрать все пробелы в начале и в конце
const sum2 = function(a){
    var str = a.trim();
    console.log(str)
}    
sum2(stroka01)

//— Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)
const sum3 = function(a){
    if (a.length>30) {
        var rest = a.substr(30);
        var change = a.replace(rest, "...");
        console.log(change)
    }
}
sum3(stroka03)