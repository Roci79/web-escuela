// import logo from './logo.svg';
// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './screens/Home';
import About from './screens/About';
import Blog from './screens/Blog';
import Class from './screens/Class';
import Contact from './screens/Contact';
import Gallery from './screens/Gallery';
import Team from './screens/Team';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';









function App() {
  return (
    <Router>
      <div className='App'>
        <NavigationBar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Class" element={<Class />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
          <Footer/>
      </div>
    </Router>
  );
}

export default App;
