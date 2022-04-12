export const enterTechTransition = () => {
    const techTitle = document.getElementById('tech-title');
    const skillElementReact = document.getElementById('tech-item-react');
    const skillElementTypeScript = document.getElementById('tech-item-typeScript');
    const skillElementJava = document.getElementById('tech-item-java');
    const skillElementPython = document.getElementById('tech-item-python');
    const skillElementHtml = document.getElementById('tech-item-html');
    const skillElementScss = document.getElementById('tech-item-scss');
    const skillElementAdobe = document.getElementById('tech-item-adobe');
    const skillElementAngular = document.getElementById('tech-item-angular');

    techTitle?.classList.add('enter-tech-title');
    techTitle?.classList.remove('leave-tech-title');

    skillElementReact?.classList.add('enter-tech-item-react');
    skillElementReact?.classList.remove('leave-tech-item-react');

    skillElementTypeScript?.classList.add('enter-tech-item-typeScript');
    skillElementTypeScript?.classList.remove('leave-tech-item-typeScript');

    skillElementJava?.classList.add('enter-tech-item-java');
    skillElementJava?.classList.remove('leave-tech-item-java');

    skillElementPython?.classList.add('enter-tech-item-python');
    skillElementPython?.classList.remove('leave-tech-item-python');

    skillElementHtml?.classList.add('enter-tech-item-html');
    skillElementHtml?.classList.remove('leave-tech-item-html');

    skillElementScss?.classList.add('enter-tech-item-scss');
    skillElementScss?.classList.remove('leave-tech-item-scss');

    skillElementAdobe?.classList.add('enter-tech-item-adobe');
    skillElementAdobe?.classList.remove('leave-tech-item-adobe');

    skillElementAngular?.classList.add('enter-tech-item-angular');
    skillElementAngular?.classList.remove('leave-tech-item-angular');
}
export const leaveTechTransition = () => {
    const techTitle = document.getElementById('tech-title');
    const skillElementReact = document.getElementById('tech-item-react');
    const skillElementTypeScript = document.getElementById('tech-item-typeScript');
    const skillElementJava = document.getElementById('tech-item-java');
    const skillElementPython = document.getElementById('tech-item-python');
    const skillElementHtml = document.getElementById('tech-item-html');
    const skillElementScss = document.getElementById('tech-item-scss');
    const skillElementAdobe = document.getElementById('tech-item-adobe');
    const skillElementAngular = document.getElementById('tech-item-angular');

    techTitle?.classList.add('leave-tech-title');
    techTitle?.classList.remove('enter-tech-title');

    skillElementReact?.classList.add('leave-tech-item-react');
    skillElementReact?.classList.remove('enter-tech-item-react');

    skillElementTypeScript?.classList.add('leave-tech-item-typeScript');
    skillElementTypeScript?.classList.remove('enter-tech-item-typeScript');

    skillElementJava?.classList.add('leave-tech-item-java');
    skillElementJava?.classList.remove('enter-tech-item-java');

    skillElementPython?.classList.add('leave-tech-item-python');
    skillElementPython?.classList.remove('enter-tech-item-python');

    skillElementHtml?.classList.add('leave-tech-item-html');
    skillElementHtml?.classList.remove('enter-tech-item-html');

    skillElementScss?.classList.add('leave-tech-item-scss');
    skillElementScss?.classList.remove('enter-tech-item-scss');

    skillElementAdobe?.classList.add('leave-tech-item-adobe');
    skillElementAdobe?.classList.remove('enter-tech-item-adobe');

    skillElementAngular?.classList.add('leave-tech-item-angular');
    skillElementAngular?.classList.remove('enter-tech-item-angular');
}