document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('characterContainer');

    fetch('https://hp-api.onrender.com/api/characters?limit=20')
    .then(response => response.json())
    .then(data => {
        
        const personajes = data.slice(0, 21);

        console.log(personajes);
        personajes.forEach(personaje => {

            const card = document.createElement('section');
            card.classList.add('card')

            const image = document.createElement('img')
            image.src = personaje.image

            const name = document.createElement('h2')
            name.textContent = personaje.name

            const house = document.createElement('p')
            house.textContent = personaje.house

            const species = document.createElement('p')
            species.textContent = personaje.species

            card.appendChild(image)
            card.appendChild(name)
            card.appendChild(house)
            card.appendChild(species)

            container.appendChild(card)
        })
    })

    .catch(error => {
        console.error('Error fetching data', error)
        container.innerHTML = '<p>avada kedavra <br> El personaje no ha podido ser cargado</p>'
    })

})