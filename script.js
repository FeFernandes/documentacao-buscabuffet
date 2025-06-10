document.getElementById("toggleSidebar").addEventListener("click", () => {
  document.getElementById("sidebar").classList.toggle("closed");
});
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
document.querySelectorAll(".submenu-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;
    const isVisible = submenu.style.display === "block";
    submenu.style.display = isVisible ? "none" : "block";
    button.textContent = (isVisible ? "▸ " : "▾ ") + button.textContent.slice(2);
  });
});