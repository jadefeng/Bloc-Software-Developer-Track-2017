 var animatePoints = function() {

     var points = document.getElementsByClassName('point');

     console.log(points)

     var revealPoint = function(i) {
        console.log("revealPoint is geting called", points[i])
         points[i].style.opacity = 1;
         points[i].style.transform = "scaleX(1) translateY(0)";
         points[i].style.msTransform = "scaleX(1) translateY(0)";
         points[i].style.WebkitTransform = "scaleX(1) translateY(0)";

     }

     for (var i = 0; i < points.length; i++) {
        revealPoint(i);
     }
 
 };

// animatePoints();
