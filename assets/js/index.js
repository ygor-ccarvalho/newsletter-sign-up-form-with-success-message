const btnSubmit = document.getElementById("btn-submit");
const btnDismiss = document.getElementById("dismiss");
const firstPage = document.querySelector(".initial-screen");
const thankYou = document.querySelector(".thanks");
const emailValidation = document.getElementById("email");


btnSubmit.addEventListener('click', (e) => {

    e.preventDefault();
    if (emailValidation.value === '' || !emailValidation.checkValidity()) {
        alert('Digite um email válido!')
    } else if (emailValidation.checkValidity() === true) {
    firstPage.classList.add("hide"), thankYou.classList.remove("hide"); 
    };


});


btnDismiss.addEventListener('click', () => {
    thankYou.classList.add("hide");
    firstPage.classList.remove("hide");
});