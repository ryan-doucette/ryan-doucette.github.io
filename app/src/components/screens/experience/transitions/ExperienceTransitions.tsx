export const enterExperienceTransition = () => {
    const contactElement0 = document.getElementById('experience-preview-0');
    const contactElement1 = document.getElementById('experience-preview-1');
    const contactElement2 = document.getElementById('experience-preview-2');
    const contactElement3 = document.getElementById('experience-preview-3');
    const contactElement4 = document.getElementById('experience-preview-4');
    const contactElement5 = document.getElementById('experience-preview-5');

    contactElement0?.classList.add('enter-experience-preview-0');
    contactElement0?.classList.remove('leave-experience-preview-0');

    contactElement1?.classList.add('enter-experience-preview-1');
    contactElement1?.classList.remove('leave-experience-preview-1');

    contactElement2?.classList.add('enter-experience-preview-2');
    contactElement2?.classList.remove('leave-experience-preview-2');

    contactElement3?.classList.add('enter-experience-preview-3');
    contactElement3?.classList.remove('leave-experience-preview-3');

    contactElement4?.classList.add('enter-experience-preview-4');
    contactElement4?.classList.remove('leave-experience-preview-4');

    contactElement5?.classList.add('enter-experience-preview-5');
    contactElement5?.classList.remove('leave-experience-preview-5');
}
export const leaveExperienceTransition = () => {
    const contactElement0 = document.getElementById('experience-preview-0');
    const contactElement1 = document.getElementById('experience-preview-1');
    const contactElement2 = document.getElementById('experience-preview-2');
    const contactElement3 = document.getElementById('experience-preview-3');
    const contactElement4 = document.getElementById('experience-preview-4');
    const contactElement5 = document.getElementById('experience-preview-5');

    contactElement0?.classList.add('leave-experience-preview-0');
    contactElement0?.classList.remove('enter-experience-preview-0');

    contactElement1?.classList.add('leave-experience-preview-1');
    contactElement1?.classList.remove('enter-experience-preview-1');

    contactElement2?.classList.add('leave-experience-preview-2');
    contactElement2?.classList.remove('enter-experience-preview-2');

    contactElement3?.classList.add('leave-experience-preview-3');
    contactElement3?.classList.remove('enter-experience-preview-3');

    contactElement4?.classList.add('leave-experience-preview-4');
    contactElement4?.classList.remove('enter-experience-preview-4');

    contactElement5?.classList.add('leave-experience-preview-5');
    contactElement5?.classList.remove('enter-experience-preview-5');
}

export const showExperiencePreviews = () => {
    const experiencePreviewsContainer = document.getElementById('experience-previews-container');
    const fullExperienceContainer = document.getElementById('full-experience-coontainer');
    const experienceScreen = document.getElementById('experienceScreen');

    experiencePreviewsContainer!.style.display = 'none';
    fullExperienceContainer?.classList.add('experience-full-hidden');
    fullExperienceContainer?.classList.remove('experience-full-shown');
    experiencePreviewsContainer?.classList.remove('experience-previews-hidden');
    setTimeout(() => {
        experienceScreen!.style.height = '100%';
        fullExperienceContainer!.style.display = 'none';
        experiencePreviewsContainer!.style.display = 'grid';
        experiencePreviewsContainer?.classList.add('experience-previews-shown');
    }, 300);
}

export const hideExperienceContainers = () => {
    const experiencePreviewsContainer = document.getElementById('experience-previews-container');
    const fullExperienceContainer = document.getElementById('full-experience-coontainer');
    const experienceScreen = document.getElementById('experienceScreen');

    fullExperienceContainer!.style.display = 'none';
    experiencePreviewsContainer?.classList.remove('experience-previews-shown');
    experiencePreviewsContainer?.classList.add('experience-previews-hidden');
    fullExperienceContainer?.classList.remove('experience-full-hidden');
    setTimeout(() => {
        if (window.innerWidth > 768) {
            experienceScreen!.style.height = '100%';
        }
        else {
            experienceScreen!.style.height = 'auto';
        }
        experienceScreen!.classList.add('experience-scroll');
        experiencePreviewsContainer!.style.display = 'none';
        fullExperienceContainer!.style.display = 'flex';
        fullExperienceContainer?.classList.add('experience-full-shown');
    }, 300);
}

export const leaveExperienceFull = () => {
    const fullExperienceContainer = document.getElementById('full-experience-coontainer');
    fullExperienceContainer?.classList.add('experience-full-hidden');
    fullExperienceContainer?.classList.remove('experience-full-shown');
}