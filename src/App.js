import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import ItemList from './components/ItemList';
import Navbar from './components/Navbar';
import Newsletter from './components/Newsletter';
import SecondaryNav from './components/SecondaryNav';
import {useState,useEffect} from 'react';


function App() {

  const [width,setWidth] = useState(window.innerWidth);

  const updateWidth = () => {
    console.log(width);
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize",updateWidth);
    return () => window.removeEventListener("resize",updateWidth);
  })

  return (
    <div className="App">
      <section>
          <Navbar width={width}/>
          <Hero width={width}/>
      </section>
      <section>
        <SecondaryNav width={width}/>
        <ItemList/>
        <Newsletter width={width} />
      </section>
      <Footer width={width} />
    </div>
  );
}

export default App;
