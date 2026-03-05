const CONFIG = {
  WEB3FORMS_KEY: "7cba3acc-6d19-4ae5-8bff-28f9d89d4b0d",
  TARGET_URL: "https://example.com",
  REDIRECT_URL: "/thanks.html"
};

const form = document.querySelector("#contact-form");
const redirectBtn = document.querySelector("#redirect-btn");

redirectBtn.href = CONFIG.TARGET_URL;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  formData.append("access_key", CONFIG.WEB3FORMS_KEY);

  const response = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    window.location.href = CONFIG.REDIRECT_URL;
  } else {
    alert("Something went wrong.");
    // see error
    const data = await response.json()
    console.log(JSON.stringify(data))
  }
});