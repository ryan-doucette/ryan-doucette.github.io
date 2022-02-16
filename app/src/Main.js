import './Main.css';
import Greeting from '../src/components/Greeting';
import Header from './components/Header';

function Main() {
  return (
    <div className="Main">
      <Header/>
      <div className='GreetingContainer'>
        <Greeting/>
      </div>
    </div>
  );
}

export default Main;
