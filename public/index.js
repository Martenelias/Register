document.addEventListener('DOMContentLoaded', () => {
  const signinForm = document.querySelector('#signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());
      try {
        const response = await fetch('/signin', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const { accessToken, redirectUrl } = await response.json();
          localStorage.setItem('accessToken', accessToken);
          window.location.href = redirectUrl;
        } else {
          alert('Login failed!');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }

  const signupForm = document.querySelector('#signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = Object.fromEntries(formData.entries());

      try {
        const response = await fetch('/signup', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });

        if (response.ok) {
          const { accessToken, redirectUrl } = await response.json();
          localStorage.setItem('accessToken', accessToken);
          window.location.href = redirectUrl;
        } else {
          alert('Registration failed!');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    });
  }
});
