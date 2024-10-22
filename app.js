// import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});

function firstpage(){
    var tl = gsap.timeline();
    tl.from(".nav",{
        y:'-10',
        opacity:0,
        duration:1.5,
        ease: Expo.easeInOut
    })
    .to(".boundingelem",{
        y:'0',
        duration:1.5,
        delay:-1,
        ease: Expo.easeInOut,
        stagger: .2
    })
    .from(".herofooter",{
        y:-10,
        opacity:0,
        delay:-1,
        duration:1.5,
        ease: Expo.easeInOut
    })
}

var timeout;
function circleskew(){
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove",function(dets){
        clearTimeout(timeout);
        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xscale = gsap.utils.clamp(.8,1.2,xdiff);
        yscale = gsap.utils.clamp(.8,1.2,ydiff);

        xprev = dets.clientX;
        yprev = dets.clientY;

        circleMouse(xscale,yscale);
        timeout = setTimeout(function(){
            document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(1,1)`;

        },100);
        
    })
}
function circleMouse(xscale,yscale){
    
    window.addEventListener("mousemove",function(dets){
        document.querySelector(".minicircle").style.transform = `translate(${dets.clientX}px,${dets.clientY}px) scale(${xscale},${yscale})`;
    })
}

circleskew();
firstpage();
circleMouse();


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diff = 0;
    var r1 = 0;
    var difrot = 0;
    elem.addEventListener("mouseenter", function(){
        elem.childNodes[1].style.opacity=1;
    })
    elem.addEventListener("mouseleave", function(){
        elem.childNodes[1].style.opacity=0;
    })
    elem.addEventListener("mousemove",function(dets){
        var diff = (dets.clientY - elem.getBoundingClientRect().top);
        diff = dets.clientX - rotate;
        rotate = dets.clientX;
        difrot = diff;
        
        
        gsap.to(elem.querySelector("img"),{
            // opacity:1,
            ease: Power1,
            top : diff,
            left : dets.clientX,
            rotate:gsap.utils.clamp(-20,20,difrot*0.5),
        })
    })
    // console.log(elem);
    
})
// var elem1 = document.querySelectorAll(".elem");
// var elem1img = document.querySelector(".elem img");

// elem1.forEach(function(val){
//     // console.log(val.childNodes[1]);
//     val.addEventListener("mouseenter", function(){
//         val.childNodes[1].style.opacity=1;
//     })
//     val.addEventListener("mouseleave", function(){
//         val.childNodes[1].style.opacity=0;
//     })
//     val.addEventListener("mousemove", function(dets){
//         var diff = dets.y-val.getBoundingClientRect().top;
//         val.childNodes[1].style.transform = `translateY(${diff}px)`
//         val.childNodes[1].style.left=dets.x+"px";
//         val.childNodes[1].style.top=dets.diff+"px";
//     })
// })
