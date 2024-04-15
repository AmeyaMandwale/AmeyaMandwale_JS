const scriptURL = 'https://script.google.com/macros/s/AKfycbxi3sBZRi3HcNSrPV-ChOWhdqtCaovv1Pw7NNLwxvX8-B0XfJS5aYxuQDfHbau8WQL7xA/exec'

const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})