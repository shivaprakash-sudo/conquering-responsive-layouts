window.onload = () => {
    const menuBtn = document.querySelector(".btn-menu");
    const navLists =  document.querySelector(".navs");
    menuBtn.onclick = toggle;
    function toggle() {
       navLists.classList.toggle("active");
    }
}