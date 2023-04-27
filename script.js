const pokemon = fetch('https://pokeapi.co/api/v2/pokemon?limit=151')

// Creat PokeArray

const pokeArray = []

//fetch request
fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => res.json())
        .then(({ results }) => {
            results.forEach(value => pokeArray.push(value))
        })

console.log(pokeArray)

//Render PokeCards
function renderPokeCard() {
    //Build pokecards
    pokeArray.forEach(pokemon => {
            const pokeCards = document.querySelector('#cards')
            pokeCards.innerHTML = pokeCards.innerHTML + `
        <li>
            <div class="poke-card">
                <h4>${pokemon.name}</h4>
                <img src= ${pokemon.sprites.front_default}>
                <div id="vote-btns">
                    <button class="like-btn"> Like </button>
                    <button class="dislike-btn"> Dislike </button>
                </div>   
            </div>    
        </li>`
        })
}





//render pokemon 

function render() {
    pokeArray.forEach(pokemon => renderPokeCard(pokemon))
}

//Initial Render

function initialize() {
    render()
}

initialize()


// // Search Bar    
const searchBar = document.querySelector("#search-bar");
searchBar.addEventListener('keyup', (e) => {
    const input = e.target.value
    getAllPokemon()
        .then(results => {
            const filteredPokemon = results.filter(p => p.name.includes(input))
            filteredPokemon.forEach(pokemon => renderPokeCard(pokemon))
            console.log(filteredPokemon)
        })


})



// Create array to store likes

const likes = []

// // //Create like and dislike buttons

// document.querySelectorAll('.like-btn, .dislike-btn').forEach(button => {
//     button.addEventListener('click', function (event) {
//         const pokemonName = event.target.parentElement.parentElement.querySelector('#cards')
//         if (event.target.classList.contains('like-btn')) {
//             // Increment the like count for the Pokemon
//             if (likes[pokemonName]) {
//               likes[pokemonName]++;
//             } else {
//               likes[pokemonName] = 1;
//             }
//           } else {
//             // Decrement the like count for the Pokemon
//             if (likes[pokemonName]) {
//               likes[pokemonName]--;
//             } else {
//               likes[pokemonName] = -1;
//             }
//           }
//           // Re-render the top and bottom 3 lists
//           renderTop3();
//           renderBottom3();
//         });
//       });

// //ATTEMPT 1 at making likes button 
// const favourites = []

// const likeButton = document.querySelectorAll('.like-btn')

// likeButton.forEach(button => {
//     button.addEventListener('click', event => {
//     const favoriteCard = event.target.parentNode.parentNode;
//     const favoriteCardIndex = favourites.findIndex((e) => e.favoriteCard === favoriteCard)

//     if(favoriteCardIndex !== -1){
//         favourites[favoriteCardIndex].count += 1;
//     } else {
//         favourites.push({ favoriteCard, count: 1})
//     }

//     })
// })

// console.log(favourites)

// //Render Top 3 list
// function renderTopThree() {
//     const topThree = document.querySelector("#top-three-list")
//     topThree.innerHTML = topThree.innerHTML + `
// <li>
//     <div class="poke-card">
//         <h4>${pokemon.name}</h4>
//         <img src= ${pokemon.sprites.front_shiny}>
//             <p></p>
//         </div>   
//     </div>    
// </li>`
// }

// // Render Bottom 3 list