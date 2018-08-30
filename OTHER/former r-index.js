// var data = require("../../routes/apiRoutes");

$(document).ready(function() {

    // // note: /api/realpet/:petid?"

        // GET ALL function
//  function getAllPets() {
    $.get("/api/realpet", function(data) {
        // var hbsObject = {
        //     pets: data
        // };
        // data.render("realpets", hbsObject);
//    });
    console.log(data);
    });

//  getAllPets();

    //     $.ajax(ajaxUrl, {
    //     type: "POST"
    // }).then(
    //     function() {
    //     // console.log("Success! Added new CREATURE to the database.");
    //     // Reload the page to get the updated list
    //     location.reload();
    //     document.getElementById("create-pet-form").reset();
    //     }
        
    // $.get("/api/realpet", function(data) {
    //     var hbsObject = {
    //         pets: data
    //     };
    //     data.render("realpets", hbsObject);
    //     console.log(data);
    // });


    //Create new creature entry function
    $(".create-pet").on("submit", function(event) {
        event.preventDefault();
  
        var newPetName = $("#new-name").val().trim();
  
        var ajaxUrl = "/api/realpet/" + newPetName;
  
        // Send the POST request.
        $.ajax(ajaxUrl, {
            type: "POST"
        }).then(
            function() {
            // console.log("Success! Added new CREATURE to the database.");
            // Reload the page to get the updated list
            location.reload();
            document.getElementById("create-pet-form").reset();
            }
        );
    });
  

    //Update function 1 - update whether cat wants to be pet "pet_or_not"
    $(".adopt-the-creature").on("click", function(event) {
  
        var creatureId = $(this).data("id");
        var adoptedState = $(this).data("adopted-state");
        var updatedAdoptedState = null;
  
        //checks current pet state of cat and reverses it for update- pets the cat when clicking "Mrow! Pet Meee!!!", or other button will say "the cat is bored again" for toggling the cat back to pettable
        if (adoptedState == 0) {
            updatedAdoptedState = 1;
        } else if(adoptedState == 1) {
            updatedAdoptedState = 0;
        } else {
            console.log("Problem! Defaulting to 0.");
            updatedAdoptedState = 0;
        };
  
        var ajaxUrl = "/api/creatures/adopted_or_not/" + updatedAdoptedState + "/" + creatureId;
            //this sets pet_or_not to true or false (0 or 1) for the id given
  
        // Send the PUT request.
        $.ajax(ajaxUrl, {
            type: "PUT"
        }).then(
            function() {
            // console.log("Success! Updated cat pet_or_not state to opposite value.");
            // Reload the page to get the updated list
            location.reload();
            }
        );
    });
  
    //Update function 2 - update name of cat- optional addition later
  
    });