const pokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

pokemon
    .then(res => res.json())
    .then(({results}) => {
        results.forEach(pokemon => renderPokeCard(pokemon));
    })


//Render PokeCards
function renderPokeCard({url}) {
    fetch(url)
        .then(res => res.json())
        .then(pokemon => {
            const pokeCards = document.querySelector('#cards')
            pokeCards.innerHTML = pokeCards.innerHTML + `
        <li>
            <div class="poke-card">
                <h4>${pokemon.name}</h4>
                <img src= ${pokemon.sprites.front_default}>
            </div>    
        </li>`
            })

}


//Render Top 3 list


//Render Bottom 3 list


