# Simple Landing Page (HTML/CSS + Web3Forms)

A minimal landing page built with **pure HTML, CSS, and a small JavaScript file** that demonstrates two common website features:

- A **button that redirects to another website**
- A **contact form that sends emails** using **Web3Forms**

The project is designed to be easily deployed as a **static site** on platforms like **Vercel** or **GitHub Pages**.

---

## Live Demo

https://landing-web3forms.vercel.app/

---

## Features

- Clean **minimal landing page**
- **Redirect button** to any external website
- **Contact form sending emails**
- Powered by **Web3Forms**
- **No backend required**
- Simple **static deployment**

---

## Project Structure

```

project/
│
├── index.html
├── styles.css
├── script.js
├── thanks.html
└── README.md

````

---

## How It Works

The contact form sends data to the **Web3Forms API**.

Workflow:

1. User fills the contact form
2. The form is submitted to Web3Forms
3. Web3Forms sends the email to the configured inbox
4. The user is redirected to `thanks.html`

---

## Setup

### 1. Add your Web3Forms access key

Open **`script.js`** and replace the key in the configuration object:

```javascript
const CONFIG = {
  WEB3FORMS_KEY: "YOUR_ACCESS_KEY",
  TARGET_URL: "https://example.com",
  REDIRECT_URL: "/thanks.html"
};
````

---

### 2. Configure the redirect button

Update the destination URL inside `script.js`:

```
TARGET_URL
```

This is the website users will be redirected to when clicking the **Go to Website** button.

---

### 3. Configure the success redirect page

After a successful form submission, users are redirected to:

```
thanks.html
```

You can change this path inside the `CONFIG` object.

---

## Deploy on Vercel

1. Push the project to **GitHub**
2. Go to **Vercel**
3. Click **New Project**
4. Import the repository
5. Deploy

Since the project is a **static website**, no special configuration is required.

---

## Notes

* The Web3Forms **access key is public by design** and can safely be used in frontend projects.
* No backend or serverless functions are required.
* The project can be easily customized for client landing pages.

---

## License

Free to use and modify.