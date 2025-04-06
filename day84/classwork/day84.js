const elements = document.querySelectorAll('.clickable');
    elements.forEach((element) => {
      element.addEventListener('click', function(event) {
        event.target.style.color = 'red';
        console.log('clicked elements text:', event.target.textContent);
        console.log('HTML:', event.target.outerHTML);
        console.log('Event object:', event);
      });
    });