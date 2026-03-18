// ================= SMOOTH SCROLL =================
function scrollToSection(id) {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


// ================= NAVBAR FIX (backup) =================
// agar onclick fail ho kabhi, ye fallback hai
document.querySelectorAll(".navbar ul li").forEach(item => {
  item.addEventListener("click", () => {
    const text = item.innerText.toLowerCase();
    const section = document.getElementById(text);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});


// ================= TYPING EFFECT =================
const texts = [
  "CSE Student",
  "AI/ML Enthusiast",
  "Problem Solver",
  "Competitive Programmer"
];

let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const element = document.getElementById("typing");
  if (!element) return;

  currentText = texts[index];

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  element.textContent = currentText.substring(0, charIndex);

  if (!isDeleting && charIndex === currentText.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1200);
    return;
  }

  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    if (index >= texts.length) index = 0;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();


// ================= SKILL BAR ON SCROLL =================
const skillBoxes = document.querySelectorAll(".skill-box");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bars = entry.target.querySelectorAll(".bar div");

      bars.forEach(bar => {
        bar.style.width = bar.getAttribute("data-width");
      });
    }
  });
}, { threshold: 0.3 });

skillBoxes.forEach(box => observer.observe(box));


// ================= CONTACT FORM =================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Message sent successfully 🚀");

    form.reset();
  });
}
