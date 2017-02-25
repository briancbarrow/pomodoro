

//variable to toggle on/off
var toggle = false;
//variables to set timer
var min = 25;
var countdown = min * 60 * 1000;
var placeholder = countdown;
var sec = '0' + Math.floor((countdown - (min * 60 * 1000)) / 1000);

//break variables
var breakToggle = false;
var br_min = 5;
var br = br_min * 60 * 1000;
var br_sec = Math.floor((br - (br_min * 60 * 1000)) / 1000);

////Change timer color on hover
$( ".timer-cont" ).hover(function() {
  if(toggle == false){
  $( this ).css( "color", "black" );
  $( this ).css( "border-color", "#AA0000" );
  $( this ).css( "background-color", "#FF7575" );
  }
}, function() {
  if(toggle == false){
    
  
  $( this ).css( "color", "#FFB441" );
  $( this ).css( "border-color", "#FFB441" );
  $( this ).css( "background-color", "transparent" );
  }
});

$("#countTime")[0].innerHTML = min + " : " + sec;

//Add time to Work Timer
$('.btn-timer-add').click(function() {
  min += 1;
  console.log(min);
  $("#countTime")[0].innerHTML = min + " : " + sec;
  $("#timer").html(min);
  countdown = min * 60 * 1000;
}); 

//Subtract time to Work Timer
$('.btn-timer-minus').click(function() {
  min -= 1;
  console.log(min);
  $("#countTime")[0].innerHTML = min + " : " + sec;
  $("#timer").html(min);
  countdown = min * 60 * 1000;
}); 

//Add time to Break Timer
$('.btn-break-add').click(function() {
  br_min += 1;
  $("#countTime")[0].innerHTML = min + " : " + sec;
  $("#timer-break").html(br_min);
  countdown = min * 60 * 1000;
}); 

//Subtract time to Break Timer
$('.btn-break-minus').click(function() {
  br_min -= 1;
  $("#countTime")[0].innerHTML = min + " : " + sec;
  $("#timer-break").html(br_min);
  countdown = min * 60 * 1000;
}); 

//Start/Stop on click of circle
$('.timer-cont').click(function() {
  if (toggle == false) {
    
    
    toggle = true;
    //Change color
    $( this ).css( "color", "black");
    $( this ).css( "background-color", "#35D1B7");
    var timerId = setInterval(function() {
      countdown -= 100;
      console.log(countdown);

      //Conditional to set off buzzer
      if (countdown == 0) {
        
        //buzzer
        var mp3 = 'https://www.freesound.org/people/cydon/sounds/268553/download/268553__cydon__bang-001.mp3';
        var audio = new Audio(mp3);
        audio.play();
        
        //break timer function
        if (breakToggle == false){
       countdown = br;
          breakToggle = true;
        } else {
          countdown = placeholder;
        }
      }
      min = Math.floor(countdown / (60 * 1000));
      //var sec = Math.floor(countdown - (min * 60 * 1000));  // wrong
      var sec = Math.floor((countdown - (min * 60 * 1000)) / 1000);

      //adds zero to front of single digit
      if (sec <= 9) {
        sec = '0' + sec;
      }

      if (toggle == false) {

        clearInterval(timerId);
        //Change color back to normal
        $( ".timer-cont" ).css( "color", "#FFB441");
        $( ".timer-cont" ).css( "background-color", "transparent");
        $("#countTime")[0].innerHTML = min + " : " + sec;
      } else {
        $("#countTime")[0].innerHTML = min + " : " + sec;
      }

    }, 100)
  } else {
    clearInterval(timerId);
    toggle = false;
    
  }

});



$("#timer").html(min);
$("#timer-break").html(br_min);



/*



$('#timer-add').click(function() {
  min += 1;
}; 

*/