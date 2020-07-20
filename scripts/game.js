//iniciar variaveis
let board = ['','','','','','','','','']
let PlayerTime = 0
let symbols = ['o', 'x']


function handleMove(position){
    if(board[position] == ''){
        board[position] = symbols[PlayerTime]

        if (PlayerTime == 0){
            PlayerTime = 1
        }else{
            PlayerTime = 0
        }
    }


}