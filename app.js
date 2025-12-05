// template_7pe8ze9
// service_klzb15v 
// 4_zbg61EHOmowMpIH

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible";
    emailjs
    .sendForm(
        'service_klzb15v',
        'template_7pe8ze9',
        event.target,
        '4_zbg61EHOmowMpIH'
    ).then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay-visible";
    }).catch (() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at cjmoses1318@gmail.com."
        );
    })
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;
    document.body.classList =+ " modal--open";
}