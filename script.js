const players = (player, mark)=>{
    return{player,mark}
}

const player1 = players('playerX','❌')
const player2 = players('playerO','⭕️')
let defaultMarkX = true
console.log(defaultMarkX)
let container = document.querySelector('.container')
valueArr =[]


let doSomething = (e) =>{
   
    e.target.innerHTML = defaultMarkX? player1.mark: player2.mark
    defaultMarkX=(!defaultMarkX)
    console.log(e.target)
    
}

container.addEventListener('click',doSomething)


let board = document.querySelectorAll('.board')
board = Array.from(board)
console.log(board) //on click of the button add it to the array as well 

board.forEach( (item)=> {
    let value = item.innerHTML
    valueArr.push(value)
    console.log(valueArr)
    
})

