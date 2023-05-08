const sidebar = document.querySelector(".sidebar");
const sidebarClose = document.querySelector(".material-symbols-outlined");

sidebarClose.addEventListener("click", ()=> {
    sidebar.classList.toggle("close")
});
