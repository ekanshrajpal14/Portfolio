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

on_Click_Cross_var.forEach((e) => {
    e.addEventListener("click", function () {
        mobileNav.classList.remove('open');

    });
})


function on_Click_Cross() {
    mobileNav.classList.remove('open');
}


















var box_temp_card = document.querySelectorAll(".box_temp_card");
box_temp_card = [...box_temp_card];
box_temp_card.forEach((e) => {
    e.addEventListener("click", function (elm) {
        var id = this.getAttribute('data-name');
        if (id.length !== "") {
            window.location.assign(id)
        }
        
    })
})

window.addEventListener("load", function () {
    console.log(this.innerWidth);
    if (this.innerWidth < 600) {
        for (let i = 1; i <= 13; i++) {

            if (i % 2 !== 0) {
                var saver_even_odd = document.querySelector(`.box_number_${i}`);
                saver_even_odd.childNodes[3].style.left = "-25%"
                saver_even_odd.childNodes[3].style.bottom = "5%"
                saver_even_odd.childNodes[3].style.textAlign = "left"

            }
            else if (i % 2 == 0) {
                var saver_even = document.querySelector(`.box_number_${i}`);
                saver_even.childNodes[3].style.left = "70%"
                saver_even.childNodes[3].style.bottom = "5%"
                saver_even.childNodes[3].style.textAlign = "right"
            }

        }
        changefavicon()
    }
})



window.addEventListener("load", function () {
    if (innerWidth > 600) {
        document.querySelector("header").addEventListener("mousemove", function (dets) {

            var valueX = Math.floor((dets.screenX) / 13);
            // console.log(valueX);
            document.querySelector("header").style.clipPath = `polygon(0 0, 100% 0, 100% 100%, ${valueX}% 80%, 0 100%)`
        })
        document.querySelector("header").addEventListener("mouseleave", function () {
            document.querySelector("header").style.clipPath = `polygon(0 0, 100% 0, 100% 100%, 70% 80%, 0 100%)`

        })
    }
})

var favicon = document.querySelector("#favicon")

function changefavicon() {
    favicon.setAttribute("href", "./favicon_phone.png")
    console.log(favicon.attributes.href);
}
