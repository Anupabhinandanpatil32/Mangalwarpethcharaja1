const scriptURL = 'https://script.google.com/macros/s/AKfycbxROLTu7nnuhUK-cku3PGxYpEQirmRLYz-myXA85TLF2j2_HvRaj8i5qsVhPYzDtXBf/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    alert("Ok ");
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})