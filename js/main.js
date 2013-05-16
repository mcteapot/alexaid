
jQuery(document).ready(function($) {
    // $ inside here refers to jQuery
    console.log("Document READY")
    var tempObject = $(".graphic")[0];
    TweenMax.to(tempObject, 0, {scale:0.2, opacity:0.3});
    TweenMax.to(tempObject, .4, { scale:1, opacity:1});
});