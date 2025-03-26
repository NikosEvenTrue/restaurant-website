const mobile_nav_bars = document.getElementsByClassName("mobile-nav-bar")
const mobile_nav_buttons = document.getElementsByClassName("mobile-nav-button");

[...mobile_nav_buttons].forEach(button => {
    button.addEventListener("click", () => {
        [...mobile_nav_bars].forEach(navbar => {
            navbar.classList.toggle("active")
        })
    })
})