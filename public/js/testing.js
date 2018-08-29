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
});