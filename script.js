const pokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

pokemon
.then(res => res.json())
.then(pokeArray => console.log(pokeArray))