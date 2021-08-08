const players = (player, mark)=>{
    return{player,mark}
}

const player1 = players('playerX','X')
const player2 = players('playerO','O')

let container = document.querySelector('.container')


let doSomething = (e) =>{
   
    e.target.innerHTML = player1.mark
        console.log(e.target)
    
}

container.addEventListener('click',doSomething)


let board = document.querySelectorAll('.board')
board = Array.from(board)
console.log(board)
board.forEach( (item)=> 
    l
    item.innerHTML = player1.mark
)
