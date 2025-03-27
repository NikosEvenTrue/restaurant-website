const mobile_nav_bars = document.getElementsByClassName("mobile-nav-bar")
const mobile_nav_buttons = document.getElementsByClassName("mobile-nav-button");

[...mobile_nav_buttons].forEach(button => {
    button.addEventListener("click", () => {
        [...mobile_nav_bars].forEach(navbar => {
            navbar.classList.toggle("active")
        })
    })
})

document.addEventListener('DOMContentLoaded', () => {
    let vh = window.innerHeight * 0.01
    let vw = window.outerWidth * 0.01
    let vmin = Math.min(vh, vw)

    function setViewPort() {
        document.documentElement.style.setProperty('--vh', `${vh}px`)
        document.documentElement.style.setProperty('--vmin', `${vmin}px`)
    }

    window.addEventListener('orientationchange', () => {
        [vh, vw] = [vw, vh]
        setViewPort()
    })

    setViewPort()
})

// document.addEventListener('DOMContentLoaded', () => {
//     function setVH() {
//         const vh = window.outerHeight * 0.01
//         document.documentElement.style.setProperty('--vh', `${vh}px`)
//     }

//     function setVMin() {
//         const vmin = Math.min(window.outerHeight * 0.01, window.outerWidth * 0.01)
//         document.documentElement.style.setProperty('--vmin', `${vmin}px`)
//     }

//     function setViewPort() {
//         setTimeout(() => {
//             console.log(`${window.outerHeight} ${window.innerHeight}`)
//             setVH()
//             setVMin()
//         }, 30)
//     }

//     window.addEventListener('orientationchange', () => {
//         requestAnimationFrame(() => {
//             setViewPort()
//         })
//     })

//     setViewPort()
// })