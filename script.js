document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Проверка валидности email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
        alert('Некорректный адрес электронной почты');
        return;
    }
    
    // Проверка длины пароля
    if (password.length < 6) {
        alert('Пароль должен быть не менее 6 символов');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('Пароли не совпадают');
    } else {
        // Тут можно написать логику для отправки формы на почту или другой сервер
        alert('Форма отправлена на адрес ' + email);
        // Очистить поля формы
        document.getElementById('registrationForm').reset();
    }
});