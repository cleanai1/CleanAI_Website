const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const dropdownLinks = document.querySelectorAll(".services-dropdown > .nav-link");

hamburger.addEventListener("click", toggleMobileMenu);
dropdownLinks.forEach(link => link.addEventListener("click", handleDropdownClick));

function toggleMobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function handleDropdownClick(event) {
    event.preventDefault();
    const dropdownContent = this.nextElementSibling;
    const isOpen = dropdownContent.classList.contains("active");

    closeDropdowns();

    if (!isOpen) {
        dropdownContent.classList.add("active");
    }
}

function closeDropdowns() {
    const activeDropdowns = document.querySelectorAll(".dropdown-content.active");
    activeDropdowns.forEach(dropdown => dropdown.classList.remove("active"));
}


// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    var scrollToTopBtn = document.getElementById('scrollToTopBtn');

    // Show the button when the user scrolls down 20px from the top of the document
    window.onscroll = function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    };

    // Scroll to the top when the button is clicked
    scrollToTopBtn.onclick = function (e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
});
// script.js

window.addEventListener('load', function () {
    const loader = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');

    // Hide loader
    loader.style.display = 'none';

    // Show content
    content.style.display = 'block';
});


document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll("img[data-srcset]");
    images.forEach(img => {
        img.srcset = img.dataset.srcset;
        img.removeAttribute('data-srcset');
    });
});

// ===================================
//     Making A Animation 
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    const homeContent = document.querySelector('.home-content');
    const homeProfile = document.querySelector('.home-profile');



    // Toggle animation classes based on scroll position
    window.addEventListener('scroll', () => {
        if (isInViewport(homeContent)) {
            homeContent.classList.add('animate');
        } else {
            homeContent.classList.remove('animate');
        }
        if (isInViewport(homeProfile)) {
            homeProfile.classList.add('animate');
        } else {
            homeProfile.classList.remove('animate');
        }
    });

    // Helper function to check if element is in viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }
});



window.sr = ScrollReveal({ reset: false });
sr.reveal('.home-profile', { duration: 3000 });

sr.reveal('.home-content', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.analytics-contain', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});


sr.reveal('.analytics-img', { duration: 3000 });

sr.reveal('.our-services-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.our-services-column', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.howitwork-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.image-container-img', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.p', { duration: 3000 });
sr.reveal('.how-works-btn', { duration: 3000 });

sr.reveal('.aboutus-content-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.aboutus-content-p', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.aboutus-btn', { duration: 3000 });
sr.reveal('.aboutus-column', { duration: 3000 });

sr.reveal('.Industries-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.Industries-column-1', {
    delay: 25,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.Industries-column-2', {
    delay: 50,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.Industries-column-3', {
    delay: 75,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.Industries-column-4', {
    delay: 100,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.Industries-column-5', {
    delay: 125,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.yourwork-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.howitwork-img-ani', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.yourwork-p1', {
    delay: 25,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.yourwork-p2', {
    delay: 50,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.yourwork-p3', {
    delay: 75,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.yourwork-p4', {
    delay: 100,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.yourwork-p5', {
    delay: 125,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.yourwork-p6', {
    delay: 150,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.learn-more', { duration: 3000 });

// ======================================
//     Facility Services Animation
// ======================================

sr.reveal('.fm-services-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});

sr.reveal('.fm-services-card-1', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-2', {
    delay: 25,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-3', {
    delay: 50,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-4', {
    delay: 75,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-5', {
    delay: 100,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-6', {
    delay: 125,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-7', {
    delay: 150,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-8', {
    delay: 175,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-9', {
    delay: 200,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-10', {
    delay: 225,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-11', {
    delay: 250,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
// Mobile view

sr.reveal('.fm-services-card-mobile-1', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-3', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-4', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-5', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-6', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-7', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-8', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-9', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-10', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.fm-services-card-mobile-11', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.cost-h2', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.cost-column-1', {
    delay: 150,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.cost-img-ani', { duration: 3000 });

sr.reveal('.template-col', {
    delay: 20,
    duration: 1000,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: false
});
sr.reveal('.template-column-img', { duration: 3000 });
// sr.reveal('.aboutus-column', {
//     delay: 20,
//     duration: 1000,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",
//     reset: false
// });


// sr.reveal('.home-content', {
//     delay: 20,
//     duration: 1000,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",
//     reset: false
// });

// sr.reveal('.home-profile', {
//     delay: 1000,
//     duration: 1000,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",
//     reset: false
// });
// ScrollReveal().reveal('.home-content', {
//     delay: 200,
//     origin: 'left',
//     distance: '50px',
//     easing: 'ease-in-out',
//     duration: 800
// });

// ScrollReveal().reveal('.home-profile', {
//     delay: 400,
//     origin: 'right',
//     distance: '50px',
//     easing: 'ease-in-out',
//     duration: 800
// });