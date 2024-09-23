$(document).ready(function () {
  let $ul = $("#ul");
  if (localStorage.getItem('todoList')) {
    let todoList = JSON.parse(localStorage.getItem('todoList'));
    todoList.forEach(item => {
      addTask(item.text, item.checked);
    });
  }
  $("#button").on('click', function (event) {
    event.preventDefault();
    let taskText = $("#textInp").val();
    if (taskText.trim() !== "") {
      addTask(taskText, false);
      $("#textInp").val('');
      saveListToLocalStorage();
    }
  });
  $ul.on('click', function (event) {
    let $target = $(event.target);
    if ($target.hasClass("todo-item__delete")) {
      $target.closest('li').remove();
      saveListToLocalStorage();
    }
    if ($target.hasClass("todo-item__description")) {
      let taskText = $target.text();
      $("#taskText").text(taskText);
      $('#taskModal').modal('show');
    }
  });
  function addTask(text, checked) {
    let $li = $("<li>").addClass("list-group-item todo-item d-flex justify-content-between align-items-center");
    let $checkbox = $("<input>").attr("type", "checkbox").addClass("me-2").prop('checked', checked);
    let $span = $("<span>").addClass("todo-item__description").text(text);
    let $button = $("<button>").addClass("btn btn-danger btn-sm todo-item__delete").text("Удалить");
    $li.append($checkbox, $span, $button);
    $ul.append($li);
  }
  function saveListToLocalStorage() {
    let items = [];
    $ul.find('li').each(function () {
      let $checkbox = $(this).find('input[type="checkbox"]');
      let text = $(this).find('span').text();
      items.push({
        text: text,
        checked: $checkbox.prop('checked')
      });
    });
    localStorage.setItem('todoList', JSON.stringify(items));
  }
  $ul.on('change', 'input[type="checkbox"]', function () {
    saveListToLocalStorage();
  });
});