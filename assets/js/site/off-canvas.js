const body = document.body;
const bodyModelOuter = document.querySelector('#off-canvas-model')

const leftSidebar = document.querySelector('#left-sidebar')
const leftSidebarOpenButton = document.querySelector('#article-nav > button:first-child')
const leftSidebarCloseButton = document.querySelector('#left-sidebar > div .btn')

if (leftSidebar && leftSidebarOpenButton) {
    leftSidebarOpenButton.addEventListener('click', function () {
        body.classList.add('model-open')
        bodyModelOuter.style.display = 'block'
        leftSidebar.classList.add('open')

        leftSidebarCloseButton.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            leftSidebar.classList.remove('open')
        });

        bodyModelOuter.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            leftSidebar.classList.remove('open')
        });
    });
}

const rightSidebar = document.querySelector('#right-sidebar')
const rightSidebarOpenButton = document.querySelector('#article-nav > button:last-child')
const rightSidebarCloseButton = document.querySelector('#right-sidebar > div > .btn')

if (rightSidebar && rightSidebarOpenButton) {
    rightSidebarOpenButton.addEventListener('click', function () {
        body.classList.add('model-open')
        bodyModelOuter.style.display = 'block'
        rightSidebar.classList.add('open')

        rightSidebarCloseButton.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            rightSidebar.classList.remove('open')
        });

        bodyModelOuter.addEventListener('click', function () {
            body.classList.remove('model-open')
            bodyModelOuter.style.display = 'none'
            rightSidebar.classList.remove('open')
        });
    });
}

window.addEventListener('resize', function (event) {
    if (body.classList.contains('model-open')) {
        body.classList.remove('model-open')
        bodyModelOuter.style.display = 'none'

        if (rightSidebar.classList.contains('open')) {
            rightSidebar.classList.remove('open')
        }

        if (leftSidebar.classList.contains('open')) {
            leftSidebar.classList.remove('open')
        }
    }
});

const leftSidebarSiteLogo = document.querySelector('#left-sidebar .site-logo')
const leftSidebarNav = document.querySelector('#left-sidebar > nav')
const leftSidebarNavActiveItem = document.querySelector('#left-sidebar > nav > details > ul > li > a.active');
const adjustLeftSidebarNavHeight = function () {
    if (window.innerWidth > 1280) {
        leftSidebarNav.style.height = `${window.innerHeight - 1 - leftSidebarSiteLogo.getBoundingClientRect().height}px`
    } else {
        leftSidebarNav.style.height = ''
    }
}

if (leftSidebarNav) {
    adjustLeftSidebarNavHeight()
    window.addEventListener('resize', function (event) {
        adjustLeftSidebarNavHeight();
    })

    const section = window.location.pathname.split('/').filter(Boolean)[0] || 'default';
    const sectionSidebarPositionKey = `${section}-sidebar-position`;

    window.addEventListener('DOMContentLoaded', () => {
        const savedScroll = sessionStorage.getItem(sectionSidebarPositionKey);
        if (savedScroll === null) {
            const navRect = leftSidebarNav.getBoundingClientRect();
            const itemRect = leftSidebarNavActiveItem.getBoundingClientRect();

            const isVisible =
                itemRect.top >= navRect.top &&
                itemRect.bottom <= navRect.bottom;

            if (!isVisible) {
                leftSidebarNav.scrollTo({
                    top: leftSidebarNavActiveItem.offsetTop - leftSidebarNav.offsetTop - leftSidebarSiteLogo.getBoundingClientRect().height,
                    behavior: "auto"
                });
            }
        } else {
            leftSidebarNav.scrollTop = parseInt(savedScroll, 10);
        }
    });

    window.addEventListener('beforeunload', () => {
        sessionStorage.setItem(sectionSidebarPositionKey, leftSidebarNav.scrollTop);
    });
}