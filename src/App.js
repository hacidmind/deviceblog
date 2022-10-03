import './App.css';
import Home from './components/Home';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar';
import Blog from './components/Blog';
import Car from './components/Car';
import Staff from './components/Staff';
import ErrorPage from './components/ErrorPage';
import BlogPage from './components/BlogPage';
import NewDevice from './components/NewDevice';
// import MyHome from './components/MyHome';


function App() {
 
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/cars' element={<Car />} />
        <Route path='/staff' element={<Staff />} />
        <Route path='/newdevice' element={<NewDevice />} />
        <Route path='/blog/:id' element={<BlogPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>


    </BrowserRouter>
  );
}

export default App;
