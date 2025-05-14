import axios from 'https://cdn.skypack.dev/axios';

const container = document.getElementById('characterContainer');

axios.get('https://dattebayo-api.onrender.com/characters')
  .then(response => {

    const personajes = response.data.characters.slice(0, 18); 

    personajes.forEach(personaje => {
      const card = document.createElement('section');
      card.classList.add('card');

      const image = document.createElement('img');
      image.src = personaje.images[0]; 
      image.alt = personaje.name;

      const name = document.createElement('h2');
      name.textContent = personaje.name;
    
        const genero = document.createElement('p');
      genero.textContent = personaje.personal.sex;

      const cumple = document.createElement('p');
      cumple.textContent = `Birthday: ${personaje.personal.birthdate}`;

      card.appendChild(image);
      card.appendChild(name);
       card.appendChild(genero);
      card.appendChild(cumple);
      

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error al cargar personajes:', error);
    container.innerHTML = '<p>Fallo al cargar personajes</p>';
  });
