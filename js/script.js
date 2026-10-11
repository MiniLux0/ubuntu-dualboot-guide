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
    btn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    btn.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
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
    if (winScroll > 350) {
      topBtn.classList.add('visible');
    } else {
      topBtn.classList.remove('visible');
    }
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Dynamic Copy Code Buttons and Checklist Persistence
document.addEventListener('DOMContentLoaded', () => {
  // Theme initialization
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  // Copy code buttons for pre elements
  document.querySelectorAll('pre').forEach((pre) => {
    // Skip if already in code-container
    if (pre.parentElement && pre.parentElement.classList.contains('code-container')) return;

    const container = document.createElement('div');
    container.className = 'code-container';
    pre.parentNode.insertBefore(container, pre);
    container.appendChild(pre);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.type = 'button';
    copyBtn.innerText = 'Copy';
    copyBtn.onclick = () => {
      const codeText = pre.querySelector('code') ? pre.querySelector('code').innerText : pre.innerText;
      navigator.clipboard.writeText(codeText.trim()).then(() => {
        copyBtn.innerText = 'Copied!';
        copyBtn.style.color = '#10b981';
        setTimeout(() => {
          copyBtn.innerText = 'Copy';
          copyBtn.style.color = '';
        }, 2000);
      });
    };
    container.appendChild(copyBtn);
  });

  // Interactive Checklist with LocalStorage persistence
  const savedChecks = JSON.parse(localStorage.getItem('ubuntu_checklist_state') || '{}');
  const checklistItems = document.querySelectorAll('.checklist-item');

  checklistItems.forEach((item, index) => {
    const checkbox = item.querySelector('.checklist-checkbox');
    if (!checkbox) return;

    // Restore saved state
    if (savedChecks[index]) {
      checkbox.checked = true;
      item.classList.add('checked');
    }

    checkbox.addEventListener('change', () => {
      if (checkbox.checked) {
        item.classList.add('checked');
        savedChecks[index] = true;
      } else {
        item.classList.remove('checked');
        delete savedChecks[index];
      }
      localStorage.setItem('ubuntu_checklist_state', JSON.stringify(savedChecks));
    });
  });
});
