
document.addEventListener('DOMContentLoaded', function () {
    let ul = document.getElementById("ul");

    if (localStorage.getItem('todoList')) {
        let todoList = JSON.parse(localStorage.getItem('todoList'));
        todoList.forEach(item => {
            let li = document.createElement('li');
            li.className = "todo-item";

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = item.checked; 
            let span = document.createElement("span");
            span.textContent = item.text;
            span.className = "todo-item__description";

            let button = document.createElement("button");
            button.textContent = "Удалить";
            button.className = "todo-item__delete";

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(button);
            ul.appendChild(li);
        });
    }

    let form = document.getElementById("form");
    let textInp = document.getElementById("textInp");
    let container = document.getElementById("container");

    container.addEventListener("click", function(event){
        if(event.target.id === "button"){
            event.preventDefault(); 

            let li = document.createElement('li');
            li.className = "todo-item";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";

            let span = document.createElement("span");
            span.textContent = textInp.value;
            span.className = "todo-item__description";

            let button = document.createElement("button");
            button.textContent = "Удалить";
            button.className = "todo-item__delete";

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(button);
            ul.appendChild(li);

            textInp.value = ''; 

            saveListToLocalStorage(); 
        }

        if (event.target.className === "todo-item__delete") {
            let li = event.target.parentElement;
            ul.removeChild(li); 
            saveListToLocalStorage(); 
        }
    });

    function saveListToLocalStorage() {
        let items = [];
        ul.querySelectorAll('li').forEach(li => {
            let checkbox = li.querySelector('input[type="checkbox"]');
            let text = li.querySelector('span').textContent;
            items.push({
                text: text,
                checked: checkbox.checked
            });
        });
        localStorage.setItem('todoList', JSON.stringify(items));
    }

    ul.addEventListener('change', function(event) {
        if (event.target.type === 'checkbox') {
            saveListToLocalStorage();
        }
    });
});