export const enterExperienceTransition = () => {
  const contactElement0 = document.getElementById("experience-preview-0");
  const contactElement1 = document.getElementById("experience-preview-1");
  const contactElement2 = document.getElementById("experience-preview-2");
  const contactElement3 = document.getElementById("experience-preview-3");
  const contactElement4 = document.getElementById("experience-preview-4");
  const contactElement5 = document.getElementById("experience-preview-5");
  const contactElement6 = document.getElementById("experience-preview-6");
  const resumeButtonContainer = document.getElementById(
    "resume-button-container"
  );

  contactElement0?.classList.add("enter-experience-preview-0");
  contactElement0?.classList.remove("leave-experience-preview-0");

  contactElement1?.classList.add("enter-experience-preview-1");
  contactElement1?.classList.remove("leave-experience-preview-1");

  contactElement2?.classList.add("enter-experience-preview-2");
  contactElement2?.classList.remove("leave-experience-preview-2");

  contactElement3?.classList.add("enter-experience-preview-3");
  contactElement3?.classList.remove("leave-experience-preview-3");

  contactElement4?.classList.add("enter-experience-preview-4");
  contactElement4?.classList.remove("leave-experience-preview-4");

  contactElement5?.classList.add("enter-experience-preview-5");
  contactElement5?.classList.remove("leave-experience-preview-5");

  contactElement6?.classList.add("enter-experience-preview-6");
  contactElement6?.classList.remove("leave-experience-preview-6");

  resumeButtonContainer?.classList.add("enter-experience-preview-0");
  resumeButtonContainer?.classList.remove("leave-experience-preview-0");
};
export const leaveExperienceTransition = () => {
  const contactElement0 = document.getElementById("experience-preview-0");
  const contactElement1 = document.getElementById("experience-preview-1");
  const contactElement2 = document.getElementById("experience-preview-2");
  const contactElement3 = document.getElementById("experience-preview-3");
  const contactElement4 = document.getElementById("experience-preview-4");
  const contactElement5 = document.getElementById("experience-preview-5");
  const contactElement6 = document.getElementById("experience-preview-6");
  const resumeButtonContainer = document.getElementById(
    "resume-button-container"
  );

  contactElement0?.classList.add("leave-experience-preview-0");
  contactElement0?.classList.remove("enter-experience-preview-0");

  contactElement1?.classList.add("leave-experience-preview-1");
  contactElement1?.classList.remove("enter-experience-preview-1");

  contactElement2?.classList.add("leave-experience-preview-2");
  contactElement2?.classList.remove("enter-experience-preview-2");

  contactElement3?.classList.add("leave-experience-preview-3");
  contactElement3?.classList.remove("enter-experience-preview-3");

  contactElement4?.classList.add("leave-experience-preview-4");
  contactElement4?.classList.remove("enter-experience-preview-4");

  contactElement5?.classList.add("leave-experience-preview-5");
  contactElement5?.classList.remove("enter-experience-preview-5");

  contactElement6?.classList.add("leave-experience-preview-6");
  contactElement6?.classList.remove("enter-experience-preview-6");

  resumeButtonContainer?.classList.remove("resume-button-shown");
  resumeButtonContainer?.classList.add("leave-experience-preview-0");
  resumeButtonContainer?.classList.remove("enter-experience-preview-0");
};

