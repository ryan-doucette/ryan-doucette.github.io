const handleNavigate = (category: string, currentScreen: string, navigate: any) => {
    console.log("NAVIGATE: " + currentScreen + " TO " + category);
    const transitionLength = () => {
        switch(currentScreen) {
            case 'Home': 
                return 1000;
            case 'Menu': 
                return 1800;
            case 'About':
                return 1000;
            case 'Skills':
                return 1000;
            case 'Experience':
                return 1000;
            case 'Contact':
                return 1000;
        } 
    }

    setTimeout(() => {
        if(category === 'Home') {
            navigate('/');
        }
        else if(category === 'Menu') {
            // 
        }
        else {
            navigate(category.toLowerCase());
        }
    }, transitionLength());
}

export default handleNavigate;