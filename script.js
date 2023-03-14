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

timeblockArr.forEach(element => {
    let row = $("<div>").addClass("row tBlock");
    let hour = $("<div>").addClass("col-1 hour").text(element);
    let text = $("<textarea>").addClass("col-10 text");
    var saveBtn = $("<button>").addClass("col-1 saveBtn").text("save");

    //append components to html
    row.append(hour, text, saveBtn);
    $(".container").append(row);
});