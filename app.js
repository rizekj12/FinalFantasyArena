const domain = "https://www.moogleapi.com/"

const monsterUrl = `https://www.moogleapi.com/api/v1/monsters`
const heroURL = `https://www.moogleapi.com/api/v1/characters/search?name=Cloud%20Strife`

let section = document.querySelector('.monster-section')
let monsterName = document.querySelector('.monster-name')
let japaneseName = document.querySelector('.japanese-name')
let monsterImg = document.querySelector('.randomMonster')

// let monsterData = axios.get(url)

// console.log(monsterData)








// let button = document.querySelector('.monster-button')

// let input = document.querySelector('#monster-search')

// button.addEventListener('click', (e) => {
//     e.preventDefault()
//     let inputValue = input.value

   



async function getRandomMonster(){

    try{  

        let monsterData = await axios.get(monsterUrl)

        let randomNumber = Math.floor(Math.random() * monsterData.data.length) + 1
       

        console.log(monsterData.data[randomNumber])

        localStorage.setItem("monsterHealth",'')
         monsterHealth = (monsterData.data[randomNumber].hitPoints)
        localStorage.setItem('monsterHealth', monsterHealth)
        // monsterHealth.push(monsterHealth)


        renderMonster(monsterData.data[randomNumber])

        

        


    }catch{

        console.log('error')
        
    }


}

getRandomMonster()




function renderMonster(monster){
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

async function getHero(){

    try{

    let heroData = await axios.get(heroURL)

    console.log(heroData.data[0].name)

    renderHero(heroData.data[0])



    }catch{

        console.log('error')
    }



}

getHero()



function renderHero(hero){

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





let newMonsterHealth = localStorage.getItem('monsterHealth')

let heroHealth = 2000

// console.log(`monsters health = ${monsterHealth}`)

console.log(`Cloud\'s health = ${heroHealth}`)

if (newMonsterHealth <= 0 ){


    newMonsterHealth = 3000
}

console.log(`monsters health = ${newMonsterHealth}`)




function higherDamage (){

    let randomNumber = Math.floor(Math.random() * 21)

    console.log(randomNumber + ' higher damage attack')

    if(randomNumber > 11 ){

        newMonsterHealth -= randomNumber

        alert( `Cloud does ${randomNumber} damage! monster health is now ${monsterHealth}`)
    }else{

        alert('Cloud\'s attack misses!')
    }

}


function lowerDamage (){

    let randomNumber = Math.floor(Math.random() * 10)

    console.log(randomNumber + ' lower damage attack') 

    if(randomNumber > 3 ){

        newMonsterHealth -= randomNumber

        alert( `Cloud does ${randomNumber} damage! monsters health is now ${monsterHealth}`)


    }else{

        alert('Cloud\'s attack misses!')
    }

}


let move1 = document.querySelector('.move1')
let move2 = document.querySelector('.move2')



move1.addEventListener('click',higherDamage)

move2.addEventListener('click',lowerDamage )
