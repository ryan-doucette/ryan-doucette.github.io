export const intialHomeEnterTransition = () => {
    const greeting = document.getElementById('home-greeting');
    const footer = document.getElementById('home-footer');
    const menuModal = document.getElementById('home-menu-modal');

    greeting?.classList.add('show-greeting-initial');
    footer?.classList.add('show-footer-initial');
    greeting?.classList.remove('show-greeting');
    footer?.classList.remove('show-footer');
    menuModal?.classList.remove('menu-closed');
}

export const leaveHomeTransition = () => {
    const greeting = document.getElementById('home-greeting');
    const footer = document.getElementById('home-footer');

    greeting?.classList.add('hide-greeting');
    footer?.classList.add('hide-footer');
}

export const openMenuTransition = () => {
    const greeting = document.getElementById('home-greeting');
    const footer = document.getElementById('home-footer');
    const menuModal = document.getElementById('home-menu-modal');
    const previewCarouselElement = document.getElementById('previewCarousel');
    const menuCloseButtonElement = document.getElementById('menuCloseButton');

    greeting?.classList.add('hide-greeting');
    footer?.classList.add('hide-footer');
    menuModal?.classList.add('menu-open');
    greeting?.classList.remove('show-greeting');
    footer?.classList.remove('show-footer');
    menuModal?.classList.remove('menu-closed');
    previewCarouselElement?.classList.add('showPreview');
    menuCloseButtonElement?.classList.add('showCloseButton');
    previewCarouselElement?.classList.remove('hidePreview');
    menuCloseButtonElement?.classList.remove('hideCloseButton');
}

export const closeMenuTransition = () => {
    const greeting = document.getElementById('home-greeting');
    const footer = document.getElementById('home-footer');
    const menuModal = document.getElementById('home-menu-modal');
    const previewCarouselElement = document.getElementById('previewCarousel');
    const menuCloseButtonElement = document.getElementById('menuCloseButton');

    greeting?.classList.add('show-greeting');
    footer?.classList.add('show-footer');
    menuModal?.classList.add('menu-closed');
    greeting?.classList.remove('show-greeting-initial');
    footer?.classList.remove('show-footer-initial');
    greeting?.classList.remove('hide-greeting');
    footer?.classList.remove('hide-footer');
    menuModal?.classList.remove('menu-open');
    previewCarouselElement?.classList.add('hidePreview');
    menuCloseButtonElement?.classList.add('hideCloseButton');
    previewCarouselElement?.classList.remove('showPreview');
    menuCloseButtonElement?.classList.remove('showCloseButton');
}

export const leaveMenuTransition = () => {
    const previewCarouselElement = document.getElementById('previewCarousel');
    const menuCloseButtonElement = document.getElementById('menuCloseButton');
    const menuModal = document.getElementById('home-menu-modal');

    menuModal?.classList.add('menu-closed');
    previewCarouselElement?.classList.add('hidePreview');
    menuCloseButtonElement?.classList.add('hideCloseButton');
    menuModal?.classList.remove('menu-open');
    previewCarouselElement?.classList.remove('showPreview');
    menuCloseButtonElement?.classList.remove('showCloseButton');
}