// Navbar toggle for mobile
document.getElementById("menuToggle").addEventListener("click", () => {
    document.getElementById("navLinks").classList.toggle("show");
});

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Login/Signup toggle
const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const switchToSignup = document.getElementById("switchToSignup");
const switchToLogin = document.getElementById("switchToLogin");

loginBtn.addEventListener("click", () => {
    loginForm.classList.add("active");
    signupForm.classList.remove("active");
    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
});

signupBtn.addEventListener("click", () => {
    signupForm.classList.add("active");
    loginForm.classList.remove("active");
    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

switchToSignup.addEventListener("click", () => signupBtn.click());
switchToLogin.addEventListener("click", () => loginBtn.click());
