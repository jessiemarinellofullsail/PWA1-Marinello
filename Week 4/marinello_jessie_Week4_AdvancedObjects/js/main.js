//Jessie Marinello
//Week 4 Advanced Objects
//June 2014
//main.js - holds all other js functions, instances, arrays

//create self executing function
(function(){

    //add the Person object to the global window object because main.js requires it
    window.Person = Person;

    //define all possible job choices and actions for all the Person instances
    Person.jobs = ["teacher", "actor", "student", "scuba diver"];
    Person.actions = ["sleeping", "eating", "working"];

    //constructor function
    function Person(name,row){ //pass parameters
        console.log("Person created: ", name);

        //"this" keyword to define name
        this.name = name;

        //sets initial action for each person randomly
        //"this" keyword to define actions
        this.action = Person.actions[Math.floor(Math.random()*Person.actions.length)];

        //sets job per person randomly
        //"this" keyword to define jobs
        this.job = Person.jobs[Math.floor(Math.random()*Person.jobs.length)];

        //defines row so JS knows what row in the HTML to update text in
        //"this" keyword to define row
        this.row = row;

        //displays initial action
        var id = document.getElementById("r"+this.row+"c3");
        id.innerHTML = this.action;

        this.update = update = function(){
            if (Math.floor(Math.random() <.01)){
                var i = Math.floor(Math.random()*Person.actions.length);
                this.action = Person.actions[i];
                var id = document.getElementById("r"+this.row+"c3");
                id.innerHTML = this.action;
            }
        }

    };

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
        people.push(person);

        //adds/removes items to/from an array, and returns the removed item(s)
        //array.splice(index,howmany,item1,.....,itemX)
        names.splice(personIndex, 1);
    }

    //make sure only one interval is running at a time & clear out the old before running the new
    clearInterval(interval);

    //set the interval to 30 FPS
    //the selectInterval() method will continue calling the function until clearInterval() is called, or window closes
    //the ID value returned by setInterval() is used as the parameter for the clearInterval() method
    interval = setInterval(runUpdate, 1000/30);


    //function to output the person's name and person's job, on the web page.
    function populateHTML(data, field){
        var id = document.getElementById(field);
        id.innerHTML = data;
    }

    //The loop should execute in the runUpdate() function that is called from the setInterval
    function runUpdate(){
        people.forEach(function(element){
            //console.log(element);
            //element = the items in the people array
            //.update = the prototype method in the person.js file
            element.update();
            //console.log(Window.Person);
        });
    }

})();