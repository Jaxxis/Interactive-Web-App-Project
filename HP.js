// Creat PokeArray

const characterArray = []


//Async fetch request
async function getCharacters() {
    await fetch('https://hp-api.onrender.com/api/characters')
    .then (res => res.json())
    .then (data =>
    data.forEach(value => characterArray.push(value))
)}

// Call fetch Function

console.log(characterArray)



//Render HP Characters

function renderCharacter(characters) {
            const character = document.querySelector('#cards')
            character.innerHTML = character.innerHTML + `
        <li>
            <div class="character-card">
                <img class="character-images" src=${characters.image} >
                <h4 class="character-names">${characters.name}</h4>
                <h4 class="character-houses">${characters.house}</h4>
                <div id="vote-btns">
                    <button class="like-btn"> Like </button>
                    <button class="dislike-btn"> Dislike </button>
                </div>   
            </div>    
        </li>`
        }




async function render() {
    await getCharacters()
    characterArray.forEach(characters => renderCharacter(characters))
}

render()







// Search Bar    
const searchBar = document.querySelector("#search-bar");
searchBar.addEventListener('keyup', (e) => {
    const input = e.target.value
    const filteredCharaters = characterArray.filter(character =>{
       return character.name.includes(input)
    })
    console.log(filteredCharaters)
    renderCharacter(filteredCharaters)
})



// // Create array to store likes

// const likes = []

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