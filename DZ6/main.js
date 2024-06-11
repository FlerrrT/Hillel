/* 6.1
var str = prompt("words plz");
var chartoremove = prompt ("symbols to remove, pleazzzzeee");

function remove(str, chartoremove){
    let result = '';
     for(i = 0; i < str.length; i++){
        if(chartoremove.includes(str[i]) === false){
            result += str[i];

        }
     }
     return result;
}


result = remove(str, chartoremove);
alert(result);
*/

/* 6.2 ДА ГОСПОДИ БОЖЕ ПОЧЕМУ ПРИМЕРЫ В ЛЕКЦИИ ТАКИЕ ЛЕГКИЕ, А ТУТ ПОЛНЫЙ ******
var arr = [4, 'hello', 2, 'world', 1, "Aqua", Boolean, "ya slomal sebe mozg etim uzhasom, ne nado tak jectko"]
function isNumber(value){
    let numbersArray = arr.filter(value => typeof value === 'number');
    let sum = numbersArray.reduce((acc, numbersArray) => acc + numbersArray);
    let average = sum / numbersArray.length;
    console.log(average);
} 
isNumber(arr)
МАМА РОДИ МЕНЯ ОБРАТНО*/

// 6.3
var arr1 = [254, "addblock", "os`minog iz Tundri", 24, 1, 2, 3];
function removeElement(arr, item){
    let newarr = arr.filter(value => item !== value )
    console.log(newarr) 
  
}
removeElement(arr1, 254)
// С божьей помощью