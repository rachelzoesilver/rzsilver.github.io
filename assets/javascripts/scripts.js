$(document).ready(function(){

	$("li.navitem1").hover(function() {

		if ($(this).children().last().is(":hidden")) {
			$(this).children().last().slideDown();
		} else {
			$(this).children().last().slideUp();
		}
	})


	// insert cool animation for fadeout of modalbox7

	$("#modal-overlay").click(function() {
		$("#modal-overlay").fadeOut();
		$("#modal-box").hide();
		$("#modal-box2").hide();
		$("#modal-box3").hide();
		$("#modal-box4").fadeOut();
		$("#modal-box5").fadeOut();
		$("#modal-box6").hide();
		$("#modal-box7").hide();
		$(".arrow").hide();
		$(".click").hide();
	})

	var pageContent = {rachel: ["Sushi", "345 monteray ave. oaksdlkjf", "$$$", "I loved this goddam food." ],
                  lukas: ["Burgers", "denmark", "$", "burgers mmmmmmmm"],
                  lori: ["soup", "British Columbia", "$$", "best soup of my life, very peacful environment as well"],
                  // jon: []
                  };

	$(".pin").click(function() {
		var name = $(this).attr("id")

		console.log(pageContent[name][0])

		$(".Modal-Content5 .foodname").text(pageContent[name][0])
		$(".Modal-Content5 .location").text(pageContent[name][1])
		$(".Modal-Content5 .price").text(pageContent[name][2])
		$(".Modal-Content5 .story").text(pageContent[name][3])
		$("#modal-box5").fadeIn();
		$("#modal-overlay").fadeIn();

	})

// I need to make it so that when you click on the scroll contents, the relevant pins stay, and the irrelevant pins disappear.!!

	$("input[type='checkbox']").change(function() {

		var name = $(this).attr("id");

		if (this.checked){
			$(".pin").hide();
			var className = "." + name;
			$(className).show();
		} else {
			$(".pin").show();
		}


// create a variable called name that is the id of the thing you clicked on. then we hide all the pins with class of pin. then we set variable class name which is the . (class) and the string that we got from name (which is the ID). 

	})


	var pinX = 0;
	var pinY = 0;

	var divPos = {};
	var offset = $(".img1").offset();
	console.log(offset)
	$(".img1").click(function(e){
	    divPos = {
	        left: e.pageX - offset.left,
	        top: e.pageY - offset.top
	    };


	    // these values place the post image on the page. edit to alter where it shows up.

	    pinX = divPos["left"] -10;
	    pinY = divPos["top"] -20;

	    var topPosition = divPos["top"] - 86;
	    var leftPosition = divPos["left"] - 39;

	    $("#post").css("top", topPosition)
	    $("#post").css("left", leftPosition) 
	    $("#post").show();
	    $()
	});

	// $(".img1").click(function(event) {
	// 	// console.log("test")
	// 	console.log($(this).offset().top)
	// 	$("#post").show()
	// })


	$("#post").click(function() {
		$("#modal-box3").show();
		$("#modal-overlay").fadeIn();
		$("#post").hide();
	})

	$(".pin").click(function() {
		$("#post").hide();
	})

	$("#button2").click(function() {
		$("#modal-box").show();
		$("#modal-box3").hide();
	})

	$("#button0").click(function() {
		$("#modal-box").hide();
		$("#modal-box4").show();
	})

	$("#button3").click(function() {
		$("#modal-box2").show();
		$("#modal-box3").hide();
	})

	$("#button1").click(function() {
		$("#modal-box4").show();
	})

	$("#button5").click(function() {
		$("#modal-box4").fadeOut();
		$("#modal-box2").hide();
		$("#modal-box").hide();
		$("#modal-overlay").fadeOut();

		var imgString = "<img class='added-pin' src='assets/image/pins.png' style='top: " + pinY + "px; left: " + pinX + "px;'/>"

		// creating image string which we use to append. piny and pinx variables added to the inline style tag top and left. separate with semicolon. 

		$("#map").append(imgString);
	})

	$("#question").click(function() {
		$("#modal-box6").show();
		$("#modal-overlay").fadeIn();
	})

	$("#modal-box7").click(function() {
		$("#modal-box7").hide();
		$("#modal-box8").show();
		$("#modal-box8").fadeOut();
		$("#modal-overlay").fadeOut();
		$(".arrow").hide();
		$(".click").hide();
	})

	$("#modal-box3").click(function() {
		// $("#modal-box").hide();

		})



		// cupcakes turning!!! for logo. 


	



	// $(".pin").hover(function() {
	// })





});