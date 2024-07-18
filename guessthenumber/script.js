const input = document.querySelector('#input')
const result = document.querySelector('#result')
const random = document.querySelector('#random')
const button = document.querySelector('#button')


console.log(input )

button.addEventListener('click', () => {

    let randomNumber = Math.round(Math.random() * 10)
    random.innerHTML = `<h5>Computer's choice number: ${randomNumber}</h5>`
    if (input.value > 10) {
        result.innerHTML = `<p>The number should be less than or equal to 10!</p>`
    }
    else if (randomNumber === +(input.value)) {
        result.innerHTML = `<p id="won">You won!</p>`
    }
    else {
        result.innerHTML = `<p id="lose">You lose!</p>`
    }
})
