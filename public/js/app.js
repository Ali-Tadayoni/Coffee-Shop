const toggleThemeBtns = document.querySelectorAll(".toggle-theme");
const subMenuOpenBtn = document.querySelector('.submenu-openbtn')
const submenu = document.querySelector('.submenu')
const openMobileMenuBtn = document.querySelector('.open-mobile-menu-btn')
const MobileMenu = document.querySelector('.mobile-menu')
const overlay = document.querySelector('.overlay')
const MobbileMenuCloseBtn = document.querySelector('.mobile-memu-close-btn')
const openCartMenuBtn = document.querySelector('.open-cart-menu-btn')
const cart = document.querySelector('.cart')
const cartMenuCloseBtn = document.querySelector('.cart-memu-close-btn')


toggleThemeBtns.forEach(btn => {

    btn.addEventListener("click", () => {

        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }


    })
})

subMenuOpenBtn.addEventListener('click', (e) => {
    let spanElem = e.target.parentElement
    spanElem.parentElement.classList.toggle('text-orange-300')
    submenu.classList.toggle('hidden')

})
function closeMobileMenu() {

    MobileMenu.classList.remove('right-0')
    overlay.classList.remove('overlay--active')
    MobileMenu.classList.add('-right-64')

}
function closeCartMenu() {

    cart.classList.remove('left-0')
    overlay.classList.remove('overlay--active')
    cart.classList.add('-left-64')

}


openMobileMenuBtn.addEventListener('click', () => {

    MobileMenu.classList.remove('-right-64')
    MobileMenu.classList.add('right-0')
    overlay.classList.add('overlay--active')
    overlay.addEventListener('click', () => {

        closeMobileMenu()

    })

})
openCartMenuBtn.addEventListener('click', () => {

    cart.classList.remove('-left-64')
    cart.classList.add('left-0')
    overlay.classList.add('overlay--active')
    overlay.addEventListener('click', () => {

        closeCartMenu()

    })

})

MobbileMenuCloseBtn.addEventListener('click', () => {

    closeMobileMenu()
})
cartMenuCloseBtn.addEventListener('click', () => {
    closeCartMenu()

})