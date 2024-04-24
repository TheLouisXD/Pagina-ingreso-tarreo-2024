const scriptURL = 'https://script.google.com/macros/s/AKfycbzS6YT7K1DeKoejuzvPaK2VbsmSojz4PQFvfmFtjDFvdWX2ezVqSNcDHV1avhbAOSN4/exec';

const form = document.forms['form'];

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method : 'POST', body: new FormData(form)})
    .then(Response => alert('Thank you, your form is submited succesfully'))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})