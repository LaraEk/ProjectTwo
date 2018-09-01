//This file pulls adoption request form data and sends POST request from client to server-side


//get form inputs when submitted
$("#submit-adopt-form").on("click", function(event) {
    event.preventDefault();

    // grab the form elements and save them in key:value pairs within an object
    var newAdoptReq = {
        clientName: $("#client-name").val().trim(),
        clientEmail: $("#client-email").val().trim(),
        clientPhone: $("#client-phone").val().trim(),
        clientMessage: $("#client-message").val().trim(),
        petId: $("#submit-adopt-form").attr("data-pet-id")
        //petId: $("#submit-adopt-form") //TODO put data-pet-id value from input submit button here
    };

    console.log(newAdoptReq);

    // export the object- send POST request to api routes file
    $.post("APIROUTEHERE", newAdoptReq,
        function(data) { //receives the result of the post function
            if(data) {
                // if a response is returned, meaning the POST was successful
                console.log(data);//console log response for testing purposes
                
                var confirmDiv = $("#confirmDiv");
                confirmDiv.text("Thank you! Your adoption request has been received. We'll get back to you within 3 business days. If you have any questions, please email us directly at adoptions@exampledomain.com .");

            }
           else {
            //if there is an error and no response is returned

                var confirmDiv = $("#confirmDiv");
                confirmDiv.text("We're sorry, an error prevented submission of your request. Please email us directly at adoptions@exampledomain.com .");

                // alert("We're sorry, an error prevented submission of your request. Please email us directly at adoptions@exampledomain.com .");
           }
            
    });

    //Clear the form when submitting- 
    //TODO- add more efficient method, clear form command
    
    $("#client-name").val("");
    $("#client-email").val("");
    $("#client-phone").val("");
    $("#client-message").val("");
    
});

//send ajax POST request using form data in request body