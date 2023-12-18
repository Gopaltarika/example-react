import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from "react";
import { Button } from 'react-bootstrap';
function App() {
  const [data, setData] = useState(false)
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  function over() {
    setData(!data)
    if (data === false) {
      document.body.classList.add("flow");
    }
    else {
      document.body.classList.remove("flow");
    }
  }
  function add() {
    setFirst(first + 2)
  }
  function reset() {
    setFirst(0)
  }
  function sub() {
    setFirst(first - 1)
    if (first === 0) {
      setFirst (first-0)
    }
  }
  function save() {
    setSecond(first + "," + second)
    if (first != 0) {
      setFirst (0)
    }
  }
  return (
    <>
      <div className='flow'>
        <Navbar expand="lg" className="bg-danger">
          <Container>

            <Navbar.Brand className='text-white' href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
              <Nav className="d-flex justify-content-center w-100 align-items-center h-100 justify-content-lg-end">
                <Nav.Link className='text-white' href="#home">Home</Nav.Link>
                <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                <Nav.Link className='text-white' href="#link">Link</Nav.Link>
                <Nav.Link className='text-white' href="#link">Link</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 className='text-center'>useState navbar</h1>
        <Navbar className='bg-black'>
          <Container>
            <Navbar.Brand className='text-white' href="#home">logo</Navbar.Brand>
            <label className='menu' onClick={over}>
              <span></span>
              <span></span>
              <span></span>
            </label>
            <Nav className={`d-flex justify-content-center align-items-center justify-content-md-end mobile ${data ? "end-0" : "close"}`} >
              <Nav.Link className='text-white' href="#home" >Home</Nav.Link>
              <Nav.Link className='text-white' href="#link">Link</Nav.Link>
              <Nav.Link className='text-white' href="#link">Link</Nav.Link>
              <Nav.Link className='text-white' href="#link">Link</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <Container>
          <h2>{first}</h2>
          <h2>{second}</h2>
          <div className='d-flex gap-4'>
          <Button onClick={add}>ADD</Button>
          <Button onClick={sub}>sub</Button>
          <Button onClick={reset}>reset</Button>
          <Button onClick={save}>save</Button>
          </div>
        </Container>
      </div>
    </>
  );
}
export default App;