// Minimal JS: mobile nav, theme toggle, demo form, current year
(function(){
  const nav = document.getElementById('nav');
  const navToggle = document.getElementById('navToggle');
  const themeToggle = document.getElementById('themeToggle');
  const yearEl = document.getElementById('year');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Persisted theme
  const saved = localStorage.getItem('theme');
  if(saved === 'light'){ document.documentElement.classList.add('light'); }
  if(!saved && !prefersDark){ document.documentElement.classList.add('light'); }

  navToggle?.addEventListener('click', ()=> nav.classList.toggle('open'));
  themeToggle?.addEventListener('click', ()=> {
    document.documentElement.classList.toggle('light');
    localStorage.setItem('theme', document.documentElement.classList.contains('light') ? 'light' : 'dark');
  });

  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Demo contact form
  const btn = document.getElementById('sendBtn');
  btn?.addEventListener('click', ()=>{
    const name = (document.getElementById('name')||{}).value || '';
    const email = (document.getElementById('email')||{}).value || '';
    const msg = (document.getElementById('message')||{}).value || '';
    if(!name || !email || !msg){ alert('Please complete all fields.'); return; }
    alert('Thanks, ' + name + '! This demo form does not actually send yet. Connect it to a backend or email service.');
  });
})();