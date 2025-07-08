function showMessage() {
  alert("🚀 Button Clicked! You’re exploring interactivity.");
}

document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


// FAQ interactivity
document.querySelectorAll(".faq-item h3").forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});
