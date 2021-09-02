import './App.css';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

// thirdparty package
import {BrowserRouter as Router, Route} from 'react-router-dom'



function App() {
  return (
    <Router>
     <Header/>
        <section id="top" className="intro-section">
          <Container>
            <Route path='/' component={HomeScreen} exact />
            <Route path='/product/:id' component={ProductScreen} exact />
          </Container>
        </section>
     <Footer/>
    </Router>
  );
}

export default App;
