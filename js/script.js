document.addEventListener('DOMContentLoaded', function() {
  
    const greetingEl = document.getElementById('greeting');
    greetingEl.textContent = 'Welcome';
  
    const themeBtn = document.getElementById('themeToggle');
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      document.body.classList.add('dark-theme');
      themeBtn.textContent = 'Light Mode';
    } else {
      themeBtn.textContent = 'Dark Mode';
    }
    
    themeBtn.addEventListener('click', function() {
      document.body.classList.toggle('dark-theme');
      const isDark = document.body.classList.contains('dark-theme');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      themeBtn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
    });
  
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you! Your message has been sent.');
      form.reset();
    });
  });