export const showExperiencePreviews = () => {
  const experiencePreviewsContainer = document.getElementById(
    "experience-previews-container"
  );
  const fullExperienceContainer = document.getElementById(
    "full-experience-container"
  );
  const experienceScreen = document.getElementById("experienceScreen");
  const resumeButtonContainer = document.getElementById(
    "resume-button-container"
  );

  const contactElement0 = document.getElementById("experience-preview-0");
  const contactElement1 = document.getElementById("experience-preview-1");
  const contactElement2 = document.getElementById("experience-preview-2");
  const contactElement3 = document.getElementById("experience-preview-3");
  const contactElement4 = document.getElementById("experience-preview-4");
  const contactElement5 = document.getElementById("experience-preview-5");
  const contactElement6 = document.getElementById("experience-preview-6");

  contactElement0?.classList.remove("enter-experience-preview-0");
  contactElement1?.classList.remove("enter-experience-preview-1");
  contactElement2?.classList.remove("enter-experience-preview-2");
  contactElement3?.classList.remove("enter-experience-preview-3");
  contactElement4?.classList.remove("enter-experience-preview-4");
  contactElement5?.classList.remove("enter-experience-preview-5");
  contactElement6?.classList.remove("enter-experience-preview-6");

  experiencePreviewsContainer!.style.display = "none";
  resumeButtonContainer!.style.display = "none";

  fullExperienceContainer?.classList.add("experience-full-hidden");
  fullExperienceContainer?.classList.remove("experience-full-shown");
  experiencePreviewsContainer?.classList.remove("experience-previews-hidden");

  resumeButtonContainer?.classList.remove("resume-button-hidden");
  setTimeout(() => {
    experienceScreen!.style.height = "100%";
    fullExperienceContainer!.style.display = "none";
    experiencePreviewsContainer!.style.display = "grid";
    resumeButtonContainer!.style.display = "flex";
    experiencePreviewsContainer?.classList.add("experience-previews-shown");
    resumeButtonContainer?.classList.add("resume-button-shown");
  }, 300);
};

export const hideExperienceContainers = () => {
  const experiencePreviewsContainer = document.getElementById(
    "experience-previews-container"
  );
  const fullExperienceContainer = document.getElementById(
    "full-experience-container"
  );
  const experienceScreen = document.getElementById("experienceScreen");
  const resumeButtonContainer = document.getElementById(
    "resume-button-container"
  );

  fullExperienceContainer!.style.display = "none";
  experiencePreviewsContainer?.classList.remove("experience-previews-shown");
  experiencePreviewsContainer?.classList.add("experience-previews-hidden");
  fullExperienceContainer?.classList.remove("experience-full-hidden");

  resumeButtonContainer?.classList.remove("enter-experience-preview-0");
  resumeButtonContainer?.classList.remove("resume-button-shown");
  resumeButtonContainer?.classList.add("resume-button-hidden");
  setTimeout(() => {
    if (window.innerWidth > 768) {
      experienceScreen!.style.height = "100%";
    } else {
      experienceScreen!.style.height = "auto";
    }
    experienceScreen!.classList.add("experience-scroll");
    experiencePreviewsContainer!.style.display = "none";
    resumeButtonContainer!.style.display = "none";
    fullExperienceContainer!.style.display = "flex";
    fullExperienceContainer?.classList.add("experience-full-shown");
  }, 300);
};

export const leaveExperienceFull = () => {
  const fullExperienceContainer = document.getElementById(
    "full-experience-container"
  );
  fullExperienceContainer?.classList.add("experience-full-hidden");
  fullExperienceContainer?.classList.remove("experience-full-shown");
};

export const openResumeButtonContainer = () => {
  const resumeButtonContainer = document.getElementById(
    "resume-button-container"
  );
  const resumeButtonOpenContents = document.getElementById(
    "resume-button-open-contents"
  );
  const resumeButtonCloseContents = document.getElementById(
    "resume-button-close-contents"
  );

  resumeButtonContainer?.classList.add("resumeButtonContainerOpen");
  resumeButtonContainer?.classList.remove("resumeButtonContainerClose");

  resumeButtonCloseContents?.classList.add("hideResumeButtonContents");
  resumeButtonCloseContents?.classList.remove("showResumeButtonContents");

  resumeButtonOpenContents?.classList.remove("hideResumeButtonContents");
  setTimeout(() => {
    resumeButtonOpenContents?.classList.add("showResumeButtonContents");
  }, 300);
};

export const closeResumeButtonContainer = () => {
  const resumeButtonContainer = document.getElementById(
    "resume-button-container"
  );
  const resumeButtonOpenContents = document.getElementById(
    "resume-button-open-contents"
  );
  const resumeButtonCloseContents = document.getElementById(
    "resume-button-close-contents"
  );

  resumeButtonContainer?.classList.add("resumeButtonContainerClose");
  resumeButtonContainer?.classList.remove("resumeButtonContainerOpen");

  resumeButtonOpenContents?.classList.add("hideResumeButtonContents");
  resumeButtonOpenContents?.classList.remove("showResumeButtonContents");

  resumeButtonCloseContents?.classList.remove("hideResumeButtonContents");
  setTimeout(() => {
    resumeButtonCloseContents?.classList.add("showCloseResumeButtonContents");
  }, 300);
};
