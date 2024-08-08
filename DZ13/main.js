document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(form);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        const phone = formData.get('phone');
        console.log(name, email, message, phone);
        console.log("Короче, я не знаю почему, но он ругается на паттерн мыла");
        console.log("Я уже и чатгпт утомил, а он все равно ругается, боже. Ну вот никак ему не угодишь.");
})})