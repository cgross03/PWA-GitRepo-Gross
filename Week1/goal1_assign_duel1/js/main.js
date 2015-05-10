// Chris Gross
// PWA1 Online
// 5-9-15


(function(){  // Self Exicuting Function
    
    console.log ("Fight!!!"); // Checking for js file connection to html file.
    
    
    //Player names.
    var playerOneName = "Captain";
    var playerTwoName = "Commander";
        
    // Player damage.
    var playerOneDamage = 20;
    var playerTwoDamage = 20;
    
    //Player health.
    var playerOneHealth = 100;
    var playerTwoHealth = 100;
    
    //Game round.
    var round = 1;
    
    function fight(){
        console.log ("In the Fight Function");
        
        for (var i=0; i<10; i++){ // "for loop" to set a limit to 10 rounds. Continue the game until the 10th round. Then break.
            console.log (i);
        }; 
        
    };
    
    function winnerCheck(){
        
       
        
    };
    
    // *****Program starts after this line.*****
    console.log ("Program Starts");
    fight();
    
    
    
    
    })(); 