import './App.css';
import {BrowserRouter as Router , Routes ,Route } from 'react-router-dom'
import Menu from './Containers/Menu'
import Burgers from './Containers/Burgers'
import Salades from './Containers/Salades'
import Snacks from './Containers/Snacks'
import Desserts from './Containers/Dessert'
import Boissons from './Containers/Boissons'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
 
  return (
    <div className="container site" style={{background: "url(../public/images/bg.png)"}}>
      <h1 className="text-logo"><img src="/Burger.png" alt="Bootstrap" width="46" height="46"/>Go My Burger<img src="/Burger.png" alt="Bootstrap" width="46" height="46"/></h1>
      <div style={{display:"flex"}}>
     <Router>
      <div>
          <Navbar/>
        <hr />
        <Routes>
        <Route path="/" element={<Menu />}/>
        <Route path="/Burgers" element={<Burgers />}/>
        <Route path="/Salades" element={<Salades />}/>
        <Route path="/Snacks" element={<Snacks />}/>
        <Route path="/Desserts" element={<Desserts />}/>
        <Route path="/Boissons" element={<Boissons />}/>
        </Routes>
      </div>
    </Router>
    </div>
     <Footer/> 
    </div>
  );
}

export default App;
