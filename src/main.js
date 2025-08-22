import './style.css'

const buttons = document.querySelectorAll(".filter-btn");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("bg-red-500", "text-white"));
        btn.classList.add("bg-red-500", "text-white");
    });
});