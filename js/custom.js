var clock;

$(document).ready(function() {

    $('#start').click(function(e) {
      $('#welcome').fadeOut(duration = 1000);
      setTimeout(function() { $('#challenge').fadeIn(duration = 1000); }, 900);
      
      var count = 0;
      var hotSauces = [
        ["Secret Aardvark", "100"], 
        ["Hot Ones Fiery Chipotle", "200"], 
        ["Blair's Mega Death", "300"]
      ];
  
      $('#hotSauce').html(hotSauces[count][0]);
      $('#scovilles').html(hotSauces[count][1] + " Scoville Units");
  
      for(var i = 0; i < hotSauces.length; i++){
        clock = new FlipClock($('.clock'), 5, {
          clockFace: 'MinuteCounter',
          autoStart: true,
          countdown: true,
          callbacks: {
              stop: function() {
                  setTimeout(function(){
                    clock.setTime(5);
                    clock.start();
                    // This is only += 0.5 because it's running twice for some reason.
                    count += 0.5;
                    $('#hotSauce').html(hotSauces[count][0]);
                    $('#scovilles').html(hotSauces[count][1] + " Scoville Units");
                  }, 1000);
              }
          }
        });
      }
              // clock.start();
    });

    
});