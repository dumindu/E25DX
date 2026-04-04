const body = document.body;
const bodyModelOuter = document.querySelector('#body-model-outer')

const mainAside = document.querySelector('main > aside')
const mainAsideOpenButton = document.querySelector('main > article > nav > button:last-child')
const mainAsideCloseButton = document.querySelector('main > aside > div > .btn')

if (mainAside && mainAsideOpenButton) {
    mainAsideOpenButton.addEventListener('click', function () {
        body.classList.add('model-open')
        bodyModelOuter.style.display = 'block'
        mainAside.classList.add('open')

        mainAsideCloseButton.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            mainAside.classList.remove('open')
        });

        bodyModelOuter.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            mainAside.classList.remove('open')
        });
    });
}

window.addEventListener('resize', function (event) {
    if (body.classList.contains('model-open')) {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'

        if (mainAside.classList.contains('open')) {
            mainAside.classList.remove('open')
        }
    }
});
