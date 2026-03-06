const body = document.body;
const bodyModelOuter = document.querySelector('#body-model-outer')

const asideWrapper = document.querySelector('#aside-wrapper')
const asideWrapperOpenButton = document.querySelector('main > article > nav > button:first-child')
const asideWrapperCloseButton = document.querySelector('#aside-wrapper > aside > div .btn')

if (asideWrapper && asideWrapperOpenButton) {
    asideWrapperOpenButton.addEventListener('click', function () {
        body.classList.add('model-open')
        bodyModelOuter.style.display = 'block'
        asideWrapper.classList.add('open')

        asideWrapperCloseButton.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            asideWrapper.classList.remove('open')
        });

        bodyModelOuter.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            asideWrapper.classList.remove('open')
        });
    });
}

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

        if (asideWrapper.classList.contains('open')) {
            asideWrapper.classList.remove('open')
        }
    }
});

const asideWrapperSiteLogo = document.querySelector('#aside-wrapper .site-logo')
const asideWrapperAsideNav = document.querySelector('#aside-wrapper > aside > nav')
const asideWrapperAsideNavActiveItem = document.querySelector('#aside-wrapper > aside > nav > details > ul > li > a.active');
const adjustAsideWrapperAsideNavHeight = function () {
    if (window.innerWidth > 1280) {
        asideWrapperAsideNav.style.height = `${window.innerHeight - 1 - asideWrapperSiteLogo.getBoundingClientRect().height}px`
    } else {
        asideWrapperAsideNav.style.height = ''
    }
}

adjustAsideWrapperAsideNavHeight()
window.addEventListener('resize', function (event) {
    adjustAsideWrapperAsideNavHeight();
})

const section = window.location.pathname.split('/').filter(Boolean)[0] || 'default';
const sectionSidebarPositionKey = `${section}-sidebar-position`;

window.addEventListener('DOMContentLoaded', () => {
    const savedScroll = sessionStorage.getItem(sectionSidebarPositionKey);
    if (savedScroll === null) {
        const navRect = asideWrapperAsideNav.getBoundingClientRect();
        const itemRect = asideWrapperAsideNavActiveItem.getBoundingClientRect();

        const isVisible =
            itemRect.top >= navRect.top &&
            itemRect.bottom <= navRect.bottom;

        if (!isVisible) {
            asideWrapperAsideNav.scrollTo({
                top: asideWrapperAsideNavActiveItem.offsetTop - asideWrapperAsideNav.offsetTop - asideWrapperSiteLogo.getBoundingClientRect().height,
                behavior: "auto"
            });
        }
    } else {
        asideWrapperAsideNav.scrollTop = parseInt(savedScroll, 10);
    }
});

window.addEventListener('beforeunload', () => {
    sessionStorage.setItem(sectionSidebarPositionKey, asideWrapperAsideNav.scrollTop);
});