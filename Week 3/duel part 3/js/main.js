//Jessie Marinello
//Duel Part 3 - DOM
//June 2014

// self-executing function


console.log("FIGHT!!!"); //Console acknowledgment

var fighterArray = []; //create an empty literal array
fighterArray.push({name:'Spiderman', damage:20, health:100}); //adding object to array
fighterArray.push({name:'Batman', damage:22, health:100}); //adding object to array













































/*****************DUEL Part 2 CODE***********************************
 //player names
 //create 2 players
 //Old code: var playerOneName = "Spiderman";
 //Old code: var playerTwoName = "Batman";
 var fighter1 = ["Spiderman", 20, 100]; //NEW CODE: arrange player name, player damage, and player beginning health into array
 var fighter2 = ["Batman", 20, 100]; //NEW CODE: arrange player name, player damage, and player beginning health into array

 //player damage
 //this variable determines the amount of maximum damage per round that the player causes
 //Old code: var player1Damage = 20;
 //Old code: var player2Damage = 20;

 //player health
 //players start at full health, ie 100
 //Old code: var playerOneHealth = 100;
 //old code: var playerTwoHealth = 100;

 //initiate round
 //keep track of what round the players are currently fighting in
 var round=1; //Old code held a "0"; define as a global variable for fighter rounds

 //this function contains the code that loops through rounds and reduces the player’s health accordingly
 function fight(){
        console.log("In the fight function");
        alert(fighter1[0] + ":" + fighter1[2] + " *START* "+ fighter2[0] + ":" + fighter2[2]); //alert user to begin fight

        for (var i = 0; i < 10; i++) //set FOR loop to keep running through rounds
        //i<10 (10 is the number of rounds) if i is less than 10, then execute code
        //i++ adds a loop until 10 loops is reached
        {
            //random formula is - Math.floor(Math.random() * (max - min) + min);
            //Damage occurs to both players at a random amount between half damage and maximum damage. So, if the player's damage variable is 20 then the amount of damage that can be inflicted will be between 10-20
            var minDamage1 = fighter1[1] * .5; //create variable for minimum damage to player 1; multiply player 1 damage by .5 (half damage)
            var minDamage2 = fighter2[1] * .5;//create variable for minimum damage to player 2; multiply player 2 damage by .5 (half damage)
            //create variables for each player to hold the random number
            //math.floor rounds number to integer
            //math.random generates number between 0 and 1
            var f1 = Math.floor(Math.random()*(fighter1[1]-minDamage1)+minDamage1);
            var f2 = Math.floor(Math.random()*(fighter2[1]-minDamage2)+minDamage2);
            //console.log f1 and f2 to make sure that random number formula is working
            console.log(f1);
            console.log(f2);

            //inflict damage
            //subtract random number from each player's health
            fighter1[2]-=f1;
            fighter2[2]-=f2;

            //console "points" that are being subtracted from each player's health
            console.log(fighter1[0] + ": " + fighter1[2] + " " + fighter2[0] + ":"+ fighter2[2]);

            //check for winner
            var result = winnerCheck(); //create variable to hold result, using winnerCheck function
            console.log(result);
            if (result==="no winner") //if result in winnerCheck strictly equals variable of no winner, then code will loop and add another round
            {
                round++; //increment round by one (round one goes to round two, so on)
                alert(fighter1[0] + ":" + fighter1[2] + "*ROUND " +round+" OVER" +"*  "+ fighter2[0] + ":" + fighter2[2]); //alert user that new round is beginning

            } else{ //if there is a result that does not strictly equal no winner, than there is a winner; alert user to winner
                alert(result);
                break; //break command is used to escape out of the loop if the fight is over before the 10 rounds is reached
            };

        };
    };

 //runs at the end of every fight round to check if there is a winner
 //this function is invoked after each round and returns a string of either the winner, the loser, a tie (both die) or no winner yet. This function does the conditional logic to determine if there is a winner or not
 function winnerCheck(){
        console.log("In the winner check function");
        var result="no winner";
        if (fighter1[2]<1 && fighter2[2]<1) //if player 1 health is less than one AND player 2 health is less than 1, then there will be a result that both players die
        {
            result = "You Both Die";
        } else if(fighter1[2]<1){ //if above condition is not met, then if player 1 health is less than one, then player 2 wins
            result =fighter2[0]+" WINS!!!"
        } else if (fighter2[2]<1) //if above condition is not met, then if player 2 health is less than one, then player 1 wins
        {
            result = fighter1[0]+" WINS!!!"
        };
        return result; //return winnerCheck information to results variable to use that information again
    };

 /*******  The program gets started below *******/
//fight(); //invoke fight function
/********************************************END DUEL PART 2 CODE*******************/