//Checks initial window size & applies relevant classes if necessary
$(document).ready(function () {
  var WinWidth = $(window).width();
  if (WinWidth < 640) {
    $("#prev").removeClass( "uk-margin-medium-top" );
    $("#next").addClass("uk-margin-small-bottom");
    $("#prev").addClass("uk-margin-small-top");
  }
});

//Adds or subtracts classes as window is resized
$(window).resize(function(event){
  var WinWidth = $(window).width();
  if (WinWidth < 640) {
    $("#prev").removeClass( "uk-margin-medium-top" );
    $("#next").addClass("uk-margin-small-bottom");
    $("#prev").addClass("uk-margin-small-top");
  } else {
    $("#prev").addClass("uk-margin-medium-top");
    $("#next").removeClass("uk-margin-small-bottom");
  }
});
