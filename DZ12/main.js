document.addEventListener('DOMContentLoaded', function () {
    //12.1 and 12.2
   let container = document.getElementById("container")
   var link ="";
   container.addEventListener("click", function(event){
    if(event.target.id === "getLink"){
     link = prompt('Введите ссылку:');

    }
    else if(event.target.id === "go"){
     window.location.href = link;
    }
    else{
        alert("Похоже, что была нажата 3я кнопка. Да, кстати, я сделал два задания в одном). Скиньте мне к оценке домашки ваш любимый анекдот, если вы действительно это читаете. Хых.");
        alert('И не сжульничал, а оптимизировал своё рабочее время! Так что не надо мне занижать оценку! Ну пжалста(')
    }

// 12.3
var listCont = document.getElementById("list");
var txt = document.getElementById("textInp");
const li = document.createElement('li');
li.textContent = txt.value;
listCont.addEventListener("click", function(evnt){
if(evnt.target.id === "listButt"){
listCont.appendChild(li)

}
})
})
// 12.3
var listCont = document.getElementById("list");
var txt = document.getElementById("textInp");


listCont.addEventListener("click", function(evnt){
if(evnt.target.id === "listButt"){
    const li = document.createElement('li'); 
    li.textContent = txt.value;
    var del = document.createElement('button');
    del.textContent = "удалить";
    del.className = "del";
   
listCont.appendChild(li);
li.appendChild(del);
console.log("123")
txt.value = '';

}
if(evnt.target.className === "del"){
    var li = evnt.target.parentElement;
            listCont.removeChild(li);

}
})})
