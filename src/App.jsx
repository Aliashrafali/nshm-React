import React from 'react'
import './App.css';
// import Division from './components/Division';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import About from './components/About';

// props
// import Prop from './components/Prop';
import Bootstrap from './components/Bootstrap';
import Net1 from './assets/images/net1.jpg';

function App() {
  return (
    <>
      <div className='title'>
          <h1 className='text-center'>All Netflix Series Download Here</h1>
      </div>
      <div className='container'>
          <div className='row'>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
               <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
               <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
               <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
              <div className='col-lg-3 col-md-3 col-sm-12'>
                  <Bootstrap 
                    name = 'Netflix'
                    desc = "This is Netflix Series"
                    btn = "Watch Now"
                    img = {Net1}
                  />
              </div>
          </div>
      </div>
      {/* <Prop 
        name = "Kajal"
      /> */}
      {/* <Division /> */}
      {/* <Router>
        <Routes>
          <Route path='/' element={<Navbar />}></Route>
          <Route path='/About' element={<About />}></Route>
        </Routes>
      </Router> */}
    </>
  )
}

export default App
