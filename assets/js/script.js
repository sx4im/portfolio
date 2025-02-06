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
  
  function createBubbles() {
    const wrapper = document.querySelector('.contact-content-wrapper');
    const bubbleCount = window.innerWidth > 768 ? 15 : 10;
    
    // Remove existing bubbles with fade out effect
    const existingBubbles = document.querySelectorAll('.bubble');
    existingBubbles.forEach(bubble => {
      bubble.style.opacity = '0';
      setTimeout(() => bubble.remove(), 400);
    });
    
    // Create new bubbles with fade in effect
    setTimeout(() => {
      for (let i = 0; i < bubbleCount; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        const size = Math.random() * 55 + 15;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        bubble.style.left = `${Math.random() * 100}%`;
        bubble.style.top = `${Math.random() * 100}%`;
        
        bubble.style.animationDelay = `${Math.random() * 8}s`;
        bubble.style.animationDuration = `${12 + Math.random() * 8}s`;
        
        // Start with opacity 0 and fade in
        bubble.style.opacity = '0';
        wrapper.appendChild(bubble);
        
        // Trigger reflow and fade in
        requestAnimationFrame(() => {
          bubble.style.opacity = '1';
        });
      }
    }, 400);
  }
  
  !function(){document.addEventListener('DOMContentLoaded', createBubbles)}();
  
  // Smooth bubble recreation on resize
  let resizeTimeout;
  window.addEventListener('resize', function() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(createBubbles, 250);
  });