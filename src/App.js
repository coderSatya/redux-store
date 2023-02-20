import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';
import ProductListing from './components/ProductListing';
import ProductDetail from './components/ProductDetail';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navigation from './Router/Navigation';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navigation/>
    </BrowserRouter>
    </div>
  );
}

export default App;
