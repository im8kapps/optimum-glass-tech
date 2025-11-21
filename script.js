// Optimum Glass - lightweight interactions

document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initFormValidation();
  preselectServiceFromQuery();
});

function initSmoothScroll() {
  const links = document.querySelectorAll("a[href^='#']");
  links.forEach(link => {
    link.addEventListener('click', e => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

function initFormValidation() {
  const form = document.getElementById('quoteForm');
  if (!form) return;

  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) validateField(field);
    });
  });

  form.addEventListener('submit', handleFormSubmit);
}

function validateField(field) {
  const value = field.value.trim();
  const name = field.name;
  const error = document.getElementById(`${name}Error`);
  let message = '';

  if (field.hasAttribute('required') && !value) {
    message = 'This field is required.';
  }

  if (!message && value) {
    if (name === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) message = 'Enter a valid email.';
    }
    if (name === 'phone') {
      const phoneRegex = /^[+]?[- ()0-9]{10,}$/;
      if (!phoneRegex.test(value)) message = 'Enter a valid phone number.';
    }
  }

  if (message) {
    field.classList.add('error');
    if (error) error.textContent = message;
    return false;
  }

  field.classList.remove('error');
  if (error) error.textContent = '';
  return true;
}

function validateForm() {
  const form = document.getElementById('quoteForm');
  const requiredFields = form.querySelectorAll('[required]');
  let valid = true;
  requiredFields.forEach(field => {
    if (!validateField(field)) valid = false;
  });
  return valid;
}

function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  if (!validateForm()) {
    const firstError = form.querySelector('.error');
    if (firstError) firstError.focus();
    return;
  }

  const submitButton = form.querySelector('button[type="submit"]');
  const originalText = submitButton ? submitButton.textContent : '';
  if (submitButton) {
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
  }

  const formData = new FormData(form);
  formData.append('form-name', 'glass-quote-request');
  const payload = new URLSearchParams(formData).toString();

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: payload
  })
    .then(response => {
      if (!response.ok) throw new Error('Form submission failed');
      showSuccessMessage();
      form.reset();
    })
    .catch(error => {
      console.error('Submission error', error);
      alert('There was an issue sending your request. Please call (469) 794-5717 or try again.');
    })
    .finally(() => {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = originalText;
      }
    });
}

function showSuccessMessage() {
  const form = document.getElementById('quoteForm');
  const success = document.getElementById('quoteSuccess');
  if (form && success) {
    form.style.display = 'none';
    success.style.display = 'block';
  }
}

function preselectServiceFromQuery() {
  const params = new URLSearchParams(window.location.search);
  const service = params.get('service');
  const map = {
    auto: 'Auto Glass Replacement',
    residential: 'Residential Windows',
    commercial: 'Commercial Glass',
    emergency: 'Emergency Board Up'
  };
  const target = document.getElementById('serviceType');
  if (service && target && map[service]) target.value = map[service];
}

function openQuoteModal(prefill) {
  const form = document.getElementById('quoteForm');
  const success = document.getElementById('quoteSuccess');
  if (form && success) {
    form.style.display = 'block';
    success.style.display = 'none';
  }

  const serviceSelect = document.getElementById('serviceType');
  if (prefill && serviceSelect) serviceSelect.value = prefill;

  const section = document.getElementById('quote');
  if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const nameInput = document.getElementById('name');
  if (nameInput) setTimeout(() => nameInput.focus(), 200);
}

// Expose globally for inline handlers
window.openQuoteModal = openQuoteModal;
