const domain = "https://www.moogleapi.com/"

const monsterUrl = `https://www.moogleapi.com/api/v1/monsters`
const heroURL = `https://www.moogleapi.com/api/v1/characters/search?name=Cloud%20Strife`

let section = document.querySelector('.monster-section')
let monsterName = document.querySelector('.monster-name')
let japaneseName = document.querySelector('.japanese-name')
let monsterImg = document.querySelector('.randomMonster')

let rMonster = []

// let monsterH = null

async function getRandomMonster() {

    try {
        let monsterData = await axios.get(monsterUrl)
        let randomNumber = Math.floor(Math.random() * monsterData.data.length) + 1
        let randomMonster = monsterData.data[randomNumber]
        console.log(randomMonster)
        renderMonster(randomMonster)
        if (randomMonster.hitPoints === 0){

            rMonster.push(4000)

        }else {
            rMonster.push(randomMonster.hitPoints)

        }
        
        // monsterH = randomMonster.hitPoints
        console.log(rMonster)
    } catch{
        console.log('error')
    }
}
getRandomMonster()

function higherDamage() {

    

    let randomNumber = Math.floor(Math.random() * 21)
    console.log(randomNumber + ' higher damage attack')
    if (randomNumber > 11) {
        let mHealth = rMonster -= randomNumber
        alert(`Cloud does ${randomNumber} damage! monster health is now ${mHealth}`)
    } else {
        alert('Cloud\'s attack misses!')
    }
}


function lowerDamage() {
    let randomNumber = Math.floor(Math.random() * 10)
    console.log(randomNumber + ' lower damage attack')
    if (randomNumber > 3) {
        let mHealth = rMonster -=randomNumber
        alert(`Cloud does ${randomNumber} damage!, monster health is now ${mHealth}`)
    } else {
        alert('Cloud\'s attack misses!')
    }
}



getHero()

function renderHero(hero) {
    let heroName = document.createElement('h1')
    let heroPic = document.createElement('img')
    heroName.innerHTML = hero.name
    heroPic.setAttribute("src", 'https://www.mariowiki.com/images/b/b3/Cloud_SSBU.png')
    heroPic.style.width = '225px'
    heroPic.style.height = '250px'


    let heroDiv = document.querySelector('.hero')

    heroDiv.append(heroName)
    heroDiv.append(heroPic)

}


let heroHealth = 2000



console.log(`Cloud\'s health = ${heroHealth}`)



let move1 = document.querySelector('.move1')
let move2 = document.querySelector('.move2')



move1.addEventListener('click', higherDamage)

move2.addEventListener('click', lowerDamage)



function renderMonster(monster) {
    let monsterName = document.createElement('h1')
    let monsterJName = document.createElement('h2')
    let monsterPic = document.createElement('img')

    monsterName.innerHTML = monster.name
    monsterJName.innerHTML = monster.japaneseName
    monsterPic.setAttribute("src", monster.picture)
    monsterPic.style.width = '225px'
    monsterPic.style.height = '250px'


    let monsterSect = document.querySelector('.monster-section')

    monsterSect.append(monsterName)
    monsterSect.append(monsterJName)
    monsterSect.append(monsterPic)


}


async function getHero() {
    try {
        let heroData = await axios.get(heroURL)
        console.log(heroData.data[0].name)
        renderHero(heroData.data[0])
    } catch{
        console.log('error')
    }
}