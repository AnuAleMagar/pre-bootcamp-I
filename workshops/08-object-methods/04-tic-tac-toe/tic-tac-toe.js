/*
### Tic Tac Toe

Define an object 'ticTacToe'.

Follow the test specs to create a 'board' property, 'move' method, and a 'clear'
method so you can play a game with your partner.

The 'board' property is a grid of arrays that represents the board, where each
cell is initiall null.

The 'move' method is a method that, given a character, rowNum, and colNum, adds
the character to the correct cell in the board.

The 'clear' method should reset the board to all nulls.

To make it easier to play, have your 'move' method console.log() the
board before the method returns the board.

*/

// YOUR CODE BELOW

const ticTacToe={
    state:"",
    board:[[null,null,null],
           [null,null,null],
           [null,null,null]],
    move:function(rowNum,columnNum,char){
        char=char.toUpperCase();
        if(char!="X" && char!='O'){
            console.log("Not a valid character")
            return this.board
        }
        if(this.state===char){
            console.log("It is another player turn!")
            return this.board
        }
        if(this.board[rowNum][columnNum]===null){
             this.board[rowNum][columnNum]=char;
              console.log('\n')
              console.log(ticTacToe.board[0] )
               console.log(ticTacToe.board[1] )
               console.log(ticTacToe.board[2] )  
             this.state=char
        }else{
            console.log("This cell is not empty,try another cell")
            return this.board
        }
         
        if(this.check()){
             console.log('\n')
            console.log("Game Over! The winner is ",char,'!!!')
             console.log(ticTacToe.board[0] )
               console.log(ticTacToe.board[1] )
               console.log(ticTacToe.board[2] )
               
          }
          return this.board
    },
    clear:function(){
        this.board=[[null,null,null],
                    [null,null,null],
                    [null,null,null]];
                      console.log('\n')
               console.log('The game is reset!')
               console.log(ticTacToe.board[0] )
               console.log(ticTacToe.board[1] )
               console.log(ticTacToe.board[2] )
              
       return this.board
    },
    check:function(){
           if(  this.board[0][0]===this.board[0][1] && this.board[0][1]===this.board[0][2]  && this.board[0][2]!=null ||
                this.board[1][0]===this.board[1][1] && this.board[1][1]===this.board[1][2]  && this.board[1][2]!=null ||
                this.board[2][0]===this.board[2][1] && this.board[2][1]===this.board[2][2]  && this.board[2][2]!=null ||
                this.board[0][0]===this.board[1][0] && this.board[1][0]===this.board[2][0]  && this.board[2][0]!=null ||
                this.board[0][1]===this.board[1][1] && this.board[1][1]===this.board[2][1]  && this.board[2][1]!=null ||
                this.board[0][2]===this.board[1][2] && this.board[1][2]===this.board[2][2]  && this.board[2][2]!=null ||
                this.board[0][0]===this.board[1][1] && this.board[1][1]===this.board[2][2]  && this.board[2][2]!=null ||
                this.board[2][0]===this.board[1][1] && this.board[1][1]===this.board[0][2]  && this.board[0][2]!=null  ){

        return true;

     }
    }
}
ticTacToe.move(1,1,"O");
ticTacToe.move(0,0,"x");
ticTacToe.move(2,0,"o");
ticTacToe.move(0,1,"x");
ticTacToe.move(0,2,"o");
ticTacToe.clear()


