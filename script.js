document.getElementById("toggleSidebar").addEventListener("click", () => {
<<<<<<< HEAD
  document.querySelector(".sidebar").classList.toggle("open");
});

=======
  document.getElementById("sidebar").classList.toggle("closed");
});
>>>>>>> 8ec70f426149226a159460b81d3cfb671e68aba4
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
<<<<<<< HEAD

=======
>>>>>>> 8ec70f426149226a159460b81d3cfb671e68aba4
document.querySelectorAll(".submenu-toggle").forEach(button => {
  button.addEventListener("click", () => {
    const submenu = button.nextElementSibling;
    const isVisible = submenu.style.display === "block";
    submenu.style.display = isVisible ? "none" : "block";
    button.textContent = (isVisible ? "▸ " : "▾ ") + button.textContent.slice(2);
  });
<<<<<<< HEAD
});
=======
});
>>>>>>> 8ec70f426149226a159460b81d3cfb671e68aba4
