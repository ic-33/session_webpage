console.clear();
var w = window.innerWidth;
var size = w > 992 ? "big" : "small";
var controller = new ScrollMagic.Controller();
var snaptext = document.getElementById("snaptext")
var apnd_text_parent = document.getElementById("texttech")
var apnd_vid_parent = document.getElementsByClassName("med")[0]
var node = document.getElementById("medtech")
var apnd_text_parent2 = document.getElementById("textlang")
var node2 = document.getElementById("medlang")

if (size === "big") {
    splitScroll();
} else {
    apnd_text_parent.insertAdjacentElement('afterend',node);
    apnd_text_parent2.insertAdjacentElement('afterend',node2);
}




function splitScroll() {
    var vid1 = document.getElementById("vid1");
    var vid2 = document.getElementById("vid2");
    controller = new ScrollMagic.Controller();

    var scene = new ScrollMagic.Scene({
        duration: "65%",
        triggerElement: '#thirdsec',
        triggerHook: 0.2
        
    })
        .setPin('#medlang')
        .setClassToggle('.medlang','show')
        // .addIndicators()
        .addTo(controller)
        .on("enter", function(){
            vid1.setAttribute("autoplay", "none")
            vid1.setAttribute("loop", "none")
            vid1.load()
            vid1.play()
        })
        .on("leave", function(){
            vid1.load()
            vid1.play()
        })
        scene.offset(120)
        
        
        
    
    var scene2 = new ScrollMagic.Scene({
        duration: "100%",
        triggerElement: '.textlang',
        triggerHook: 0.2
    })
        .setPin('#medtech')
        
        .setClassToggle('.medtech','show')
        // .addIndicators()
        .addTo(controller);
        scene2.on("enter", function(){
            vid2.setAttribute("autoplay", "false")
            vid2.setAttribute("loop", "false")
            vid2.load()
            vid2.play()
        })
        scene2.on("leave", function(){
            vid2.load()
            vid2.play()
        })

        scene2.offset(300)

}



function sizeIt() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            controller.destroy(true);
        } else {
            splitScroll();
        }
    }
}
function resizeit() {
    w = window.innerWidth;
    var newSize = w > 992 ? "big" : "small";
    if (newSize != size) {
        size = newSize;
        if (newSize === "small") {
            controller.destroy(true);
            apnd_text_parent.insertAdjacentElement('afterend',node);
            apnd_text_parent2.insertAdjacentElement('afterend',node2);
        } else {
            apnd_vid_parent.insertAdjacentElement('beforeend',node2);
            apnd_vid_parent.insertAdjacentElement('beforeend',node);
            splitScroll();
        }
    }
}



window.addEventListener("scroll", sizeIt);
window.addEventListener("resize", resizeit);
