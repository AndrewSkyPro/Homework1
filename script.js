
function playSeason() {

    const monthUser = prompt('Введите номер месяца');
    
    if (monthUser == 12 || monthUser <= 2) {
        alert('Зима');
    } else if (monthUser == 3 || monthUser <= 5) {
        alert('Весна');
    } else if (monthUser == 6 || monthUser <= 8) {
        alert('Лето');
    } else if (monthUser == 9 || monthUser <= 11) {
        alert('Осень');
    } else {
        alert('Вы ввели не правильное значение');
    }
} 

console.log(playSeason());