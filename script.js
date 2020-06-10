
//This returns the formatted date and time to the header.
$("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));

//Several variables to correctly set each timeblock.
var roundedTime = moment().startOf("hour");
var nineAm = moment().startOf('day').add(9, "hours");
var tenAm = moment().startOf('day').add(10, "hours");
var elevenAm = moment().startOf('day').add(11, "hours");
var twelvePm = moment().startOf('day').add(12, "hours");
var onePm = moment().startOf('day').add(13, "hours");
var twoPm = moment().startOf('day').add(14, "hours");
var threePm = moment().startOf('day').add(15, "hours");
var fourPm = moment().startOf('day').add(16, "hours");
var fivePm = moment().startOf('day').add(17, "hours");

//An array of data-times.
var timeBlocks = [9, 10, 11, 12, 1, 2, 3, 4, 5];

//A loop to cycle through all data-times.
for (var i = 0; i < timeBlocks.length; i++) {
    var myValue = localStorage.getItem(timeBlocks[i]);


    $(".time" + timeBlocks[i]).val(myValue);
}

//Event listner set used to save to local storage using the setItem method.
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var keyValue  = $(this).siblings(".form-control").val();
    var key = $(this).parent().data("time");

    localStorage.setItem(key, keyValue);

});

//This is a series of if else statements inside of a function which handels 
//adding the appropriate class to style each timeblock.
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






