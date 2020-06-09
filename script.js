
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
var tenAm = nineAm.add(1, "h");
var elevenAm = tenAm.add(1, "hour");
var twelvePm = elevenAm.add(1, "hour");
var onePm = twelvePm.add(1, "hour");
var twoPm = onePm.add(1, "hour");
var threePm = twoPm.add(1, "hour");
var fourPm = threePm.add(1, "hour");
var fivePm = fourPm.add(1, "hour");
var timeBlocks = [9, 10, 11, 12, 1, 2, 3, 4, 5];

for (var i = 0; i < timeBlocks.length; i++) {
    var myValue = localStorage.getItem(timeBlocks[i]);

    $(".time" + timeBlocks[i]).val(myValue);
}

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var keyValue  = $(this).siblings(".form-control").val();
    var key = $(this).parent().data("time");

    localStorage.setItem(key, keyValue);

 
    console.log(keyValue);
    console.log(key);
    console.log(localStorage);
});


function myTime() {
    if (roundedTime.isSame(nineAm)) {
        $(".time9").addClass("present");
    } else 
    if (roundedTime.isBefore(nineAm)) {
        $(".time9").addClass("future");
    } else
    if (roundedTime.isAfter(nineAm)) {
        $(".time9").addClass("past");
    };

    if (roundedTime.isSame(tenAm)) {
        $(".time10").addClass("present");
    } else 
    if (roundedTime.isBefore(tenAm)) {
        $(".time10").addClass("future");
    } else
    if (roundedTime.isAfter(tenAm)) {
        $(".time10").addClass("past");
    };

    if (roundedTime.isSame(elevenAm)) {
        $(".time11").addClass("present");
    } else 
    if (roundedTime.isBefore(elevenAm)) {
        $(".time11").addClass("future");
    } else
    if (roundedTime.isAfter(elevenAm)) {
        $(".time11").addClass("past");
    };

    if (roundedTime.isSame(twelvePm)) {
        $(".time12").addClass("present");
    } else 
    if (roundedTime.isBefore(twelvePm)) {
        $(".time12").addClass("future");
    } else
    if (roundedTime.isAfter(twelvePm)) {
        $(".time12").addClass("past");
    };

    if (roundedTime.isSame(onePm)) {
        $(".time1").addClass("present");
    } else 
    if (roundedTime.isBefore(onePm)) {
        $(".time1").addClass("future");
    } else
    if (roundedTime.isAfter(onePm)) {
        $(".time1").addClass("past");
    };

    if (roundedTime.isSame(twoPm)) {
        $(".time2").addClass("present");
    } else 
    if (roundedTime.isBefore(twoPm)) {
        $(".time2").addClass("future");
    } else
    if (roundedTime.isAfter(twoPm)) {
        $(".time2").addClass("past");
    };

    if (roundedTime.isSame(threePm)) {
        $(".time3").addClass("present");
    } else 
    if (roundedTime.isBefore(threePm)) {
        $(".time3").addClass("future");
    } else
    if (roundedTime.isAfter(threePm)) {
        $(".time3").addClass("past");
    };

    if (roundedTime.isSame(fourPm)) {
        $(".time4").addClass("present");
    } else 
    if (roundedTime.isBefore(fourPm)) {
        $(".time4").addClass("future");
    } else
    if (roundedTime.isAfter(fourPm)) {
        $(".time4").addClass("past");
    };

    if (roundedTime.isSame(fivePm)) {
        $(".time5").addClass("present");
    } else 
    if (roundedTime.isBefore(fivePm)) {
        $(".time5").addClass("future");
    } else
    if (roundedTime.isAfter(fivePm)) {
        $(".time5").addClass("past");
    };
    

};

myTime();








