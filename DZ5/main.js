// 5.1
for (let i = 20; i <= 30; i += 0.5 ){
    console.log(i)
}
// 5.2
let exchange = 26; 

for( let dollars = 10; dollars <= 100; dollars += 10){
    let result = dollars * exchange;
    console.log (`${dollars} будут стоить ${result} гривен`)
}

// 5.3
let num = prompt("Введите целое число");
for (let i=1; i <= 100; i++){
    if (i * i <= num){
        console.log(i);
    }
}

// 5.4
let num2 = prompt("Введите число, которое хотите проверить на то простое оно или нет.");
 if(num2 <= 1){
    alert("Введите число больше 1.")
  

 }
  else {
  var prime = true;
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
        prime = false;
        break;
  }

  }
}  if (prime) {
    console.log(`${num2} является простым числом`);
} else {
    console.log(`${num2} не является простым числом`);
}
