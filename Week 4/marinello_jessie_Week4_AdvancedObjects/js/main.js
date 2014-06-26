//Jessie Marinello
//Week 4 Advanced Objects
//June 2014
//main.js - holds all other js functions, instances, arrays

//create self executing function
(function(){

    //define all variables
    var numOfPeople = 3; //can increase number of people if desired/required
    var people = []; //empty array
    var names = ["Felix", "Hong Kong Phooey", "Yogi", "Peabody", "The Brain", "Mighty Mouse"]; //array of names
    var interval;

    //create loop that instantiates three Person objects
    for (var i =0; i<numOfPeople; i++){

        //generate a number using the length of the names array (names.length, which is 6)
        var personIndex = Math.floor(Math.random()*names.length);

        //use keyword to setup new Person object
        var person = new Person(names[personIndex], i+1); //setting new objects (instantiate Person objects)

        populateHTML(person.name,"r"+(i+1)+"c1"); //populate cell 1 (c1) with name parameter from constructor function
        populateHTML(person.job,"r"+(i+1)+"c2"); //populate cell 2 (c2) with job parameter from constructor function

        //push the personIndex (new Person object that is created) into people array
        //uses Math.random expression to randomly select 3 names from
        people.push(personIndex);

        //adds/removes items to/from an array, and returns the removed item(s)
        //array.splice(index,howmany,item1,.....,itemX)
        names.splice(personIndex, 1);
    }

    //make sure only one interval is running at a time & clear out the old before running the new
    clearInterval(interval);

    //set the interval to 30 FPS
    //the selectInterval() method will continue calling the function until clearInterval() is called, or window closes
    //the ID value returned by setInterval() is used as the parameter for the clearInterval() method
    interval = setInterval(runUpate, 1000/30);

    function populateHTML(data, field){
        var id = document.getElementById(field);
        id.innerHTML = data;
    }

    function runUpdate(){
        people.forEach(function(element){
            console.log(element);
            //element = the items in the people array
            //.update = the prototype method in the person.js file
            element.update();
        });
    }


})();