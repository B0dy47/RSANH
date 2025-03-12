particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#3a6cf4"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000"
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false
      },
      "size": {
        "value": 5,
        "random": true
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#3a6cf4",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out"
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "push": {
          "particles_nb": 4
        }
      }
    },
    "retina_detect": true
  });
  document.querySelectorAll('.spotlight-card').forEach(card => {
    // عند تحريك الماوس داخل الكارت
    card.addEventListener('mousemove', (e) => {
      // نحسب إحداثيات الماوس بالنسبة لحدود العنصر نفسه
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;  // المسافة من يسار الكارت
      const y = e.clientY - rect.top;   // المسافة من أعلى الكارت
  
      // نمرر القيم للمتغيرات في الـ CSS
      card.style.setProperty('--x', x + 'px');
      card.style.setProperty('--y', y + 'px');
    });
  
    // اختياري: إذا أردت إرجاع الإضاءة للمنتصف عند خروج الماوس
    card.addEventListener('mouseleave', () => {
      card.style.setProperty('--x', '50%');
      card.style.setProperty('--y', '50%');
    });
  });
  