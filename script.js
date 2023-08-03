$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        appendDots: '.slider-dots',
        dotsClass: 'dots',
        autoplay: true,
        autoplaySpeed: 1000,
        infinite: true,
        speed: 1000,

    });


    let hamberger = document.querySelector('.hamberger');
    let times = document.querySelector('.times');
    let mobileNav = document.querySelector('.mobile-nav');

    hamberger.addEventListener('click', function () {
        mobileNav.classList.add('open');
    });

    times.addEventListener('click', function () {
        mobileNav.classList.remove('open');
    });

    
    

});
let mobileNav = document.querySelector('.mobile-nav');


let on_Click_Cross_var = document.querySelectorAll(".on_Click_Cross");

on_Click_Cross_var = [...on_Click_Cross_var];

on_Click_Cross_var.forEach((e)=>{
    e.addEventListener("click",function(){
        mobileNav.classList.remove('open');

    });
})


function on_Click_Cross() {
    mobileNav.classList.remove('open');
}
// var gsapani = gsap.to(".all-box", {
//     x: "-570vw",
//     duration: 50,
//     ease: "none",

//     repeat: -1
// })

// var valuegsap = 0;
// var allbox = document.querySelectorAll(".all-box");
// allbox = [...allbox];


// container.forEach(container1 => {

//     container1.addEventListener("mousemove", (rotate) => {
//         var d = rotate.currentTarget
//         const card = d.querySelector(".card");

//         let x = (innerWidth / 2 - rotate.pageX) / 15;
//         let y = (innerHeight / 2 - rotate.pageY) / 15;

//         //   console.log(rotate.currentTarget);

//         card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
//     });
// })

// allbox.forEach(dets => {
//     dets.addEventListener("mousemove", function (rotate) {
//         gsapani.pause();
//         var d = rotate.currentTarget;
//         var card = d.querySelector("card");
//         let x = (innerWidth / 2 - rotate.pageX) / 15;
//         let y = (innerHeight / 2 - rotate.pageY) / 15;



//         card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
//     })
//     dets.addEventListener("mouseleave", function (det) {
//         gsapani.resume();
//         // document.querySelector(".all-box").style.transform = "rotateY(0deg) rotateX(0deg)";

//     })
// })
var worktext = document.querySelector("#worktext")
var Xsaver = 0
var Ysaver = 0
// document.querySelector("#page7").addEventListener("mousemove", (e) => {

//     var Xval = Math.floor((e.screenX) / 10);
//     var XFinal = Xval - 80;
//     XFinal = (-XFinal)
//     var Yval = Math.floor((e.y) / 7);
//     // console.log(e.offsetY);
//     var YFinal = (Yval) - 55;
//     YFinal = -(YFinal)
//     Xsaver = XFinal;
//     Ysaver = YFinal;


//     worktext.style.textShadow = `${XFinal}px ${YFinal}px 10px grey`

// })
// document.querySelector("#page7").addEventListener("mouseleave", () => {
//     worktext.style.textShadow = `${Xsaver}px ${Ysaver}px 10px grey`


// })











// allbox.addEventListener("mousemove", (rotate) => {

// });


const container = document.querySelectorAll(".box_container");
// const card = document.querySelector(".card");
// // const title = document.querySelector(".title");
// // const santa = document.querySelector(".santa");
// const tree = document.querySelector(".tree");

container.forEach((e)=>{
    e.addEventListener("mousemove",(r)=>{
        var d= r.currentTarget;
        var card = d.querySelector(".card_3d");
        
        let x = (innerWidth / 2 - r.x) / 15;
            let y = (innerHeight / 2 - r.y) /20;
        
            console.log(r);
            card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";

    })
})

// function runme() {

//     container.forEach(container1 => {

//         container1.addEventListener("mousemove", (rotate) => {
//             var d = rotate.currentTarget
//             const card = d.querySelector(".card");

//             let x = (innerWidth / 2 - rotate.pageX) / 15;
//             let y = (innerHeight / 2 - rotate.pageY) / 15;
//             console.log(y);
//             //   console.log(rotate.currentTarget);

//             card.style.transform = "rotateY(" + x + "deg) rotateX(" + y + "deg)";
//         });
   

//       //card effects on mouse over the card
//       container1.addEventListener("mouseover", () => {
//         //   title.style.transform = "translate3d(0, 0, 160px)";
//         //   santa.style.transform = "translate3d(0, 0, 220px)";
//         //   tree.style.transform = "translate3d(0, 0, 120px)";
//           var d = rotate.currentTarget
//           const card = d.querySelector(".card");

//           card.style.transition = "all 0.1s ease";
//       });

//       //card back to normal when mouse out
//       container1.addEventListener("mouseout", () => {
//           card.style.transform = "rotateY(0deg) rotateX(0deg)";
//           card.style.transition = "all 0.5s ease";
//         //   title.style.transform = "translate3d(0, 0, 0)";
//         //   santa.style.transform = "translate3d(0, 0, 0)";
//         //   tree.style.transform = "translate3d(0, 0, 0)";
//       });
//     })


// }
// runme()








var box_temp_card = document.querySelectorAll(".box_temp_card");
box_temp_card= [...box_temp_card];
box_temp_card.forEach((e)=>{
    e.addEventListener("click",function(elm){
        var id = this.getAttribute('data-name')
        if(id.length !== ""){
            window.location.assign(id)
        }
    })
})