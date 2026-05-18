const dropdowns = document.querySelectorAll('.dropdown')
const dropdownOpenSelector = '.dropdown-menu.show';

dropdowns.forEach(el => {
    el.addEventListener('click', function (e) {
        const alreadyShown = el.querySelector('.dropdown-menu.show');

        document.querySelectorAll(dropdownOpenSelector).forEach(openDropdownEl => openDropdownEl.classList.remove('show'));

        if (!alreadyShown) {
            el.querySelector('.dropdown-menu').classList.toggle('show')
        }
    })
});

document.body.addEventListener('click', function (e) {
    const isDropdownMenu = e.target.closest('.dropdown');
    if (!isDropdownMenu) {
        document.querySelectorAll(dropdownOpenSelector).forEach(el => el.classList.remove('show'));
    }
});
