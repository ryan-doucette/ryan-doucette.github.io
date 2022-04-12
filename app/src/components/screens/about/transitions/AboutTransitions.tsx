export const enterAboutTransition = () => {
    const aboutPortalSection = document.getElementById('about-portal-section');
    const bioButton = document.getElementById('bio-button');

    aboutPortalSection?.classList.add('enter-about');
    aboutPortalSection?.classList.remove('leave-about');

    bioButton?.classList.add('bio-button-enter');
    bioButton?.classList.remove('bio-button-leave');
}
export const leaveAboutTransition = () => {
    const aboutPortalSection = document.getElementById('about-portal-section');
    const bioButton = document.getElementById('bio-button');
    const bioSection = document.getElementById('bio-section');

    aboutPortalSection?.classList.add('leave-about');
    aboutPortalSection?.classList.remove('enter-about');

    bioButton?.classList.add('bio-button-leave');
    bioButton?.classList.remove('bio-button-enter');

    bioSection?.classList.add('bio-section-closed');
    bioSection?.classList.remove('bio-section-open');
}
export const enterBioScreen = () => {
    const aboutPortalSection = document.getElementById('about-portal-section');
    const bioButton = document.getElementById('bio-button');
    const bioSection = document.getElementById('bio-section');
    const bioCloseButton = document.getElementById('bio-close-button');

    aboutPortalSection?.classList.add('leave-about');
    aboutPortalSection?.classList.remove('enter-about');

    bioButton?.classList.add('bio-button-leave');
    bioButton?.classList.remove('bio-button-enter');

    setTimeout(() => {
        bioSection?.classList.add('bio-section-open');
        bioSection?.classList.remove('bio-section-closed');
        bioCloseButton?.classList.add('bio-section-open');
        bioCloseButton?.classList.remove('bio-section-closed');
    }, 300);
}
export const leaveBioScreen = () => {
    const aboutPortalSection = document.getElementById('about-portal-section');
    const bioButton = document.getElementById('bio-button');
    const bioSection = document.getElementById('bio-section');
    const bioCloseButton = document.getElementById('bio-close-button');

    bioSection?.classList.add('bio-section-closed');
    bioSection?.classList.remove('bio-section-open');

    bioButton?.classList.add('bio-button-enter');
    bioButton?.classList.remove('bio-button-leave');

    bioCloseButton?.classList.add('bio-section-closed');
    bioCloseButton?.classList.remove('bio-section-open');

    setTimeout(() => {
        aboutPortalSection?.classList.add('enter-about');
        aboutPortalSection?.classList.remove('leave-about');
        bioButton?.classList.add('bio-button-enter');
        bioButton?.classList.remove('bio-button-leave');
    }, 300);
}