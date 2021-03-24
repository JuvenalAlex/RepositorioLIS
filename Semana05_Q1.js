let numeroLista = window.prompt("O numero de listas: ")
let texto = window.prompt("Nome: ")


let quantidade = 0; 
function myFunction() {
    quantidade++ 
  
  
    let LInova = document.createElement("LI"); 
    let listas = document.createTextNode(`${texto} ${quantidade}`);
    LInova.appendChild(listas);
    document.getElementById("myList").appendChild(LInova);
};


for (let i = 0; i < numeroLista; i++){
    myFunction();
};
