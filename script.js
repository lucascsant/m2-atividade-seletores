/*
  1. Selecione o elemento de id "ingredients" e o atribua a uma constante.  
  Mostre somente o elemento selecionado no console.
*/

const ex1 = document.getElementById("ingredients");
console.log(ex1);

/*
  2. Selecione o elemento <h1> e o atribua a uma constante.
   Mostre somente o elemento selecionado no console.
*/

const titulos = document.getElementsByTagName("h1");
console.log(titulos); 


/*
  3. Selecione o elemento com classe "recipe" e o atribua a uma constante.
   Mostre somente elemento selecionado no console.
*/

const receita = document.getElementsByClassName("recipe");
console.log(receita);

/*
  Desafio 1: Selecione todos os elementos <h2> da página e altere a cor do texto de
   todos para azul.
*/

// const titulosMenores = document.getElementsByTagName("h2");
const titulosMenores = document.querySelectorAll("h2");

for(i = 0; i < titulosMenores.length; i++){
  titulosMenores[i].style.color = "blue";
}

/* 
  Desafio 2: Selecione todos os elementos <input> da página, e altere a cor da borda de
   todos para vermelho.
*/

const camposInput = document.querySelectorAll("input");

for(j = 0; j < camposInput.length; j++){
  camposInput[j].style.borderColor = "red";
}