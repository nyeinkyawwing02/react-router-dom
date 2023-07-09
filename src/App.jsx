import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog/Main';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AppLayout from './layouts/AppLayout';
import BlogDetails from './pages/Blog/Details';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path='/blogs'>
            <Route index element={<Blog />} />
            <Route path=':id' element={<BlogDetails />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
