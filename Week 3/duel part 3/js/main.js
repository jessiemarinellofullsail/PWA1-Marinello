//Jessie Marinello
//Duel Part 3 - DOM
//June 2014

// self-executing function
window.addEventListener('load', function(){ //waits for window to load before running and firing function; prevents me from getting null error returned on querySelectors

console.log("FIGHT!!!"); //Console acknowledgment

var fighterArray = []; //create an empty literal array
fighterArray.push({name:'Spiderman', damage:20, health:100}); //adding object to array. fighterArray[0]
fighterArray.push({name:'Batman', damage:22, health:100}); //adding object to array. fighterArray[1]

//Define DOM pieces in order to access and define HTML tags
//# sign is not needed if using getElementByID
//# sign is needed is using querySelector
var fightTitle = document.querySelector("#title");
var fighter1Health = document.querySelector("#player1_health");
var fighter2Health = document.querySelector("#player2_health");
var round_txt = document.querySelector("#fight_text");
var fight_button = document.getElementById("fight_button");

//initialize round variable
var round = 1;

//Set up click event
//Don't use button.onclick=fight; Need more flexibility
fight_button.addEventListener("click", fight, false); //when click happens will call fight function

//Initialize DOM innerHTML text for top of HTML page
round_txt.innerHTML = "Click FIGHT button to start!";
fighter1Health.innerHTML = fighterArray[0].name + ":" + fighterArray[0].health;
fighter2Health.innerHTML = fighterArray[1].name + ":" + fighterArray[1].health;

//Create FIGHT function
function fight(){
    console.log('inside fight function'); //notice to console that I've made it into the fight function
    //alert(fighters[o].name + ":" + fighters[0].health + "*START*" + fighters[1].name + ":" + fighters[1].health);
    fighter1Health.innerHTML = fighterArray[0].name + ":" + fighterArray[0].health;
    fighter2Health.innerHTML = fighterArray[1].name + ":" + fighterArray[1].health;

//Determine damage using math.random formula (kept in comments below)
    var f1 = Math.floor(Math.random() * fighterArray[0].damage + fighterArray[0].damage *.5);
    var f2 = Math.floor(Math.random() * fighterArray[1].damage + fighterArray[1].damage *.5);

//Inflict damage
    fighterArray[0].health -= f1;
    fighterArray[1].health -= f2;

    console.log(fighterArray[0].health, fighterArray[1].health);

//Check for winner
    var result = winnerCheck();
    console.log(result);

    round_txt.innerHTML = "Round " + round + " complete:";
    round++;
    if(result === "no winner"){
        fighter1Health.innerHTML = fighterArray[0].name + ":" + fighterArray[0].health;
        fighter2Health.innerHTML = fighterArray[1].name + ":" + fighterArray[1].health;
    }else{
        fighter1Health.innerHTML = "";
        fightTitle.innerHTML = result;
        fighter2Health.innerHTML = "";

        //Disable FIGHT button - need the below if using addEventListener
        fight_button.removeEventListener("click", fight, false);

        document.querySelector(".buttonblue").innerHTML = "Done!!";
    }
}

//create winnerCheck function
function winnerCheck(){
    var result = "no winner";
    if(fighterArray[0].health < 1 && fighterArray[1].health < 1){
        result = "You both DIE - GAME OVER";
    }else if(fighterArray[0].health < 1){
        result = fighterArray[1].name + "Wins!";
    }else if(fighterArray[1].health < 1){
        result = fighterArray[0].name + "Wins!"
    }
    return result;
}

});






































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