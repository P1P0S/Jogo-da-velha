document.addEventListener('DOMContentLoaded', ()=>{

    let squares = document.querySelectorAll(".square")

    squares.forEach((square)=>{
        square.addEventListener('click', handleClick)
    })

})

function handleClick(event){
    
    let square = event.target
    let position = square.id

    if (handleMove(position)){
        
        setTimeout(() => {
            alert('O jogo acabou - O vencer foi ' + PlayerTime)
        }, 10)
    }
    updateSqaure(position)
}

function updateSqaure(position){
    let square = document.getElementById(position.toString())
    let symbol = board[position]
    square.innerHTML = `<div class='${symbol}'></div>`
}



function resetBtn(){


    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        reset()
        square.innerHTML = ''
    })
}