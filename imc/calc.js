const calcular = document.getElementById('calculandoIMC');

function calculandoIMC() {
    const altura = document.getElementById('altura').value; 
    const peso = document.getElementById('peso').value;    
    const resultado = document.getElementById('saida'); 

    if (altura == '' || peso == '') { 
        resultado.textContent = 'Preencha todos os campos';
        document.querySelector('#saida').style.background = 'red';
        document.querySelector('#saida').style.color = 'white';
    }

    else if (altura !== '' && peso !== '') {

        let valorIMC = (peso / (altura ** 2)).toFixed(1);
        let Sexo = document.getElementsByName('Sexo');

        if (Sexo[0].checked) { // Male
            if (valorIMC < 19) {
                resultado.textContent = 'Abaixo do Peso'; 
                document.querySelector('#saida').style.background = "blue"; 
                document.querySelector('#saida').style.color = "black"; 
            }
            else if (valorIMC < 25.7) {
                resultado.textContent = 'Peso Normal';
                document.querySelector('#saida').style.background = "green"; 
            }
            else if (valorIMC < 27.3) {
                resultado.textContent = 'Sobrepeso'; 
                document.querySelector('#saida').style.background = "yellow"; 
            }
            else if (valorIMC < 32.3) {
                resultado.textContent = 'Obesidade grau 1'; 
                document.querySelector('#saida').style.background = "red"; 
            }
            else {
                resultado.textContent = 'Obesidade grau 2';
                document.querySelector('#saida').style.background = "orange"; 
            }
        }


        else { // Female
            if (valorIMC < 19) {
                resultado.textContent = 'Abaixo do Peso'; 
                document.querySelector('#saida').style.background = "blue"; 
                document.querySelector('#saida').style.color = "black"; 
            }
            else if (valorIMC < 25.8) {
                resultado.textContent = 'Peso Normal'; 
                document.querySelector('#saida').style.background = "green"; 
            }
            else if (valorIMC < 27.3) {
                resultado.textContent = 'Sobrepeso'; 
                document.querySelector('#saida').style.background = "yellow"; 
            }
            else if (valorIMC < 32.3) {
                resultado.textContent = 'Obesidade grau 1'; 
                document.querySelector('#saida').style.background = "orange"; 
            }
            else {
                resultado.textContent = 'Obesidade grau 2'; 
                document.querySelector('#saida').style.background = "red"; 
            }
        }

    }
}