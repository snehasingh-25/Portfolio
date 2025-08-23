let typed = new Typed('#element', {
    strings: [' MERN Developer', ' Web Developer'],
    typeSpeed: 50,
  });
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav ul li a");
  
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              navLinks.forEach((link) => link.classList.remove("active"));
              document.querySelector(`nav ul li a[href="#${entry.target.id}"]`).classList.add("active");
          }
      });
  }, { threshold: 0.5 });
  
  sections.forEach((section) => observer.observe(section));
  
