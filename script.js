// // to creat an element and add to the dom
// // creat an element
// var myfirstEl = document.createElement('li'); 
// // add info and classes to the element 
// myfirstEl.innerHtml = 'Charizard';
// myfirstEl.classList.add('pokemon');
// // grab element already in the dom that will house nwew el.
// var pokeList = document.getElementById('pokemon');
// // append new element to parent
// pokeList.appendChild(myFirstEl);
for (var i = 0; i < pokemonNames.length; i++) {
addPokemon(pokemonNames[i]);
}
function addPokemon(name) {
  // 1 - create element
  var pokeEl = document.createElement('div')
  // 2 cusomize the element
  pokeEl.innerText = name;
  pokeEl.classList.add('pokemon');
  // 3- get future parent
  var pokeList =document.getElementById('pokemon-list');
  // 4- append new element to parent
  pokeList.appendChild(pokeEl);
}

//console.log(pokemon[i]);
//function is an old peice of code that works.