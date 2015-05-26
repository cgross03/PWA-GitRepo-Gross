/*
Chris Gross
Duel Week 3
Online
5-24-15
*/

// Self executing function.
(function(){

    console.log("FIGHT!!!");

    var fighterOne = document.querySelectorAll("#captain p");
    var fighterTwo = document.querySelectorAll("#commander p");
    var rounds = document.querySelector("round");
    var button = document.getElementById("fight_btn");


    //player Information
    var fighters = [
        {
            name: "Captain",
            damage: 20,
            health: 100
        },{
            name: "Commander",
            damage: 20,
            health: 100
        }
    ];


    //initiate round
    var round = 1;

        rounds.innerHTML = "Lets Fight!";
        fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighterTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;

    function fight(){
        fighterOne.innerHTML = fighters[0].name + ":" + fighters[0].health;
        fighterTwo.innerHTML = fighters[1].name + ":" + fighters[1].health;

            //Assigns random amount of damage to be dealt to each player.
            var f1 = Math.floor(Math.random() * fighters[0].damage + fighters[0].damage * .5);
            var f2 = Math.floor(Math.random() * fighters[1].damage + fighters[1].damage * .5);

            fighters[0].health -= f1;
            fighters[1].health -= f2;

            console.log(fighters[0].health, fighters[1].health);

            //Check for winner
            var result = winnerCheck();
            //Console log the result
            console.log(result);

        rounds.innerHTML = "round " + round + " Finished!";
        round++

            //If there is no winner display "no winner" and advance to next round.
            if (result==="No Winner") {
                fighterOne.innerHTML = fighters[0].name = ":" + fighters[0].health;
                fighterOne.innerHTML = fighters[1].name = ":" + fighters[1].health;

            }else{
                fighter1_txt.innerHTML = result;
                fighter2_txt.innerHTML = "";

                button.removeEventListener("Click", fight, false);

                document.querySelector(".buttonblue").innerHTML = "FINISHED!"
            };

        };

    function winnerCheck(){
        var result="no winner";
        
        // If both players drop to below 1 health point, display "You Both Die"
        if (fighters[0].health <1 && fighters[1].health <1){
            result = "You Both Die!";
            
        //If player one health drops below 1, display "Player Two Wins"
        }else if(fighters[0].health <1){
            result =fighters[1].name + " WINS!!!"
        
        //If player two health drops below 1, display "Player One Wins"    
        } else if (fighters[1].health<1){
            result = fighters[0].name + " WINS!!!"
            
        };
        
       return result;
    
    };



})();