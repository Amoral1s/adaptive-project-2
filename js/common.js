$(document).ready(function() {
  $(".toggle1").click(function() {
 $(".hidden1").addClass('active');
 $(".hidden2").removeClass('active');
 $(".hidden3").removeClass('active');
 $(".hidden4").removeClass('active');
 $(".hidden5").removeClass('active');
 $(".toggle1").addClass('active-t');
 $(".toggle2").removeClass('active-t');
 $(".toggle3").removeClass('active-t');
 $(".toggle4").removeClass('active-t');
 $(".toggle5").removeClass('active-t');
});
$(".toggle2").click(function() {
  $(".hidden2").addClass('active');
  $(".hidden1").removeClass('active');
  $(".hidden3").removeClass('active');
  $(".hidden4").removeClass('active');
  $(".hidden5").removeClass('active');
  $(".toggle2").addClass('active-t');
  $(".toggle1").removeClass('active-t');
  $(".toggle3").removeClass('active-t');
  $(".toggle4").removeClass('active-t');
  $(".toggle5").removeClass('active-t');
 });
$(".toggle3").click(function() {
  $(".hidden3").addClass('active');
  $(".hidden1").removeClass('active');
  $(".hidden2").removeClass('active');
  $(".hidden4").removeClass('active');
  $(".hidden5").removeClass('active');
  $(".toggle3").addClass('active-t');
  $(".toggle1").removeClass('active-t');
  $(".toggle2").removeClass('active-t');
  $(".toggle4").removeClass('active-t');
  $(".toggle5").removeClass('active-t');
 });
$(".toggle4").click(function() {
  $(".hidden4").addClass('active');
  $(".hidden1").removeClass('active');
  $(".hidden3").removeClass('active');
  $(".hidden2").removeClass('active');
  $(".hidden5").removeClass('active');
  $(".toggle4").addClass('active-t');
  $(".toggle1").removeClass('active-t');
  $(".toggle3").removeClass('active-t');
  $(".toggle2").removeClass('active-t');
  $(".toggle5").removeClass('active-t');
 });
$(".toggle5").click(function() {
  $(".hidden5").addClass('active');
  $(".hidden1").removeClass('active');
  $(".hidden3").removeClass('active');
  $(".hidden4").removeClass('active');
  $(".hidden2").removeClass('active');
  $(".toggle5").addClass('active-t');
  $(".toggle1").removeClass('active-t');
  $(".toggle3").removeClass('active-t');
  $(".toggle4").removeClass('active-t');
  $(".toggle2").removeClass('active-t');
 });
 

});

$(document).ready(function(){
    
  $('#drop').mouseenter(function(){
                      $(this).append($('.dropdown'));
                     $('.dropdown').slideDown(200);
                     });
  $('#drop, .dropdown').mouseleave(function(){
                   
 $('.dropdown').css('display','none');
 });
 $(function () {    
  $('#drop').hover(function () {
     clearTimeout($.data(this, 'timer'));
     $('.dropdown', this).stop(true, true).slideDown(200);
  }, function () {
    $.data(this, 'timer', setTimeout($.proxy(function() {
      $('.dropdown', this).stop(true, true).slideUp(200);
    }, this), 200));
  });
});
                      
      
$(function(){
  $('.sub').click(function(){
    $(".popup").addClass('popup-active');
  });
});  
$(function(){
  $('.popup-menu-close').click(function(){
    $(".popup").removeClass('popup-active');
  });
});  

$(".burger").click(function() {
	if ($(".burger-menu").is(":visible")) {
		$(".burger-menu").slideUp(600);
	} else {
		$(".burger-menu").slideDown(600);
	};
});

$(".ethap1").click(function() {
	if ($(".ethap-menu-1").is(":visible")) {
		$(".ethap-menu-1").slideUp(600);
	} else {
		$(".ethap-menu-1").slideDown(600);
	};
});
$(".ethap2").click(function() {
	if ($(".ethap-menu-2").is(":visible")) {
		$(".ethap-menu-2").slideUp(600);
	} else {
		$(".ethap-menu-2").slideDown(600);
	};
});
$(".ethap3").click(function() {
	if ($(".ethap-menu-3").is(":visible")) {
		$(".ethap-menu-3").slideUp(600);
	} else {
		$(".ethap-menu-3").slideDown(600);
	};
});
$(".ethap4").click(function() {
	if ($(".ethap-menu-4").is(":visible")) {
		$(".ethap-menu-4").slideUp(600);
	} else {
		$(".ethap-menu-4").slideDown(600);
	};
});
$(".ethap5").click(function() {
	if ($(".ethap-menu-5").is(":visible")) {
		$(".ethap-menu-5").slideUp(600);
	} else {
		$(".ethap-menu-5").slideDown(600);
	};
});
$(".more1").click(function() {
	if ($(".none1").is(":visible")) {
		$(".none1").slideUp(600);
	} else {
		$(".none1").slideDown(600);
	};
});
$(".more2").click(function() {
	if ($(".none2").is(":visible")) {
		$(".none2").slideUp(600);
	} else {
		$(".none2").slideDown(600);
	};
});
$(".more3").click(function() {
	if ($(".none3").is(":visible")) {
		$(".none3").slideUp(600);
	} else {
		$(".none3").slideDown(600);
	};
});
$(".more4").click(function() {
	if ($(".none4").is(":visible")) {
		$(".none4").slideUp(600);
	} else {
		$(".none4").slideDown(600);
	};
});
$(".more5").click(function() {
	if ($(".none5").is(":visible")) {
		$(".none5").slideUp(600);
	} else {
		$(".none5").slideDown(600);
	};
});
$(".more6").click(function() {
	if ($(".none6").is(":visible")) {
		$(".none6").slideUp(600);
	} else {
		$(".none6").slideDown(600);
	};
});
$(".more7").click(function() {
	if ($(".none7").is(":visible")) {
		$(".none7").slideUp(600);
	} else {
		$(".none7").slideDown(600);
	};
});
$(".more8").click(function() {
	if ($(".none8").is(":visible")) {
		$(".none8").slideUp(600);
	} else {
		$(".none8").slideDown(600);
	};
});
$(".more9").click(function() {
	if ($(".none9").is(":visible")) {
		$(".none9").slideUp(600);
	} else {
		$(".none9").slideDown(600);
	};
});
  });