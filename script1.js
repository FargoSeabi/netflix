// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  /* -------------------------------
     EMAIL SIGN-UP FORMS
  -------------------------------- */
  const forms = document.querySelectorAll(".email-signup");

  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const emailInput = form.querySelector("input[type='email']");
      const email = emailInput.value.trim();

      if (email === "") {
        alert("Please enter your email address.");
        return;
      }

      // Simple email format check
      if (!email.includes("@")) {
        alert("Please enter a valid email address");
        return;
      }

      alert(`Thank you for registering!\nEmail: ${email}`);
      emailInput.value = "";
    });
  });

  /* -------------------------------
     SIGN IN BUTTON
  -------------------------------- */
  const signInBtn = document.getElementById("sign-in");

  if (signInBtn) {
    signInBtn.addEventListener("click", () => {
      alert("You signed in successfully!");
    });
  }

  /* -------------------------------
     FAQ ACCORDION (EXTRA UX)
     Close others when one opens
  -------------------------------- */
  const accordionRadios = document.querySelectorAll(
    ".accordion input[type='radio']"
  );

  accordionRadios.forEach((radio) => {
    radio.addEventListener("change", () => {
      accordionRadios.forEach((otherRadio) => {
        if (otherRadio !== radio) {
          otherRadio.checked = false;
        }
      });
    });
  });

  /* -------------------------------
     LANGUAGE BUTTON (DEMO)
  -------------------------------- */
  const languageBtn = document.querySelector("nav button");

  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      alert("Languages are not available yet");
    });
  }
});
