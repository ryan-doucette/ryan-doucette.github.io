import CloseButton from '../components/CloseButton.js';

import './styles/_menuModal.scss';

const MenuModal = ({menuIsRevealed, closeButtonPressed}) => {

    return (
        <div className="menuModal">
            <h1>Menu Modal</h1>
            <div 
                className='closeButtonContainer' 
                id= {menuIsRevealed ? 'showCloseButton' : 'hideCloseButton'} 
                onClick={closeButtonPressed}
            >
                <CloseButton/>
            </div>
        </div>
    );
}

export default MenuModal;
