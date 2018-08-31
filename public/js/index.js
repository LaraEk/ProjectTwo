$(document).ready(function() {

    console.log("it has begun");

    $("#choices").show();
    $("#realpetscards").hide();
    $("#fantasypetscards").hide();


    $("#realpetsbutton").on("click", function() {
        console.log("Real Pets Chosen");
        $("#choices").hide();
        $("#realpetscards").show();
        $("#fantasypetscards").hide();    
    });

    $("#fantasypetsbutton").on("click", function() {
        console.log("Fantasy Pets chosen");
        $("#choices").hide();
        $("#realpetscards").hide();
        $("#fantasypetscards").show();
    });


    $("#adoptable").on("click", function() {
        alert("this is where adoptable info should come up");
        });
    



}); //end document-ready-function




// -----------------------------------------------------------------------

// NOTE: THE INDEX.JS MUST ONLY CONTAIN JS FUNCTIONS, NOT HTMLROUTES, APITROUTES, OR ANY OTHER ROUTING

// THIS INCL ONCLICKS, DOC.READY, ETC.

// PSEUDOCODING THE JS:
// 1 -- THE INDEX.HANDLEBARS WILL PRINT EACH PET CARD (USING {{#forEach}} )
// 2 -- THEN THE INDEX.JS WILL MANIPULATE THOSE CARDS:
// -------- ONCLICK, THOSE CARDS WILL ADOPT-OR-NOT

//  THIS IS MVP: GET IT TO ACCEPT ADOPTS 


// SECOND MVP:

// 1) WHEN USER FIRST INTO PAGE: CLICK EITHER "REAL ANIMALS" OR "FANTASY ANIMALS"
// 2) UPON CLICK, .HIDE() THE NOT-CHOSEN AND .SHOW() THE CHOSEN
// 3) PROCEED AS ABOVE