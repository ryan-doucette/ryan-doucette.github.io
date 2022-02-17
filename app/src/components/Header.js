/* eslint-disable jsx-a11y/anchor-has-content */
import './styles/Header.css';

const Header = () => {
  return (
    <div className="header">
        <a className='icons' id='email' href='mailto:doucette.ry@northeastern.edu' aria-label='email' aria-hidden='true'/>
        <a className='icons' id='linkedin' href='https://www.linkedin.com/in/ryan-doucette/' aria-label='linkedin' aria-hidden='true'/>
        <a className='icons' id='github' href='https://github.com/ryan-doucette' aria-label='github' aria-hidden='true'/>
    </div>
  );
}

export default Header;
