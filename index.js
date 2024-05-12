const scriptURL = 'https://script.google.com/macros/s/AKfycbzYeLHcQt53WH5NjetnJwG4M31GjDYeX2a212A7maPHzbGOhse1XVqukuLwgutEr8Y/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    alert("Ok ");
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})