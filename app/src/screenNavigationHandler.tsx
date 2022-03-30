const handleNavigate = (category: string, currentScreen: string, navigate: any) => {
    const transitionLength = () => {
        switch(currentScreen) {
            case 'home': 
                return 1000;
            case 'menu': 
                return 1800;
            case 'about':
                return 1000;
            case 'skills':
                return 1000;
            case 'experience':
                return 1000;
            case 'contact':
                return 1000;
        } 
    }

    setTimeout(() => {
        if(category === 'home') {
            navigate('/');
        }
        else if (category !== 'menu'){
            navigate(category);
        }
    }, transitionLength());
}

export default handleNavigate;