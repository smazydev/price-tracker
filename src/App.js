import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <section>
          <Hero/>
      </section>
    </div>
  );
}

export default App;
