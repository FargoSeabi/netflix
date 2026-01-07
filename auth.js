document.addEventListener("DOMContentLoaded", () => {
  /* ---------------- REGISTER ---------------- */
  const registerForm = document.getElementById("registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("registerEmail").value.trim();
      const password = document.getElementById("registerPassword").value;

      if (password.length < 7) {
        alert("Password must be at least 7 characters");
        return;
      }

      localStorage.setItem("userEmail", email);
      localStorage.setItem("userPassword", password);

      alert("Registration successful! Please login.");
      window.location.href = "login.html";
    });
  }

  /* ---------------- LOGIN ---------------- */
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const email = document.getElementById("loginEmail").value.trim();
      const password = document.getElementById("loginPassword").value;

      const storedEmail = localStorage.getItem("userEmail");
      const storedPassword = localStorage.getItem("userPassword");

      if (email === storedEmail && password === storedPassword) {
        alert("Login successful 🎉");
        window.location.href = "index.html";
      } else {
        alert("Enter valid email or password");
      }
    });
  }
});
