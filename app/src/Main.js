import './Main.css';
import Greeting from '../src/components/Greeting';
import Header from './components/Header';
import Footer from './components/Footer';

function Main() {
  return (
    <div className="Main">
      <Header/>
      <div className='GreetingContainer'>
        <Greeting/>
      </div>
      <Footer/>
    </div>
  );
}

export default Main;
