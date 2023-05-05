const charactersList = document.getElementById('cards');
const searchBar = document.getElementById('search-bar');
let hpCharacters = [];

searchBar.addEventListener('keyup', (e) => {
    const input = e.target.value.toLowerCase();
    
    const filteredCharacters = hpCharacters.slice(0, 24).filter((character) => {
        return (
            character.name.toLowerCase().includes(input)
        );
    });
    displayCharacters(filteredCharacters);
});

const loadCharacters = async () => {
        const res = await fetch('https://hp-api.onrender.com/api/characters');
        hpCharacters = await res.json();
        console.log(hpCharacters)
        displayCharacters(hpCharacters.slice(0, 24));
  
};

const displayCharacters = (characters) => {
    const htmlString = characters
        .map((character) => {
            return `
            <li class="character">
                <h2>${character.name}</h2>
                <p>House: ${character.house}</p>
                <img src="${character.image}"></img>
            </li>
        `;
        })
        .join('');
    charactersList.innerHTML = htmlString;
};

loadCharacters();
