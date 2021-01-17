import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SecondaryNav from './components/SecondaryNav';
import ItemList from './components/ItemList';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <section>
          <Navbar/>
          <Hero/>
      </section>
      <section>
        <SecondaryNav/>
        <ItemList/>
        <Newsletter/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
