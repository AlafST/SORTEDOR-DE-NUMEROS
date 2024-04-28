function showNumberInputs(){
    document.getElementById('numberInputs').style.display = 'block';
}

function generateNumber() {

    const min = Math.ceil(document.querySelector("#numero-min").value); // valor do input "entre"
    const max = Math.floor(document.querySelector("#numero-max").value); // valor do input "e"

    //Verifica se min ou max são menores que zero
    if (min < 0 || max < 0) {
        document.querySelector('#resultdo-sorteio').textoContent = `Digite um número válido`;
        return;
    }

    //Verifica se min é igual a max
    if (min === max) {
        document.querySelector('#resultado-sorteio').textContent = `Digite um número válido`;
        return;
    }

    else {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        // Exibindo o resultado no <h3>
        document.querySelector('#resultado-sorteio').innerHTML = `Número sorteado:<b> ${result} </b>`;
       
    }
}
