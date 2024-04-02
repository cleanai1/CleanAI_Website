// ========= Navbar ===========

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

$(document).ready(function () {
    // $(".nav-link").click(function (event) {
    //     event.preventDefault();
    //     var target = $(this).attr("href");
    //     $("html, body").animate({
    //         scrollTop: $(target).offset().top - 83 // Adjust according to the height of your fixed header
    //     }, 800);
    //     $(".nav-link.selected").removeClass("selected");
    //     $(this).addClass("selected");
    // });

    // Add class to fix header when scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 83) { // Adjust according to the height of your header
            $(".header").addClass("fixed-header");
        } else {
            $(".header").removeClass("fixed-header");
        }
    });
});
