export const enterSkillsTransition = () => {
    const skillsTitle = document.getElementById('skills-title');
    const skillElementReact = document.getElementById('skills-item-react');
    const skillElementTypeScript = document.getElementById('skills-item-typeScript');
    const skillElementJava = document.getElementById('skills-item-java');
    const skillElementPython = document.getElementById('skills-item-python');
    const skillElementHtml = document.getElementById('skills-item-html');
    const skillElementScss = document.getElementById('skills-item-scss');
    const skillElementAdobe = document.getElementById('skills-item-adobe');
    const skillElementAngular = document.getElementById('skills-item-angular');

    skillsTitle?.classList.add('enter-skills-title');
    skillsTitle?.classList.remove('leave-skills-title');

    skillElementReact?.classList.add('enter-skills-item-react');
    skillElementReact?.classList.remove('leave-skills-item-react');

    skillElementTypeScript?.classList.add('enter-skills-item-typeScript');
    skillElementTypeScript?.classList.remove('leave-skills-item-typeScript');

    skillElementJava?.classList.add('enter-skills-item-java');
    skillElementJava?.classList.remove('leave-skills-item-java');

    skillElementPython?.classList.add('enter-skills-item-python');
    skillElementPython?.classList.remove('leave-skills-item-python');

    skillElementHtml?.classList.add('enter-skills-item-html');
    skillElementHtml?.classList.remove('leave-skills-item-html');

    skillElementScss?.classList.add('enter-skills-item-scss');
    skillElementScss?.classList.remove('leave-skills-item-scss');

    skillElementAdobe?.classList.add('enter-skills-item-adobe');
    skillElementAdobe?.classList.remove('leave-skills-item-adobe');

    skillElementAngular?.classList.add('enter-skills-item-angular');
    skillElementAngular?.classList.remove('leave-skills-item-angular');
}
export const leaveSkillsTransition = () => {
    const skillsTitle = document.getElementById('skills-title');
    const skillElementReact = document.getElementById('skills-item-react');
    const skillElementTypeScript = document.getElementById('skills-item-typeScript');
    const skillElementJava = document.getElementById('skills-item-java');
    const skillElementPython = document.getElementById('skills-item-python');
    const skillElementHtml = document.getElementById('skills-item-html');
    const skillElementScss = document.getElementById('skills-item-scss');
    const skillElementAdobe = document.getElementById('skills-item-adobe');
    const skillElementAngular = document.getElementById('skills-item-angular');

    skillsTitle?.classList.add('leave-skills-title');
    skillsTitle?.classList.remove('enter-skills-title');

    skillElementReact?.classList.add('leave-skills-item-react');
    skillElementReact?.classList.remove('enter-skills-item-react');

    skillElementTypeScript?.classList.add('leave-skills-item-typeScript');
    skillElementTypeScript?.classList.remove('enter-skills-item-typeScript');

    skillElementJava?.classList.add('leave-skills-item-java');
    skillElementJava?.classList.remove('enter-skills-item-java');

    skillElementPython?.classList.add('leave-skills-item-python');
    skillElementPython?.classList.remove('enter-skills-item-python');

    skillElementHtml?.classList.add('leave-skills-item-html');
    skillElementHtml?.classList.remove('enter-skills-item-html');

    skillElementScss?.classList.add('leave-skills-item-scss');
    skillElementScss?.classList.remove('enter-skills-item-scss');

    skillElementAdobe?.classList.add('leave-skills-item-adobe');
    skillElementAdobe?.classList.remove('enter-skills-item-adobe');

    skillElementAngular?.classList.add('leave-skills-item-angular');
    skillElementAngular?.classList.remove('enter-skills-item-angular');
}