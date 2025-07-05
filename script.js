// function submit form to gsheet
const scriptURL = 'https://script.google.com/macros/s/AKfycbz7ckjQFoHNconM3qEIUW0jbkF37IuZOyktt8fKfYtPjaZQP8gp63p8JQt-NY9-eLhi1A/exec'
const form = document.forms['submit-contacts']

const btnSubmit = document.querySelector(".btn-submit");
const formAlert = document.querySelector(".form-alert");
const btnLoad = document.querySelector(".btn-load");

form.addEventListener('submit', e => {
    e.preventDefault()

    // menghapus tobol kirim dan memunculkan tombol loading 
    btnSubmit.classList.toggle("d-none");
    btnLoad.classList.toggle("d-none");

    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            // menghapus tobol loading dan memunculkan tombol kirim 
            btnSubmit.classList.toggle("d-none")
            btnLoad.classList.toggle("d-none")

            // menambahkan alert
            formAlert.classList.toggle("d-none");

            // mereset form
            form.reset();

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
