
jQuery(document).ready(function($) {
    // $ inside here refers to jQuery

    // set links
    $('#event-location.address').click(function() {
 		window.open('http://maps.google.com/?q=8714 W Washington Blvd Culver City, CA 90232');
 		console.log("OPEN");
  	});

    console.log("Document READY")
    var tempObject = $(".graphic")[0];
    TweenMax.to(tempObject, 0, {scale:0.2, opacity:0.3});
    TweenMax.to(tempObject, .4, { scale:1, opacity:1});

    var badgeObject = $(".event-health-badge")[0];
    TweenMax.to(badgeObject, 1, {transformMatrix:{scaleX:2, scaleY:2, rotation:30}});

   //TweenMax.to(badgeObject, -1, {rotation:"360", ease:Linear.easeNone, repeat:10});
});