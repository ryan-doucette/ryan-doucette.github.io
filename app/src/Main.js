import './Main.css';
import Greeting from '../src/components/Greeting';

function Main() {
  return (
    <div className="Main">
      <div className='GreetingContainer'>
        <Greeting/>
      </div>
    </div>
  );
}

export default Main;
