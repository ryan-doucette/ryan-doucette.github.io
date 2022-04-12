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

    aboutPortalSection?.classList.add('leave-about');
    aboutPortalSection?.classList.remove('enter-about');

    bioButton?.classList.add('bio-button-leave');
    bioButton?.classList.remove('bio-button-enter');
}