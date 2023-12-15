const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const showFormBtn = document.getElementById('showFormBtn');
  const formContainer = document.getElementById('formContainer');
  const closeFormBtn = document.getElementById('closeFormBtn');
  const overlay = document.createElement('div');
  overlay.classList.add('overlay');

  showFormBtn.addEventListener('click', function () {
      formContainer.style.display = 'block';
      document.body.appendChild(overlay);
      overlay.style.display = 'block';
  });

  closeFormBtn.addEventListener('click', function () {
      formContainer.style.display = 'none';
      overlay.style.display = 'none';
  });

  overlay.addEventListener('click', function () {
      formContainer.style.display = 'none';
      overlay.style.display = 'none';
  });

  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      // Handle form submission, e.g., add to cart logic
      alert('The order has been sent successfully!');
      formContainer.style.display = 'none';
      overlay.style.display = 'none';
  });
});
