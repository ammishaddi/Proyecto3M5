document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('characterContainer');

    fetch('https://hp-api.onrender.com/api/characters?limit=20')
    .then(response => response.json())
    .then(data => {
        
        const personajes = data.slice(0, 20);

        console.log(personajes);
        personajes.forEach(personaje => {

            const card = document.createElement('section');
            card.classList.add('card')

            const image = document.createElement('img')
            image.src = personaje.image

            const name = document.createElement('h2')
            name.textContent = personaje.name

            card.appendChild(image)
            card.appendChild(name)

            container.appendChild(card)
        })
    })

    .catch(error => {
        console.error('Error fetching data', error)
        container.innerHTML = '<p>avada kedavra <br> El personaje no ha podido ser cargado</p>'
    })

})