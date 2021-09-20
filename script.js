const players = (player, mark)=>{
    return{player,mark}
}

const player1 = players('playerX','❌')
const player2 = players('playerO','⭕️')
let defaultMarkX = true

let container = document.querySelector('.container')
valueArr =["","","","","","","","",""]

let boards = document.querySelectorAll('.board')




boards.forEach((board)=>{
   
    board.addEventListener('click',(e)=>{
        e.target.innerHTML=defaultMarkX? player1.mark: player2.mark
        valueArr.splice(e.target.dataset.index,1,defaultMarkX)
        defaultMarkX=(!defaultMarkX)
        
        console.log(valueArr)


    
})

})


