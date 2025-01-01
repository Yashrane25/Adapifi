document.addEventListener("scroll", () => {
  const whatIsAdaptify = document.querySelector(".what-is-adaptify");
  const rect = whatIsAdaptify.getBoundingClientRect();

  if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
    whatIsAdaptify.classList.add("animate");
  }
});

document.addEventListener("scroll", () => {
  const tutorials = document.querySelectorAll(
    ".tutorial-1, .tutorial-2, .tutorial-3"
  );

  tutorials.forEach((tutorial) => {
    const rect = tutorial.getBoundingClientRect();

    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      tutorial.classList.add("visible");
    }
  });
});

document.addEventListener("scroll", () => {
  const infoSections = document.querySelectorAll(
    ".eye-info, .gesture-info, .speech-info"
  );
  const infoHeaders = document.querySelectorAll(
    ".eye-info h1, .gesture-info h1, .speech-info h1"
  );

  infoSections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      section.classList.add("visible");
    }
  });
  infoHeaders.forEach((header) => {
    const rect = header.getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      header.classList.add("visible");
    }
  });
});

/*Login Btn*/
document.querySelector(".btn").addEventListener("click", function () {
  window.location.href = "login.html";
});

/*Login page*/
function login() {
  const loginBox = document.getElementById("login");
  const registerBox = document.getElementById("register");
  const btn = document.getElementById("btn");

  loginBox.style.left = "27px";
  registerBox.style.right = "-350px";
  btn.style.transform = "translateX(0)";

  document.querySelector(".login").classList.add("active");
  document.querySelector(".register").classList.remove("active");
}

function register() {
  const loginBox = document.getElementById("login");
  const registerBox = document.getElementById("register");
  const btn = document.getElementById("btn");

  loginBox.style.left = "-350px";
  registerBox.style.right = "27px";
  btn.style.transform = "translateX(100%)";

  document.querySelector(".login").classList.remove("active");
  document.querySelector(".register").classList.add("active");
}

document.addEventListener("DOMContentLoaded", () => {
  login();
});

/*Cancel button*/
function redirectToHome() {
  window.location.href = "Adaptify.html";
}

/*Click Home menu*/
document.getElementById("home").addEventListener("click", function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
