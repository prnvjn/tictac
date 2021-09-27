const players = (player, mark)=>{
    return{player,mark}
}

const player1 = players('playerX','❌')
const player2 = players('playerO','⭕️')
let defaultMarkX = true

let container = document.querySelector('.container')
valueArr =["","","","","","","","",""]

let boards = document.querySelectorAll('.board')
let result = document.getElementById('result')



boards.forEach((board)=>{
   
    board.addEventListener('click',(e)=>{
    

        if(valueArr[e.target.dataset.index]===""){
            e.target.innerHTML=defaultMarkX? player1.mark: player2.mark
            valueArr.splice(e.target.dataset.index,1,defaultMarkX)
            defaultMarkX=(!defaultMarkX)
            
            console.log(valueArr)

        }

        else{
            alert("already filled spot")
        }
   
       checkWinner()

    
})

})

const checkWinner = () =>{
    let test = [
        [0,1,2],
        [3,4,6],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,6,8],
        [0,4,8],
        [2,4,6]
    ]
    test.forEach(single =>{
        let [a,b,c] = [...single]
       if(  valueArr[a]===valueArr[b]&& valueArr[b]===valueArr[c] && (valueArr[a]===(true) || valueArr[a]===(false) )){
           
            result.innerText = `${valueArr[a]?player1.mark:player2.mark}`
       }
       else{
           console.log("its a tiee")
       }
        
    } )
}
