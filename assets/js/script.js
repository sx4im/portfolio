document.getElementById('contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  
  const submitBtn = document.querySelector('.contact-submit-btn');
  
  // Add loading state
  submitBtn.style.transform = 'scale(0.98)';
  submitBtn.style.opacity = '0.9';
  
  // Get form values
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;
  
  // Simulate form submission with smooth transition
  setTimeout(() => {
    console.log('Form submitted:', { name, email, message });
    
    // Show success message
    submitBtn.textContent = 'Message Sent!';
    submitBtn.style.background = '#4CAF50';
    
    // Show popup message
    alert('Your message has been sent successfully!');
    
    // Reset button and form after delay
    setTimeout(() => {
    submitBtn.textContent = 'Send Message';
    submitBtn.style.background = '';
    submitBtn.style.transform = '';
    submitBtn.style.opacity = '';
    this.reset();
    }, 2000);
    
  }, 1000);
  });

  

 