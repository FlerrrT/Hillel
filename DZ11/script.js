// 11.1
document.addEventListener('DOMContentLoaded', function() {
    const tableContainer = document.getElementById('pifagor-table');

    let html = '<table border="1">';
    
    for (let i = 1; i <= 10; i++) {
        html += '<tr>';
        for (let j = 1; j <= 10; j++) {
            html += `<td>${i * j}</td>`;
        }
        html += '</tr>';
    }
    
    html += '</table>';

    tableContainer.innerHTML = html;
});
// 11.2
document.addEventListener("DOMContentLoaded", function(){
    const text = document.getElementById("Mytext");
    const button = document.getElementById("MyButton");
    let original = true;

    button.addEventListener("click", function(){
        if(original){
            text.style.color = "red";
        }
        else{
            text.style.color = 'black'
        }
        original = !original; 
    });
});

// 11.3
function rand(){
  return Math.floor (Math.random() * 3 + 1)
}
// ИЗВИНИТЕ, Я НЕ НАШЕЛ БОЛЬШЕ ГОДНЫХ МЕМОВ ДЛЯ ЭТОЙ СИТУАЦИИ.
const el = document.getElementById("Fun");
const i = rand();
console.log(i)
const path = `${i}.jpg`;
console.log(path);
el.src += path;