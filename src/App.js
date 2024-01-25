import './App.css';
import Home from './Pages/Home';
import Mynav from './components/Mynav';
import { Link, Route, Routes } from 'react-router-dom';
import Todo from './components/Todo';
function App() {

  return (
    <>
       <Link to="/home">home</Link>
       <Link to="/nav">next</Link>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/nav' element={<Mynav />} />
      </Routes>
      <Todo />
    </>
  );

}
export default App;