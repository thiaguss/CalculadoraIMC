
const calcular = document.getElementById('calcular');

function imc () {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
        const valorImc = (peso / (altura * altura)).toFixed(2);
        resultado.textContent = (valorImc);
     
        let classificação = '';
        if (valorImc < 18.5) {
            classificação = ('Abaixo do peso')
        } else if (valorImc < 25) {
            classificação = ('Com o peso normal')
        } else if (valorImc < 30) {
            classificação = ('Acima do peso')
        } else if (valorImc < 40) {
            classificação = ('Obeso')
        } else {
            classificação = ('Com Obesidade grave')
        }
       resultado.textContent = (`${nome} seu IMC é ${valorImc} e você está ${classificação}.`)

    } else {
        resultado.textContent = ('Preencha todos os campos!!!')
    }

}


calcular.addEventListener('click', imc);

