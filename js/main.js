
jQuery(document).ready(function($) {
    // $ inside here refers to jQuery

    // set links
    $('#event-location.address').click(function() {
 		window.open('http://maps.google.com/?q=8714 W Washington Blvd Culver City, CA 90232');
 		console.log("OPEN");
  	});

    console.log("Document READY")
    var tempObject = $(".graphic")[0];
    TweenMax.from(tempObject, .5, {scale:0.2, opacity:0.3});

    var badgeObject = $(".event-health-badge")[0];
    TweenMax.to(badgeObject, 1, {transformMatrix:{scaleX:2, scaleY:2, rotation:30}});

   //TweenMax.to(badgeObject, -1, {rotation:"360", ease:Linear.easeNone, repeat:10});
    spawnParticles();

   	function spawnParticles(){
   		for(var i = 0; i<100; i++){
    		var ptc = $("<div class='particle'></div>").appendTo('body');
    		var top = Math.floor(Math.random()*window.screen.availHeight);
    		var left = Math.floor(Math.random()*window.screen.availWidth);
    		var opacity = Math.random();
    		// $(ptc).css({position: "absolute", width: "4px", height: "4px",top:top, left: left});
    		var targetTop = top - 800;
    		var floatDuration = 150000 - 120000*(opacity);
    		$(ptc).css({top:top, left: left, opacity: opacity}).animate({top: targetTop}, floatDuration, "linear");
   		}
    }
});