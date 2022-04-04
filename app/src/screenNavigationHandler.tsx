import { intialHomeEnterTransition } from './components/screens/home/transitions/HomeTransitions';
import { enterContactTransition } from './components/screens/contact/transitions/ContactTransitions';
import { enterExperienceTransition } from './components/screens/experience/transitions/ExperienceTransitions';

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
                return 1000;
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
                break;
            case 'experience':
                enterExperienceTransition();
                break;
            case 'contact':
                enterContactTransition();
                break;
        } 
    }

    setTimeout(() => {
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