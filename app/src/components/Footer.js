import './styles/_footer.scss'

const Footer = ({menuButtonPressed}) => {
    return (
        <div className="footer">
            <div className='triangle' id='tri1' onClick={menuButtonPressed}/>
            <div className='triangle' id='tri2'/>
            <div className='triangle' id='tri3'/>
        </div>
    );
}

export default Footer