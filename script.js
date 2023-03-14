//Current time & date then display
let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#currentDay").text(currentTime);

// Array for timeblock
var timeblockArr = [
    "8am",
    "9am",
    "10am",
    "11am",
    "12pm",
    "1pm",
    "2pm",
    "3pm",
    "4pm",
    "5pm",
    "6pm"];

timeblockArr.forEach((time, index) => {
    let row = $("<div>").addClass("row tBlock");
    let hour = $("<div>").addClass("col-1 hour").text(time);
    let text = $("<textarea>").addClass("col-10 text");
    var saveBtn = $("<button>").addClass("col-1 saveBtn").text("save");

    //append components to html
    row.append(hour, text, saveBtn);
    $(".container").append(row);


    //Timecheck functionality
    let currentTime = moment().hour();
    let tBlockTime = index +8;
    console.log ("index is " +index , "and tBlockTime is" , tBlockTime)

    //add colour class dependent on time
    if (currentTime > tBlockTime) {
        text.addClass("past");
    } else if (currentTime === tBlockTime) {
        text.addClass("present");
    } else {
        text.addClass("future");
    }

});


