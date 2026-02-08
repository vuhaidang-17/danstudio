const form = document.getElementById("contactForm");
const hint = document.getElementById("hint");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const data = new FormData(form);
  const name = (data.get("name") || "").toString().trim();

  hint.textContent = `Đã gửi! Cảm ơn ${name || "bạn"} 🙂 (demo thôi, chưa có backend)`;
  form.reset();
});
