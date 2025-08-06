// Scroll to top
const scrollBtn = document.querySelector('.scroll-top-btn');
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  revealCardsOnScroll();
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Open modal
function openModal(imageSrc) {
  const modal = document.getElementById('certificateModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageSrc;
  modal.style.display = 'flex';
}

// Close modal
function closeModal() {
  document.getElementById('certificateModal').style.display = 'none';
}

// Close modal on outside click
window.onclick = function(event) {
  const modal = document.getElementById('certificateModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};


function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Filter
function filterCards() {
  const filter = document.getElementById("roleFilter").value;
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    if (filter === 'all' || card.classList.contains(`role-${filter}`)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Theme toggle
document.getElementById("themeToggle").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");
});

// Scroll animation
function revealCardsOnScroll() {
  const cards = document.querySelectorAll('.animate');
  const trigger = window.innerHeight - 100;

  cards.forEach(card => {
    const top = card.getBoundingClientRect().top;
    if (top < trigger) {
      card.classList.add('visible');
    }
  });
}

// Initial animation trigger
document.addEventListener("DOMContentLoaded", revealCardsOnScroll);
