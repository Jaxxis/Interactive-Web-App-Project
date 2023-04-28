fetch('https://hp-api.onrender.com/api/characters')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
