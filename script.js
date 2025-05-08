 // Scroll lin pentru toate linkurile cu #
 document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  (function(){
    emailjs.init("YOUR_USER_ID"); // Înlocuiește cu public key de la EmailJS
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(() => {
        alert("Message sent successfully!");
        this.reset();
      }, (error) => {
        alert("Failed to send message. Error: " + error);
      });
  });