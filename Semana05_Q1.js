let numeroLista = window.prompt("O numero de listas: ")
let texto = window.prompt("Nome: ")


let quantidade = 0; 
function myFunction() {
    quantidade++ 
  
  
    let LI = document.createElement("LI"); 
    let listas = document.createTextNode(`${texto} ${quantidade}`);
    LI.appendChild(listas);
    document.getElementById("myList").appendChild(LI);
};


for (let i = 0; i < numeroLista; i++){
    myFunction();
};
