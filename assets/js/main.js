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



window.sr = ScrollReveal({ reset: true });
sr.reveal('.home-profile', { duration: 3000 });

sr.reveal('.home-content', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.analytics-contain', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});


sr.reveal('.analytics-img', { duration: 3000 });

sr.reveal('.our-services-h2', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.our-services-column', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.howitwork-h2', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.image-container-img', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.p', { duration: 6000 });
sr.reveal('.how-works-btn', { duration: 6000 });

sr.reveal('.aboutus-content-h2', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.aboutus-content-p', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.aboutus-btn', { duration: 6000 });
sr.reveal('.aboutus-column', { duration: 6000 });

sr.reveal('.Industries-h2', {
    delay: 75,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});
sr.reveal('.Industries-column-1', {
    delay: 100,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});

sr.reveal('.Industries-column-2', {
    delay: 300,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});
sr.reveal('.Industries-column-3', {
    delay: 600,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});
sr.reveal('.Industries-column-4', {
    delay: 900,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});
sr.reveal('.Industries-column-5', {
    delay: 1100,
    duration: 1500,
    opacity: 0,
    distance: "50%",
    origin: "top",
    reset: true
});
// sr.reveal('.aboutus-column', {
//     delay: 75,
//     duration: 1500,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",
//     reset: true
// });


// sr.reveal('.home-content', {
//     delay: 75,
//     duration: 1500,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",
//     reset: true
// });

// sr.reveal('.home-profile', {
//     delay: 1000,
//     duration: 1500,
//     opacity: 0,
//     distance: "50%",
//     origin: "top",
//     reset: true
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