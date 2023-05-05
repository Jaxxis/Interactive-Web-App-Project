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

//Like Button Event Listener

const likeButton = document.querySelectorAll('.like-btn')
likeButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const likeCard = event.target.parentElement.parentElement;
        console.log(likeCard)
        likeCard.setAttribute("id", "favourite")
    })
})

//Dislike Button Event Listener

const dislikeButton = document.querySelectorAll('.dislike-btn')
dislikeButton.forEach((button) => {
    button.addEventListener('click', (event) => {
        const hateCard = event.target.parentElement.parentElement;
        console.log(hateCard)
        hateCard.setAttribute("id", "hated")
    })
})
};

loadCharacters();


