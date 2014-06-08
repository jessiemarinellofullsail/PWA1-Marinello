//Jessie Marinello
//June 2015
//Week 1 ANALYZE Buggy Search Engine (Adding PSEUDOCODE)

// Create privatized scope using a self-executing function
//Begin search function
(function(){

    // Variable initialization (DO NOT FIX ANY OF THE BELOW VAR's)
    var resultsDIV = document.getElementById("results"), //Define DOM element for search results (returns the element that has the ID attribute with the specified value)
        searchInput = document.forms[0].search, //Define DOM element for search input (forms collection returns an array of all the forms in the current document, e.g. return the name of the first form in the document (first item in array is index of 0 [0]))
        currentSearch = '' //Define current search as empty string
        ;

    // Validates search query
    var validqte == function(query){ //assign anonymous function to variable. --NOTE-- I think the variable should be var validate

        // Trim whitespace from start and end of search query using charAt method and substring
        while(query.charAt(0) = " "){ //begin while loop to see if search query is empty. charAt() method to return the character at the specified index in a string should be equal to a space
            query = query.substring(1, query.length); //extract the characters from a string, between two specified indices (1 is "start" and query.length, or the length of the string entered, is "end")
        };
        while(query.charAt(query.length-1) === ""){ //WHILE loop is setting charAt() method to return the character at the specified index in a string. The index of the last character in a string is string.length-1. === Trim any white space from the end of the query search
            query = query.substring(0, query.length-1); //if "start" is less than 0 in the string, it will start extraction from index position 0. While loop is stating that if the full search term entered is strictly equal to having an empty string
            ; //--NOTE-- Unnecessary semi colon

            // Check search length, must have 3 characters
            if(query.length < 3){ //IF loop to determine is the length of the query search term is too short, or less than 3, to alert the user
                alert("Your search query is too small, try again.);
                //--NOTE-- IMPORTANT! The above string needs CLOSING QUOTES

                // (DO NOT FIX THE LINE DIRECTLY BELOW)
                searchInput.focus(); //Highlight search input box to show user they are within text area
                return; //return to stop function once above conditions have been met
            };

            search(query); //search button
        };

        // Finds search matches
        var search = function(query) //--NOTE-- This statements needs to be followed by a semi colon. Assign variable to query function

        // split the user's search query string into an array
        var queryArray = query.join(" "); // I THINK that this joins an array into string using given separator, " ". --NOTE-- This should probably be .split

        // array to store matched results from database.js
        var results = []; //create results variable to store matched results from database; store result

        // loop through each index of db (database.js) array
        for(var i=0, j=db.length; i<j; i++){

            // each db[i] is a single video item, each title ends with a pipe "|"
            // save a lowercase variable of the video title
            var dbTitleEnd = db[i].indexOf('|'); //indexOf() method returns the index within the calling String object of the first occurrence of the specified value, starting the search at fromIndex,returns -1 if the value is not found. --NOTE-- I'm not sure WHY the pipe is being called. I think the db[i] is being searched to locate values that match the query; store result

            var dbitem = db[i].tolowercase().substring(0, dbTitleEnd); //--NOTE--is this like case mapping? Is there a method for such? Examine individual characters of the sequence, creating a copy of a string with all characters translated to lowercase.; BUT WHY??? Is it intended to yield the correct result???; store result
            //--NOTE-- above variable should be camel case dbItem

            // loop through the user's search query words
            // save a lowercase variable of the search keyword
            for(var ii=0, jj=queryArray.length; ii<jj; ii++){
                var qitem = queryArray[ii].tolowercase(); //I think this needs to be lower case so that the user matches the host
                //--NOTE-- above variable should be camel case qItem, even better would be queryItem

                // is the keyword anywhere in the video title?
                // If a match is found, push full db[i] into results array
                var compare = dbitem.indexOf(qitem); //--NOTE--change dbitem and qitem to camel case
                if(compare !== -1){ //If it is not equal to -1, than I believe that the item CAN be found, which should push the database results to results
                    results.push(db[i]); //items are pushed into the db array index
                };
                ; //Unnecessary semi colons?
                ;

                results.sort(); //sort the results array (alphabetically?)

                // Check that matches were found, and run output functions
                if(results.length = 0){ //--NOTE-- This is setting results.length to 0? If the length of the results is equal to 0, then there are no results in the database
                    noMatch(); //set no match argument
                }else{ //ELSE if there is a match, ie results.length >= 1, will be placed into showMatches
                    showMatches(results); //set show match argument
                }; //Unnecessary semi colons
            }; //Unnecessary semi colons

            // Put "No Results" message into page (DO NOT FIX THE HTML VAR NOR THE innerHTML)
            var noMatch = function(){ //create function that displays "No Results" into HTML if the above if statement is met
                var html = ''+
                        '<p>No Results found.</p>'+
                        '<p style="font-size:10px;">Try searching for "JavaScript".  Just an idea.</p>'
                    ;
                resultsDIV.innerHTML = html; //DOM sets the inner HTML code of an HTML element to dynamically change page.
            };

            // Put matches into page as paragraphs with anchors
            var showMatches = function(results){ //when above ELSE statement for show matches is met, apply function to show user results of their search

                // THE NEXT 4 LINES ARE CORRECT.
                var html = '<p>Results</p>',//use html, title, and url variables from db to render on html page
                    title,
                    url
                    ;

                // loop through all the results search() function
                for(var i=0, j=results.length; i<j; i++){ //CONFUSED on this loop and what it is for!!! Think it has something to do with the video links that can be accessed once the user has selected a search result from the returned list of results. Trying to figure out WHY it is needed. Pulling the correct video for the search result that was selected by the user???

                    // title of video ends with pipe
                    // pull the title's string using index numbers
                    titleEnd = results[i].indexOf('|'); //I'd really appreciate being able to see a working copy of this script to better understand what happens once a user has a returned list of search results
                    title = results[i].subString(0, titleEnd);

                    // pull the video url after the title
                    url = results[i].substring(results[i].indexOf('|')+1, results[i].length);

                    // make the video link - THE NEXT LINE IS CORRECT.
                    html += '<p><a href=' + url + '>' + title + '</a></p>'; //add to the html the video link and title. Trying to figure out the greater than symbol here
                };
                resultsDIV.innerHTML = html; //THIS LINE IS CORRECT.
                //change the innerHTML of Div in html
            };

            // The onsubmit event will be reviewed in upcoming Course Material.
            // THE LINE DIRECTLY BELOW IS CORRECT
            document.forms[0].onsubmit = function(){ //calling the submit event
                var query = searchInput.value;
                validqte(query); //--NOTE-- Should be var validate

                // return false is needed for most events - this will be reviewed in upcoming course material
                // THE LINE DIRECTLY BELOW IS CORRECT
                return false;
                ;

            })(); //--NOTE-- Unnecessary ()