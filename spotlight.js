document.querySelectorAll('.spotlight-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    // عند تحريك الماوس داخل الكارت، نتأكد من إزالة الكلاس لو موجود
    card.classList.remove('no-transition');
    
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--x', x + 'px');
    card.style.setProperty('--y', y + 'px');
  });

  card.addEventListener('mouseleave', () => {
    // عند مغادرة الماوس، نضيف كلاس لتعطيل الانتقال
    card.classList.add('no-transition');
  });
});
