const domain = "https://www.moogleapi.com/"

const monsterUrl = `https://www.moogleapi.com/api/v1/monsters`
const heroURL = `https://www.moogleapi.com/api/v1/characters/search?name=Cloud%20Strife`

let section = document.querySelector('#monsterDiv')
let monsterName = document.querySelector('.monster-name')
let japaneseName = document.querySelector('.japanese-name')
let monsterImg = document.querySelector('.randomMonster')

let rMonsterHealth = 0
let heroHealth = 2800
let hero_hitpoints = document.querySelector('.hero-health')
let monster_hitpoints = document.querySelector('.monster-health')

async function getRandomMonster() {

    try {
            let monsterData = await axios.get(monsterUrl)
            let randomNumber = Math.floor(Math.random() * monsterData.data.length) + 1
            let randomMonster = monsterData.data[randomNumber]
            console.log(randomMonster)
            
            if (randomMonster.hitPoints === 0){

            rMonsterHealth = 4000

        }else{
    
            rMonsterHealth = randomMonster.hitPoints
        }
        renderMonster(randomMonster)
            }catch{
            console.log('error')
        }
}
getRandomMonster()

function higherDamage() {

    let randomNumber = Math.floor(Math.random() * 21)
    console.log(randomNumber + ' higher damage attack')
    if (randomNumber > 11) {
        rMonsterHealth -= randomNumber
        alert(`Cloud does ${randomNumber} damage! monster health is now ${rMonsterHealth}`)
    }else {
        alert('Cloud\'s attack misses!')
    }
    hero_hitpoints.innerHTML = (`HP: ${heroHealth}`)
    monster_hitpoints.innerHTML = (`HP: ${rMonsterHealth}`)
}


function lowerDamage() {
    let randomNumber = Math.floor(Math.random() * 10)
    let monsterRoll = Math.floor(Math.random() * 21)

    console.log(randomNumber + ' lower damage attack')
    if (randomNumber > 3) {
        rMonsterHealth -= randomNumber
        alert(`Cloud does ${randomNumber} damage!, monster health is now ${rMonsterHealth}`)
    } else {
        alert('Cloud\'s attack misses!')
    }

if(monsterRoll > 17 ){
    heroHealth -= 400
    alert(`critical hit! monster does 400 damage! Cloud's health is now ${heroHealth}`)

}else if(12 < monsterRoll < 16){

    heroHealth -= 275

    alert(`monster does 275 damage, Cloud's health is now ${heroHealth}`)

}else if(11 > monsterRoll > 7){

    heroHealth -= 100

    alert(`monster does 275 damage, Cloud's health is now ${heroHealth}`)
}
else{
    
    alert('monster missed')
}
hero_hitpoints.innerHTML = (`HP: ${heroHealth}`)
monster_hitpoints.innerHTML = (`HP: ${rMonsterHealth}`)
}





getHero()

// 'https://www.mariowiki.com/images/b/b3/Cloud_SSBU.png'

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
    
    if( monster.name === 'Chocobo'){
    
    monsterPic.setAttribute("src", "redchocobo.gif")
    monsterPic.style.width = '250px'
    monsterPic.style.height = '275px'
    
    

    } else if(monster.name === 'Behemoth'){

        monsterPic.setAttribute("src",'behemoth.gif')
        monsterPic.style.width = '500px'
        monsterPic.style.height = '400px' 
        monsterPic.style.objectPosition = '0px 30px'
        monsterPic.style.right = '50px'
        monsterPic.style.bottom = '25px'

    }else if( monster.name === 'Antlion'){

        monsterPic.setAttribute("src",'antlion.gif')
        monsterPic.style.width = '275px'
        monsterPic.style.height = '300px' 
        monsterPic.style.bottom = '10px'
        monsterPic.style.objectPosition = '0px -75px'
      
    
    }else{

        monsterPic.setAttribute("src",'greyChocobo.gif')
        monsterPic.style.width = '250px'
        monsterPic.style.height = '275px'  
    

    }

    


    let monsterSect = document.querySelector('#monsterDiv')

    monsterSect.append(monsterName)
    monsterSect.append(monsterJName)
    monsterSect.append(monsterPic)
    monsterSect.append(monster_hitpoints)


}


async function getHero(){
    try {
        let heroData = await axios.get(heroURL)
        console.log(heroData.data[0].name)
        renderHero(heroData.data[0])
    }catch{
        console.log('error')
    }
}

