import '../styles/App.css';
import Header from './Header';
import Home from './Home';
import SearchPage from './SearchPage';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    // BEM
    <div className="app">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/search" element={<SearchPage />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </ BrowserRouter>
    </div>
  );
}

export default App;
