window.onload = () => {
    const menuBtn = document.querySelector(".btn-menu");

    menuBtn.onclick = toggle;
    window.onclick = (e) => {
        if (!e.target.matches(".btn-menu")) {
            let dropdowns = document.querySelector(".nav-list");
            for (let i = 0; i < dropdowns.length; i++) {
                const openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("active")) {
                    openDropdown.classList.remove("active");
                }
            }
        }
    }

    function toggle() {
        document.querySelector(".nav-list").classList.toggle("active");
    }

}