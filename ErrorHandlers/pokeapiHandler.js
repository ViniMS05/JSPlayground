const pokeId = document.getElementById('pokeId')
const pokeName = document.getElementById('pokeName')
const pokeSprite = document.getElementById('pokeSprite')

const pokeValue = document.getElementById('pokeInput')

async function getPokemonInfo(pokemon) {
    try {
        const { id, sprites, name } = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(data => data.json())

        const sprite = sprites.versions['generation-v']['black-white'].animated.front_default

        pokeId.textContent = id.toString()
        pokeName.textContent = name
        pokeSprite.style.display = 'block'
        pokeSprite.src = sprite
    } catch (err) {
        console.log('oi')
        throw new Error(err)
    }
}

function onSubmit(e) {
    e.preventDefault()

    getPokemonInfo(pokeValue.value.toLowerCase())
    console.log('estou aqui')
}

