/* 7.2

function sum (a){
    let result =0;
    return  function (b){
        return result += a+b;
    }
    
    
}
console.log(sum(12)(12))
*/

/* 7.1
var abc = 0;
function sum2 (c){
   abc = abc + c
    return abc;
    
}
console.log(sum2(20)) 
console.log(sum2(20))
console.log(sum2(100))
console.log(sum2(20))
*/

//7.3
function somenum (){
for (i=0; i<10; i++){
 let number = prompt("Введите число, пжалста");
if (number === null) {
    alert("Вы отменили ввод.");
    return;
}

number = Number(number);
console.log(number)
if(isNaN(number)){
    alert("Было же по нормальному прошено ввести ЧИСЛО! Господи боже что делается то...");
    alert("Сейчас придется вводить еще раз, я не шучу!");
    alert("Нет, ну а что ты думал? Я тут корпел над этим ужасом, а ты всё поломал и уйдешь довольный? А вот не тут то было...");
    alert("Ладно, ладно... Приготовься и придумай число!");
    alert("3...");
    alert("2...");
    alert("1...");
    alert("Устал? Вот я тоже.");
    alert("Упорно. Ладно, забыли. Как говорится: <<Короче, Меченый, я тебя спас и в благородство играть не буду: выполнишь для меня пару заданий — и мы в расчете. >> ");
    
}
if (number < 100){
    alert("Ваша цифра меньше 100");
}
if (number > 100){
alert("Ваше число " + number + " больше 100. Спасибо за внимание")
return
}
}
}
somenum()
