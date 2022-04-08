console.clear();
var w = window.innerWidth;
var size = w > 992 ? "big" : "small";
var controller = new ScrollMagic.Controller();
var snaptext = document.getElementById("snaptext")
var height_snaptext = (snaptext.clientHeight)/2
if (size === "big") {
    splitScroll();
}




function splitScroll() {
    controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        duration: height_snaptext*0.7,
        triggerElement: '#snaplang',
        triggerHook: 0,
        
    })
        .setPin('#medlang')
        .setClassToggle('.container.medlang','show')
        // .addIndicators()
        .addTo(controller);
        scene.offset(360)
    
    var scene2 = new ScrollMagic.Scene({
        duration: height_snaptext*0.6,
        triggerElement: '#snapit',
        triggerHook: 0
    })
        .setPin('#medtech')
        .setClassToggle('.container.medtech','show')
        // .addIndicators()
        .addTo(controller);
        scene2.offset(400)

}



function sizeIt() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            console.log("The screen is now small - ScrollMagic has been destroyed by aliens.");
            controller.destroy(true);
        } else {
            console.log("The screen is now large - ScrollMagic is active.");
            splitScroll();
        }
    }
}

window.addEventListener("scroll", sizeIt);

// window.addEventListener("resize", sizeIt);
// var trig = document.getElementsByClassName("texttech");
// // window.onscroll = function () { rev() };
// // Get the header

// var sttarg = document.getElementById("medlang");
// var ndtarg = document.getElementById("medtech");
// // Get the offset position of the navbar
// var trig_top = trig.offsetTop;

// function isInViewport(e) {
//     e = trig
//     const rect = e.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }








// document.addEventListener('scroll', function () {
//     // const messageText = isInViewport(trig)
    
//     if (isInViewport(trig)) {
//         ndtarg.style.display = "";
//         sttarg.style.display = "none";
//     } else {
//         ndtarg.style.display = "none";
//     }
// },{
//     passive: true
// });

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function rev() {
//   if ( window.pageYOffset >= trig_top ) {
//     ndtarg.style.display="";
//     sttarg.style.display="none";
//   } else {
//     ndtarg.style.display="none";

//   }
// }
// &&(window.pageYOffset < sect_top)
