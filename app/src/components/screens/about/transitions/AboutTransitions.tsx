export const enterAboutTransition = () => {
    const aboutPortalSection = document.getElementById('about-portal-section');

    aboutPortalSection?.classList.add('enter-about');
    aboutPortalSection?.classList.remove('leave-about');
}
export const leaveAboutTransition = () => {
    const aboutPortalSection = document.getElementById('about-portal-section');

    aboutPortalSection?.classList.add('leave-about');
    aboutPortalSection?.classList.remove('enter-about');
}