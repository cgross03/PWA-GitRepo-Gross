/*
Chris Gross
Analyze Duel Week One
Online
5-9-15
*/

// Self executing function.
(function(){

    console.log("FIGHT!!!");

    //player Information
    var playerOne = ["Captain", 20, 100];
    var playerTwo = ["Commander", 20, 100];


    //initiate round
    var round=0;

    function fight(){
        alert(playerOne[0]+":"+playerOne[2]+"  *START*  "+playerTwo[0]+":"+playerTwo[2]);
        // Begin loop. If the round is less than 10 continue to next round. If at 10, break.
        for (var i = 0; i < 10; i++){
            
            // Player damage
            var minDamage1 = playerOne[1] * .5;
            var minDamage2 = playerTwo[1] * .5;
            
            //Assigns random amount of damage to be dealt to each player.
            var f1 = Math.floor(Math.random()*(playerOne[1]-minDamage1)+minDamage1); 
            var f2 = Math.floor(Math.random()*(playerTwo[1]-minDamage2)+minDamage2);

            //Player health.
            playerOne[2]-=f1;
            playerTwo[2]-=f2;

            console.log(playerOne[0]+": "+playerOne[2] + " " + playerTwo[0]+":"+playerTwo[2]);

            //Check for winner
            var result = winnerCheck();
            //Console log the result
            console.log(result);
            
            //If there is no winner display "no winner" and advance to next round.
            if (result==="No Winner"){
                round++;
                alert(playerOne[0]+":"+playerOne[2]+"  *ROUND "+round+" OVER"+"*  "+playerTwo[0]+":"+playerTwo[2]);

            }else{
                // Display Alert box with results.
                alert(result);
                break;
            };

        };
    };

    function winnerCheck(){
        var result="no winner";
        
        // If both players drop to below 1 health point, display "You Both Die"
        if (playerOne[2]<1 && playerTwo[2]<1){
            result = "You Both Die!";
            
        //If player one health drops below 1, display "Player Two Wins"
        }else if(playerOne[2]<1){
            result =playerTwo[0]+" WINS!!!"
        
        //If player two health drops below 1, display "Player One Wins"    
        } else if (playerTwo[2]<1){
            result = playerOne[0]+" WINS!!!"
            
        };
        
       return result;
        console.log(result);
    
    };

    // *****Program Starts Below*****
    fight();

})();