$(document).ready(function() {
	$('.hideBox').hide().delay(1200).fadeIn(800);

	$('li')
		.on("mouseenter", function(){
			$(this).css({
				opacity: 0.25
				});
			})
		.on("mouseleave", function(){
			$(this).css({
				opacity: 1
			});
		});

	$('li').on("click", function(){
		$(this).css("background-color", "green");
	});

	$('li').click(function(event){
		return "Click";
	});
	$('li').click(function(event){
		$(this).html(event.result);
	});

	$('header').click(function(){
		var color = $(this).css("background-color");
		$("#result").html("That is the <span header" + color + ";'>" + color + "</span>.");
	})

});

