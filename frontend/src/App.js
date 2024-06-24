import { BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/layout/Layout'
import Navbar from './components/navbar/Navbar'
import Page1 from './components/page/Page1';
import Page2 from './components/page/Page2';
import Page3 from './components/page/Page3';
function App() {
  return (
    
      <BrowserRouter>
      <Routes>
        <Route path="/"element={<Layout children={<Page1/>} />}  />
        <Route  path="/Page2" element={<Layout children={<Page2/>} />}  />
        <Route  path="/Page3" element={<Layout children={<Page3/>} />}  />
      </Routes>
      </BrowserRouter>
    
  );
}

export default App;
