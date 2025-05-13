    const form = document.getElementById('userForm');
    const userDataElement = document.getElementById('userData');
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const fullname = document.getElementById('fullname').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      userDataElement.innerHTML = `
        Full Name: ${fullname}<br>
        Email: ${email}<br>
        Password: ${password}
      `;
    });