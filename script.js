
//use moment.js to incorporate and format date and time
//current day and time must be appear in the jumbotron
//hour must start at 9.
//statements to handle if hour is past, present or future.
    //might be able to write code to handle each hour in one code???
//choose which method to use to get items from local storage. getItem() appears the easiest.
//event listner for save button

$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

var roundedTime = moment().startOf("hour");
var nineAm = moment().startOf('day').add(9, "hours");




function myTime() {
    if (roundedTime.isSame(nineAm)) {
        $(".time9").addClass("present");
    } else 
    if (roundedTime.isBefore(nineAm)) {
        $(".time9").addClass("future");
    } else
    if (roundedTime.isAfter(nineAm)) {
        $(".time9").addClass("past");
    }

};

myTime();





