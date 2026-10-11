// Theme Toggle with LocalStorage
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    const isEs = document.documentElement.lang === 'es';
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark'
      ? (isEs ? 'Cambiar a modo claro' : 'Switch to Light Mode')
      : (isEs ? 'Cambiar a modo oscuro' : 'Switch to Dark Mode');
  }
}

// Scroll Progress and Back-To-Top
window.addEventListener('scroll', () => {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
  const progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    progressBar.style.width = scrolled + '%';
  }

  const topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    if (winScroll > 400) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic Copy Code Buttons and Initial Setup
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeIcon(saved);

  const isEs = document.documentElement.lang === 'es';
  const copyLabel = isEs ? 'Copiar' : 'Copy';
  const copiedLabel = isEs ? '¡Copiado!' : 'Copied!';

  document.querySelectorAll('pre').forEach((pre) => {
    const container = document.createElement('div');
    container.className = 'code-container';
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerText = copyLabel;
    copyBtn.onclick = () => {
      const codeText = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      navigator.clipboard.writeText(codeText).then(() => {
        copyBtn.innerText = copiedLabel;
        copyBtn.style.color = '#22c55e';
        setTimeout(() => {
          copyBtn.innerText = copyLabel;
          copyBtn.style.color = '';
        }, 2000);
      });
    };
    container.appendChild(copyBtn);
  });
});
