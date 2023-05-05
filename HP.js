//Search Button 
const charactersList = document.getElementById('cards');
const searchBar = document.getElementById('search-bar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const input = e.target.value.toLowerCase();

    const filteredCharacters = hpCharacters.slice(0, 25).filter((character) => {
        return (
            character.name.toLowerCase().includes(input)
        );
    });
    displayCharacters(filteredCharacters);
});

//Fetch Characters
const loadCharacters = async () => {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    hpCharacters = await res.json();
    displayCharacters(hpCharacters.slice(0, 25));

};

//Amend DOM

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li>
            <div class="character-card">
                <h2 class="character-name">${character.name}</h2>
                <p class="character-house">House: ${character.house}</p>
                <img class="character-images" src="${character.image}"></img>
                <div id="vote-btns">
                     <button class="like-btn"> Like </button>
                    <button class="dislike-btn"> Dislike </button>
                </div>
            </div>   
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();

//Like Button Event Listener

const likeButton = document.getElementsByClassName('like-btn')
console.log(likeButton)
for (button of likeButton) {
    button.addEventListener('click', event => {
        const favoriteCharacter = event.target.parentNode;
        console.log(favoriteCharacter)
    })
}


// Dislike Button Event Listener