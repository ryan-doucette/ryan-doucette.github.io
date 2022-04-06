import { intialHomeEnterTransition } from './components/screens/home/transitions/HomeTransitions';
import { enterContactTransition } from './components/screens/contact/transitions/ContactTransitions';
import { enterExperienceTransition } from './components/screens/experience/transitions/ExperienceTransitions';
import { enterSkillsTransition } from './components/screens/skills/transitions/SkillsTransitions';

const handleNavigate = (nextScreen: string, currentScreen: string, navigate: any) => {
    const transitionLength = () => {
        switch(currentScreen) {
            case 'home': 
                return 900;
            case 'menu': 
                return 1800;
            case 'about':
                return 1000;
            case 'skills':
                return 2000;
            case 'experience':
                return 1500;
            case 'experienceFull':
                return 600;
            case 'contact':
                return 500;
        } 
    }

    const addEnterTransitions = () => {
        switch(nextScreen) {
            case 'home': 
                intialHomeEnterTransition();
                break;
            case 'about':
                break;
            case 'skills':
                enterSkillsTransition();
                break;
            case 'experience':
                enterExperienceTransition();
                break;
            case 'contact':
                enterContactTransition();
                break;
        } 
    }
    const disableNavigation = () => {
        document.getElementById('desktopHeader')!.style.pointerEvents = 'none';
        document.getElementById('dropDown')!.style.pointerEvents = 'none';
        document.getElementById('site-icon')!.style.pointerEvents = 'none';
    }
    const enableNavigation = () => {
        document.getElementById('desktopHeader')!.style.pointerEvents = 'auto';
        document.getElementById('dropDown')!.style.pointerEvents = 'auto';
        document.getElementById('site-icon')!.style.pointerEvents = 'auto';
    }

    disableNavigation();
    setTimeout(() => {
        enableNavigation();
        if(nextScreen === 'home') {
            navigate('/');
            addEnterTransitions();
        }
        else {
            navigate(nextScreen);
            addEnterTransitions();
        }
    }, transitionLength());
}

export default handleNavigate;