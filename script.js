function play(playerChoice) {
    const choices = ['piedra', 'papel', 'tijera'];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = 'Empate!';
    } else if (
        (playerChoice === 'piedra' && computerChoice === 'tijera') ||
        (playerChoice === 'papel' && computerChoice === 'piedra') ||
        (playerChoice === 'tijera' && computerChoice === 'papel')
    ) {
        result = '¡Ganaste!';
    } else {
        result = 'Perdiste!';
    }

    const timestamp = new Date().toLocaleString();
    const historyItem = `${timestamp}: Jugador - ${playerChoice}, Computadora - ${computerChoice}, Resultado - ${result}`;
    addToHistory(historyItem);
    document.getElementById('result').innerText = result;
}

function addToHistory(item) {
    const historyList = document.getElementById('history');
    const li = document.createElement('li');
    li.innerText = item;
    historyList.appendChild(li);
}
