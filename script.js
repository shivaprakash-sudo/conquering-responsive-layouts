window.onload = () => {
    const menuBtn = document.querySelector(".btn-menu");
    const navLists = document.querySelector(".navs");
    menuBtn.onclick = toggleActiveClass;

    function toggleActiveClass() {
        navLists.classList.toggle("active");
    }
}