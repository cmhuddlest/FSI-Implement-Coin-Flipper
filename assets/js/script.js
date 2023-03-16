// TODO: Declare any global variables we need
let numberOfheads = 0;
let numberOftails = 0;
let percentageOfheads = 0;
let percentageOftails = 0;
let total = 0;

    // TODO: Add event listener and handler for flip and clear buttons
    let flipThepenny = document.querySelector('#flip')
    let clearScoreboard = document.querySelector('#clear')

    flipThepenny.addEventListener('click',function(e){
let flippedHeads = Math.random() <.5
if (flippedHeads){

    document.getElementById('penny-img').src = 'assets/images/penny-heads.jpg'
document.getElementById('message').textContent = 'You flipped heads'
numberOfheads += 1
    } 
    
    else {
        document.getElementById('penny-img').src = 'assets/images/penny-tails.jpg'
        document.getElementById('message').textContent = 'You flipped tails'
        numberOftails += 1

    }
let total = numberOfheads + numberOftails

if (total > 0) {
    percentageOfheads = Math.round((numberOfheads / total) * 100)
    percentageOftails = Math.round((numberOftails / total) * 100)
}

document.getElementById('heads').textContent = numberOfheads
document.getElementById('heads-percent').textContent = percentageOfheads + '%'
document.getElementById('tails').textContent = numberOftails
document.getElementById('tails-percent').textContent = percentageOftails + '%'

})

    clearScoreboard.addEventListener('click',function(e){

            numberOfheads = 0
            numberOftails = 0
            percentageOfheads = 0
            percentageOftails = 0

            document.getElementById('message').textContent = 'Let\'s Get Rolling!'
            let total = numberOfheads + numberOftails

            if (total > 0) {
                percentageOfheads = Math.round((numberOfheads / total) * 100)
                percentageOftails = Math.round((numberOftails / total) * 100)
            }
            
            document.getElementById('heads').textContent = numberOfheads
            document.getElementById('heads-percent').textContent = percentageOfheads + '%'
            document.getElementById('tails').textContent = numberOftails
            document.getElementById('tails-percent').textContent = percentageOftails + '%'
            
            
        
        })
