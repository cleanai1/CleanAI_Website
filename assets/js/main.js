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
