/*
Chris Gross
Analyze Duel Week One
Online
5-9-15
*/

// Self executing function.
(function(){

    console.log("FIGHT!!!");

    //player name
    var playerOneName = "Spiderman";
    var playerTwoName = "Batman";

    //player damage
    var player1Damage = 20;
    var player2Damage = 20;

    //player health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName+":"+playerOneHealth+"  *START*  "+playerTwoName+":"+playerTwoHealth);
        // Begin loop. If the round is less than 10 continue to next round. If at 10, break.
        for (var i = 0; i < 10; i++){
            
            // Player damage
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            
            //Assigns random amount of damage to be dealt to each player.
            var f1 = Math.floor(Math.random()*(player1Damage-minDamage1)+minDamage1); 
            var f2 = Math.floor(Math.random()*(player2Damage-minDamage2)+minDamage2);

            //Player health.
            playerOneHealth-=f1;
            playerTwoHealth-=f2;

            console.log(playerOneName+": "+playerOneHealth + " " + playerTwoName+":"+playerTwoHealth);

            //Check for winner
            var result = winnerCheck();
            //Console log the result
            console.log(result);
            
            //If there is no winner display "no winner" and advance to next round.
            if (result==="No Winner"){
                round++;
                alert(playerOneName+":"+playerOneHealth+"  *ROUND "+round+" OVER"+"*  "+playerTwoName+":"+playerTwoHealth);

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
        if (playerOneHealth<1 && playerTwoHealth<1){
            result = "You Both Die!";
            
        //If player one health drops below 1, display "Player Two Wins"
        }else if(playerOneHealth<1){
            result =playerTwoName+" WINS!!!"
        
        //If player two health drops below 1, display "Player One Wins"    
        } else if (playerTwoHealth<1){
            result = playerOneName+" WINS!!!"
            
        };
        
       return result;
    
    };

    // *****Program Starts Below*****
    fight();

})();