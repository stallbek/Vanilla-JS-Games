const choose = document.querySelector('#choose')
const rock = document.querySelector('#rock')
const scissors = document.querySelector('#scissors')
const paper  = document.querySelector('#paper')
const results = document.querySelector('#results') 
const rate = document.querySelector('#rate')

let winRate = 0
let loseRate = 0
let drawRate = 0

function random_rr(){
    let randomNumber = Math.round(Math.random()*3)
    if (randomNumber === 1){
        return 'rock'
    }
    else if (randomNumber === 2){
        return 'scissors'
    }
    else {
        return 'paper'
    }
}

rock.addEventListener('click', () => {
    let element = random_rr()
    
    if (element === 'rock'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/rock.png" alt="">
    </div>
    <p> Draw</p> 
</div> `
        drawRate ++
    }
    else if (element === 'scissors'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/scissors.png" alt="">
    </div>
    <p> You Won</p>
</div> `
        winRate ++
    }
    else if (element === 'paper'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/paper.png" alt="">
    </div>
    <p> You Lose</p>
</div> `
        loseRate ++
    }
})

scissors.addEventListener('click', () => {
    let element = random_rr()

    if (element === 'rock'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/rock.png" alt="">
    </div>
    <p> You Lose</p>
</div> `
        loseRate ++
    }
    else if (element === 'scissors'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/scissors.png" alt="">
    </div>
    <p> Draw</p>
</div> `
        drawRate ++
    }
    else if (element === 'paper'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/paper.png" alt="">
    </div>
    <p> You Won</p>
</div> `
        winRate ++
    }
})

paper.addEventListener('click', () => {
    let element = random_rr()

    if (element === 'rock'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/rock.png" alt="">
    </div>
    <p> You Won</p>
</div> `
        winRate ++
    }
    else if (element === 'scissors'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/scissors.png" alt="">
    </div>
    <p> You Lose</p>
</div> `
        loseRate ++
    }
    else if (element === 'paper'){
        results.innerHTML = `<div>
    <div class="comp">
        <p>Computer:</p>
        <img src="./assets/paper.png" alt="">
    </div>
    <p> Draw</p>
</div> `
        drawRate ++
    }
})



