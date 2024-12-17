const headerNav = document.querySelector(".headerNav");

headerNav.addEventListener("click", (event) => {

    if(event.target.matches(".containerIconNav *")){
        const ulNav = document.querySelector(".ulNav");
        const openNav = document.querySelector(".openNav");
        const closeNav = document.querySelector(".closeNav");

        ulNav.classList.toggle("open");
        openNav.classList.toggle("hiddenIconNav");
        closeNav.classList.toggle("hiddenIconNav");
    }
})