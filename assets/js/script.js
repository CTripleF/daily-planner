//display date and time 
var todaysDate = moment().format("DD MMM, YYYY  hh:mm");
console.log(todaysDate)

$("p#currentDay").text(todaysDate);

//use current military time to set description backround colors 
// current hour, past grey, future green
var currentHour = moment().hour();
$('.description')
  .each(function(){
    var val = parseInt($(this).prop('id'));
    if(val > currentHour){
      $(this).addClass('future');
    }
    else if(val < currentHour){
      $(this).addClass('past');
    }
    else{
      $(this).addClass('present');
    }
  }
);


//onclick event listener for save buttons
//saving currenet info in description textarea with specific id
$(".saveBtn").on("click", function (){
  var thisBtn = $(this);
  var parent = thisBtn.parent();
  var textArea = parent.find("textarea");
  var descValue = textArea.val();
  var key = textArea.attr("id");
  console.log(parent)
  localStorage.setItem(key, descValue);
});


for (i=8; i<18; i++){
  $("#"+ i).val(localStorage.getItem(i));
}