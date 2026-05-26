function handleClick(buttonText) {
    if (typeof tg !== 'undefined' && tg !== null) {
        // Если приложение запущено внутри Telegram Web App
        tg.sendData(`Кнопка нажата: ${buttonText}`);
    } else {
        // Для локального тестирования
        alert(`Вы нажали: ${buttonText}`);
    }
}
