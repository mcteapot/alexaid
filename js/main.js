
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
    prepopulateParticles();

	function emitNewParticle(){

		emitParticle(parseInt($('body').height()) + 10, getRandomX );
	}

   	function prepopulateParticles(){
   		for(var i = 0; i<100; i++){
			var top = Math.floor(Math.random()*parseInt($('body').height()) );
   			emitParticle(top, getRandomX);
   		}
    }

    function getRandomX(){
		return Math.floor(Math.random()*parseInt($('body').width()) - 20);
    }
    function emitParticle(top, left){
		var ptc = $("<div class='particle'></div>").appendTo('body');
		var opacity = Math.random();
		// $(ptc).css({position: "absolute", width: "4px", height: "4px",top:top, left: left});
		var targetTop = top - 800;
		var distanceRatio = top / parseInt($('body').height());
		var floatDuration = (100000 - 80000*(opacity)) * distanceRatio;
		$(ptc).css({top:top, left: left, opacity: opacity}).animate({top: 10}, floatDuration, "linear", function(){ 
			$(this).remove(); 
			emitNewParticle();
		});
    }
});