//This file pulls adoption request form data and sends POST request from client to server-side


//note- using Star Wars simple example exercise for starter code here

// get form inputs when submitted
$(document).on("submit", "form", function(event) {
    event.preventDefault();
    var $form = $(this);
    // var petId = $(this).data("pet-id") ;
    // var clientNameStr = "#client-name" + petId;

    // grab the form elements and save them in key:value pairs within an object
    var newAdoptReq = {
        clientName: $form.find("[name=client-name]").val().trim(),
        clientEmail: $form.find("[name=client-email]").val().trim(),
        clientPhone: $form.find("[name=client-phone]").val().trim(),
        clientMessage: $form.find("[name=client-message]").val().trim(),
        petId: $form.data("pet-id")
    };
    console.log("newAdoptReq = ");
    console.log(newAdoptReq);

    // send an AJAX POST-request with jQuery
    $.post("/api/adopt-form", newAdoptReq)
    // on success, run this callback
    .then(function(data) {
    // log the data we found
    console.log(data);
    // tell the user their message was sent with an alert window
    alert("Thank you! Your adoption request has been received. We'll get back to you within 3 business days. If you have any questions, please email us directly at adoptions@exampledomain.com.");
    });

});


// ================OLD CODE ATTEMPTS BELOW, re-doing because it got too mixed up here ================================  //

// Make sure we wait to attach our handlers until the DOM is fully loaded.
// $(function() {
//get form inputs when submitted
// $("#adopt-req-form").on("submit", function(event) {
//     event.preventDefault();

// $(document).ready(function () {
//     $("#adopt-req-form").submit(function(event) {
//         // console.log("DEBUGGING - form preventDefault about to run");
//         event.preventDefault(); // Prevent the form from submitting via the browser
//         // console.log("DEBUGGING - form preventDefault just ran");
//         // grab the form elements and save them in key:value pairs within an object
//         var newAdoptReq = {
//             clientName: $("#client-name").val().trim(),
//             clientEmail: $("#client-email").val().trim(),
//             clientPhone: $("#client-phone").val().trim(),
//             clientMessage: $("#client-message").val().trim(),
//             petId: $(this).data("pet-id")
//         };

//         console.log(newAdoptReq);
//         console.log("DEBUGGING - about to run AJAX");

//         $.ajax({
//             type: $(this).attr('method'),
//             url: "/api/adopt-form",
//             data: JSON.stringify(newAdoptReq)
//         }).done(function(data) {
//             // Optionally alert the user of success here...
//         }).fail(function(data) {
//             // Optionally alert the user of an error here...
//         });
//     });
// });

    // var ajaxUrl = "/api/adopt-form"

    //     // Send the POST request with the "newAdoptReq" object above as the data being sent
    //     $.ajax(ajaxUrl, {
    //         type: "POST",
    //         data: newAdoptReq,
    //         dataType: 'json',
    //         timeout: 2000
    //     }).then(
    //         function() {
    //         // console.log("Success! Added new cat to the database.");
    //         // Reload the page to get the updated list
    //         location.reload();
    //         document.getElementById("adopt-req-form").reset();
    //         alert("Thank you! Your adoption request has been received. We'll get back to you within 3 business days. If you have any questions, please email us directly at adoptions@exampledomain.com .");
    //         }
    //     );

    // export the object- send POST request to api routes file
    // $.post("/api/adopt-form", newAdoptReq,
    //     function(data) { //receives the result of the post function
    //         if(data) {
    //             // if a response is returned, meaning the POST was successful
    //             console.log(data);//console log response for testing purposes
                
    //             // var confirmDiv = $("#confirmDiv");
    //             // confirmDiv.text("Thank you! Your adoption request has been received. We'll get back to you within 3 business days. If you have any questions, please email us directly at adoptions@exampledomain.com .");

    //             alert("Thank you! Your adoption request has been received. We'll get back to you within 3 business days. If you have any questions, please email us directly at adoptions@exampledomain.com .");

    //         }
    //        else {
    //         //if there is an error and no response is returned

    //             // var confirmDiv = $("#confirmDiv");
    //             // confirmDiv.text("We're sorry, an error prevented submission of your request. Please email us directly at adoptions@exampledomain.com .");

    //             alert("We're sorry, an error prevented submission of your request. Please email us directly at adoptions@exampledomain.com .");
    //        }
            
    // });

    //Clear the form when submitting- 
    //TODO- add more efficient method, clear form command
    
    // $("#client-name").val("");
    // $("#client-email").val("");
    // $("#client-phone").val("");
    // $("#client-message").val("");
    
// });
// });

//send ajax POST request using form data in request body