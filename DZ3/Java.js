// 3.1
var num = 123;
console.log(typeof num);

var str = "123";
console.log(typeof str);

var bnumHaritPisatChislo = BigInt (123);
console.log(typeof bnumHaritPisatChislo);

var bool = true;
console.log(typeof bool);

var nothing = null;// не тип данных,но исторически сложилось, что это объект, just practice 
console.log(nothing); 

var hehe;
console.log(typeof hehe);

let ID = Symbol("Idk how to use that");
console.log(typeof ID);

var beer = alert;
console.log(typeof beer);

var human = {
age: 23,
name: "MyLittleReptiloid",
}
console.log(typeof human);
 
var lol = "JS" * 5; // имеет тип данных Number, но просто прикольно, решил докинуть
console.log(lol);

// 3.2
console.log(1, 0, 3, 6, 9)

var agefor = Number(prompt("Ваш возраст?"));
var namefor = String(prompt("Ваше имя?"));
var sex = String(prompt("Ваш пол?"));
console.log(` Привет, тебе ${agefor}  лет, тебя зовут ${namefor} , и ты ${sex}?` )
alert(` Привет, тебе ${agefor}  лет, тебя зовут ${namefor} , и ты ${sex}?`)

