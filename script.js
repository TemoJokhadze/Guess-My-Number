
// const changeText = document.querySelector('.guessing').textContent = '🎉 Correct Number'

// const numb = document.querySelector('.numb').textContent = 17
// const score = document.querySelector('.score2').textContent = 10
// const number = document.querySelector('.number2').value = 8

const checkBtn = document.querySelector('.check')
let secretNumber = Math.trunc(Math.random() * 20) + 1
// const checkSecretNumber = document.querySelector('.numb').textContent = secretNumber
let score = 20

checkBtn.addEventListener('click',() => {
    const guess = Number(document.querySelector('.number2').value)
    console.log(guess, typeof guess);
    
    if(!guess){
        document.querySelector('.guessing').textContent = '⛔ No Number' 
    }else if (guess === secretNumber){
        document.querySelector('.guessing').textContent = '🎉 Correct Number'
        // document.querySelector('.numb').textContent = secretNumber 
        document.querySelector('.numb').textContent = secretNumber
    
        document.querySelector('body').style.backgroundColor = '#60b347'
        // document.querySelector('.numb').style.width = '30rem'
        
        score++
        document.querySelector('.score2').textContent = score
    }else if(guess > secretNumber){
        if(score > 1){
            document.querySelector('.guessing').textContent = '📈 Too High! '
        score--
        document.querySelector('.score2').textContent = score
        }else{
            document.querySelector('.guessing').textContent = '💥 You lost the game'
            document.querySelector('.score2').textContent = 0 
        }
        
    }else{
        if(score > 1){
            document.querySelector('.guessing').textContent = '📉 Too Low'
            score--
            document.querySelector('.score2').textContent = score
        }else{
            document.querySelector('.guessing').textContent = '💥 You lost the game'
            document.querySelector('.score2').textContent = 0 
        }
        
    }
})

const btn = document.querySelector('.btn')

btn.addEventListener('click', () => {
    score = 20
    
    document.querySelector('body').style.backgroundColor = '#222',
    
    secretNumber = Math.trunc(Math.random() * 20) + 1
    
    document.querySelector('.numb').textContent = secretNumber
    
    document.querySelector('.score2').textContent = score
    
    document.querySelector('.numb').textContent = '?'
    
    document.querySelector('.number2').value = ''
   
    document.querySelector('.guessing').textContent ='Start guessing'
    
})