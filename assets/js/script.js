const navbar = document.querySelector(".header .flex .navbar");

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle("active");
}

const navbarLink = document.querySelectorAll(".header .flex .navbar a");

navbarLink.forEach(link => {
    link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        const target = document.querySelector(targetId);

        window.scrollTo({
            top: target.offsetTop - 90,
            behavior: "smooth"
        });

        e.preventDefault();
    });
});