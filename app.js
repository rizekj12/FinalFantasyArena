const domain = "https://www.moogleapi.com/"
const monsterUrl = `https://www.moogleapi.com/api/v1/monsters`
const heroURL = `https://www.moogleapi.com/api/v1/characters/search?name=Cloud%20Strife`

let section = document.querySelector('#monsterDiv')
let monsterName = document.querySelector('.monster-name')
let japaneseName = document.querySelector('.japanese-name')
let monsterImg = document.querySelector('.randomMonster')

let rMonsterHealth = 0
let heroHealth = 5000
let hero_hitpoints = document.querySelector('.hero-health')
let monster_hitpoints = document.querySelector('.monster-health')

async function getRandomMonster() {
    try {
        let monsterData = await axios.get(monsterUrl)
        let randomNumber = Math.floor(Math.random() * monsterData.data.length) + 1
        let randomMonster = monsterData.data[randomNumber]
        console.log(randomMonster)

        if (randomMonster.hitPoints === 0) {
            rMonsterHealth = 4000
        } else {
            rMonsterHealth = randomMonster.hitPoints
        }
        renderMonster(randomMonster)
    } catch{
        console.log('error')
    }
}

getRandomMonster()

function higherDamage() {
    let randomNumber = Math.floor(Math.random() * 21)
    let monsterRoll = Math.floor(Math.random() * 21)

    if (randomNumber >= 17) {
        rMonsterHealth -= 800
        alert(`CRITICAL HIT!! Cloud does 800 damage!`)
    } else if (17 > randomNumber >= 10) {
        rMonsterHealth -= 400
        alert(`Cloud does 400 damage!`)
    } else if (10 > randomNumber >= 8) {
        rMonsterHealth -= 300
        alert('Cloud does 300 damage!')
    } else if (randomNumber < 8) {
        alert('Cloud\'s attack misses!')
    } else {
        rMonsterHealth -= 100
        alert('Cloud does 100 damage')
    }

    if (monsterRoll >= 17) {
        heroHealth -= 400
        alert(`critical hit! monster does 400 damage!`)
    } else if (12 <= monsterRoll < 17) {
        heroHealth -= 225
        alert(`monster does 225 damage`)
    } else if (12 > monsterRoll >= 8) {
        heroHealth -= 100
        alert(`monster does 275 damage`)
    }
    else {
        alert('monster missed')
    }

    hero_hitpoints.innerHTML = (`HP: ${heroHealth}`)
    monster_hitpoints.innerHTML = (`HP: ${rMonsterHealth}`)

    if (heroHealth === 0) {

        alert('you have lost, Game Over! :(')
    } else if (rMonsterHealth === 0) {

        alert('Cloud wins the battle!!')
    }
}

function lowerDamage() {
    let randomNumber = Math.floor(Math.random() * 21)
    let monsterRoll = Math.floor(Math.random() * 21)

    if (randomNumber >= 15) {
        rMonsterHealth -= 350
        alert(`Cloud does 350 damage!`)
    } else if (15 > randomNumber >= 9) {
        rMonsterHealth -= 250
        alert(`Cloud does 250 damage!`)
    } else if (9 > randomNumber >= 3) {
        rMonsterHealth -= 225
        alert('Cloud does 225 damage!')
    } else if (3 > randomNumber) {
        alert('Cloud\'s attack misses!')
    } else {
        rMonsterHealth -= 175
        alert('Cloud does 175 damage')
    }

    if (monsterRoll >= 17) {
        heroHealth -= 350
        alert(`critical hit! monster does 350 damage!`)
    } else if (12 <= monsterRoll < 17) {
        heroHealth -= 200
        alert(`monster does 200 damage`)
    } else if (17 >= monsterRoll > 7) {
        heroHealth -= 100
        alert(`monster does 275 damage,`)
    } else if (monsterRoll < 7) (
        alert('monster missed')
    )
    else {
        alert('monster missed')
    }

    hero_hitpoints.innerHTML = (`Health: ${heroHealth}`)
    monster_hitpoints.innerHTML = (`Health: ${rMonsterHealth}`)

    if (heroHealth <= 0) {
        alert('you have lost, Game Over! :(')
    } else if (rMonsterHealth <= 0) {
        alert('Cloud wins the battle!!')
    }
}

getHero()

function renderHero(hero) {
    let heroName = document.createElement('h1')
    let heroPic = document.querySelector('img')

    hero_hitpoints.innerHTML = (`HP: ${heroHealth}`)
    heroName.innerHTML = hero.name
    heroPic.setAttribute("src", 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a67ac30c-fe21-4e97-8dad-ffa8b2670167/dbpjw5t-23ed5ea9-1d62-4990-8983-75f245a5632b.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYTY3YWMzMGMtZmUyMS00ZTk3LThkYWQtZmZhOGIyNjcwMTY3XC9kYnBqdzV0LTIzZWQ1ZWE5LTFkNjItNDk5MC04OTgzLTc1ZjI0NWE1NjMyYi5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.1DTa1_fvKZIw6jzmAI4X__cpXJg42AViBsZsXWl4t1w')
    heroPic.style.width = '225px'
    heroPic.style.height = '225px'
    
    let heroDiv = document.querySelector('.hero')
    
    heroDiv.append(heroName)
    heroDiv.append(heroPic)
    heroDiv.append(hero_hitpoints)
}

console.log(`Cloud\'s health = ${heroHealth}`)

let move1 = document.querySelector('.move1')
let move2 = document.querySelector('.move2')

move1.addEventListener('click', higherDamage)
move2.addEventListener('click', lowerDamage)

function renderMonster(monster) {
    let monsterName = document.createElement('h1')
    let monsterJName = document.createElement('h2')
    let monsterPic = document.createElement('img')

    monster_hitpoints.innerHTML = (`HP: ${rMonsterHealth}`)
    monsterName.innerHTML = monster.name
    monsterJName.innerHTML = monster.japaneseName

    if (monster.name === 'Chocobo') {
        monsterPic.setAttribute("src", "redchocobo.gif")
        monsterPic.style.width = '250px'
        monsterPic.style.height = '275px'
    } else if (monster.name === 'Behemoth') {
        monsterPic.setAttribute("src", 'behemoth.gif')
        monsterPic.style.width = '500px'
        monsterPic.style.height = '400px'
        monsterPic.style.objectPosition = '-10px 60px'
        monsterPic.style.right = '50px'
        monsterPic.style.bottom = '25px'
    } else if (monster.name === 'Antlion') {
        monsterPic.setAttribute("src", 'antlion.gif')
        monsterPic.style.width = '375px'
        monsterPic.style.height = '425px'
        monsterPic.style.bottom = '10px'
        monsterPic.style.objectPosition = '-10px 125px'
    } else {
        monsterPic.setAttribute("src", 'greyChocobo.gif')
        monsterPic.style.width = '250px'
        monsterPic.style.height = '275px'
    }
let monsterSect = document.querySelector('#monsterDiv')

    monsterSect.append(monsterName)
    monsterSect.append(monsterJName)
    monsterSect.append(monsterPic)
    monsterSect.append(monster_hitpoints)
}

async function getHero() {
    try {
        let heroData = await axios.get(heroURL)
        renderHero(heroData.data[0])
    } catch{
        console.log('error')
    }
}

