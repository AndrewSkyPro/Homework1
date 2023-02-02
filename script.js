
function playSeason() {

    const monthUser = Number(prompt('Введите номер месяца'));
    
    if (monthUser === 12 || monthUser === 1 || monthUser === 2) {
        alert('Зима');
    } else if (monthUser === 3 || monthUser === 4 || monthUser === 5) {
        alert('Весна');
    } else if (monthUser === 6 || monthUser === 7 || monthUser === 8) {
        alert('Лето');
    } else if (monthUser === 9 || monthUser === 10 || monthUser === 11) {
        alert('Осень');
    } else {
        alert('Вы ввели не правильное значение');
    }
}
 