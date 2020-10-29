/* PSEUDO CODE LIFE
when the user loads the page the current date should appear on top of calender 


when the user scrolls down, they are presented with time blocks for standard business hours 9-5

the time blocks are color coded as follows:
    past- grey
    present- red
    future- green

user can click into the time blocks and type in data
    user then clicks the save button 

    data input for that event is saved into local storage drive

    when the page is refreshed the calender is updated with recent information changes

*/

// use moment js for math calculation for determining time


$(document).ready(function () {


    //VARIABLES

    var currentTime = moment().format("MMMM Do YYYY, H:mm:ss a");
    var currentHour = moment().hour();
    var currentDay = moment().format("MMMM Do, YYYY");


    //display current date and time in the subheading
    currentDay = moment().format("MMMM Do, YYYY");
    $("#currentDay").text("Today's Date: " + currentDay);



    //on click on save button and use local storage to save data
    $(".saveBtn").on("click", function () {
        var textArea = $(this).attr("data-value");
        var userInput = $("#" + textArea).val();
        localStorage.setItem("#" + textArea, userInput);

    });

    


    // loops through the id array of times and grabs data from local storage 
    let timeBlock = ["#9am", "#10am", "#11am", "#12pm", "#1pm", "#2pm", "#3pm", "#4pm", "#5pm"];
    let milTime = [9,10,11,12,13,14,15,16,17]
    for (let i = 0; i < timeBlock.length; i++) {
        savedEvent = $(".saved-event");
        if (localStorage.getItem(timeBlock[i])) {
            $(timeBlock[i]).val(localStorage.getItem(timeBlock[i]))
        };
    };


    //changing style block color based on time of day
    function hourStyle() {
        var currentHour = moment().hour();
        //loop over time blocks
        for (let i = 0; i < timeBlock.length; i++) {
            
            //check if time is present
            if (milTime[i] === currentHour) {
                $(timeBlock[i]).addClass("present");

            } 
            //check if time is past
            else if(milTime[i] >= currentHour) {
                $(timeBlock[i]).addClass("future");
            }
            //check if time is future
            else {
                $(timeBlock[i]).addClass("past");
            };
            
        }     
        
    };
    hourStyle();

});