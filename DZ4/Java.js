/* 4.1
var yourname = prompt("Ваше имя?")
alert(`Hello, ${yourname}! How are you?`); */

/* 4.3
var year = prompt("Your year");
var city = prompt("Your city");
var sport = prompt("Your favourite sport");
var result = `Вы родились в ${year} году.`;
if(city == "Washington") {
    result += `вы живете в столице США `;
}

else if(city == "Kyiv"){
    result += `Вы живете в столице Украины. `;
}

else if(city == "London"){
   result += `Вы живете в столице Англии. `;
} 

else {
   result += `Вы живете в городе ${city}. `;
} 

if(sport == "Box"){
    result += "Круто! Вы хотите быть как Александр Усик? "
}

else if(sport == "Tenis"){
    result += "Круто! Вы хотите быть как Новак Джакович? "
}

else if(sport == "Karate"){
    result += "Круто! Вы хотите быть как Молдир Жанбырбай? "
}


alert(result);
*/

/*  4.2
var number = +prompt("Введите трехзначное число");
if(number < 100 || number > 999){
alert("Ваше число не является трехзначным");
}
else{
var digit1 = (number - (number % 100)) / 100; 
var digit2 = ((number % 100) - (number % 10)) / 10;
var digit3 = number % 10;
console.log(number);
if(digit1 === digit2 && digit2 === digit3){
    alert("Вы ввели 3 одинаковых цифры!");
}

 else if ( digit1 === digit2 || digit2 === digit3 || digit1 === digit3){
alert("Вы ввели 2 одинаковых цифры!");
}

else{
    alert("В вашем числе нет одинаковых цифр")
}
}

*/ 

// 4.4
let numorstr = prompt("input number or string");
console.log(numorstr);

switch(true){
    case (numorstr === null):
        console.log("Ви скасували");
        break;
        case  (numorstr.trim() === ''):
            console.log("empty string")
            break;
            case (isNaN(+numorstr)):
                console.log("number is Ba_NaN")
                break;
             default: 
             console.log ("OK!");
}
