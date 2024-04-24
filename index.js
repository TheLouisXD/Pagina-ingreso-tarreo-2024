const scriptURL = 'https://script.google.com/macros/s/AKfycbzS6YT7K1DeKoejuzvPaK2VbsmSojz4PQFvfmFtjDFvdWX2ezVqSNcDHV1avhbAOSN4/exec';

const form = document.forms['form'];

const btn = document.querySelector('.submit');

form.addEventListener('submit', e => {
    btn.classList.add('button--loading')
    e.preventDefault()
    fetch(scriptURL, {method : 'POST', body: new FormData(form)})
    .then(Response => swal("Ingreso con exito", "Los datos han sido enviados", "success"))
    .then(() => {window.location.reload(); })
    .catch(error => console.error('Error', error.message))
})
