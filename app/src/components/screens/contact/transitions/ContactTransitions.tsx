export const enterContactTransition = () => {
    const contactElement = document.getElementById('contactContainer');

    contactElement?.classList.add('enter-contact');
    contactElement?.classList.remove('leave-contact');
}
export const leaveContactTransition = () => {
    const contactElement = document.getElementById('contactContainer');

    contactElement?.classList.add('leave-contact');
    contactElement?.classList.remove('enter-contact');
}