
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


const words = () => {
    let words = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    words = words.sort(() => Math.random() - 0.5);

    words.forEach(words => alert(words));
    const firstWord = prompt("Какое было первое слово?");
    const lastWord = prompt("Какое было последнее слово?");
  
    if (firstWord.toLowerCase() === words[0].toLowerCase() && lastWord.toLowerCase() === words[6].toLowerCase()) {
        alert("Поздравляю, вы угадали оба слова!");
        return;
    } else if (firstWord.toLowerCase() === words[0].toLowerCase() || lastWord.toLowerCase() === words[6].toLowerCase()) {
        alert("Вы были близки к победе!");
        return;
    } else {
        alert("Вы ответили неверно.");
    }
  }
