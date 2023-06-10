import React from 'react'
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './components/Navbar/NavigationBar'
import Intro from './components/Intro/Intro'
import Second from './components/Second/Second'
import TopNavigationBar from './components/Navbar/TopNavigationBar';

const App = () => {
  return (
    <div className="parent">
      <div className='child'>
        <TopNavigationBar />
        <NavigationBar />
        <div className='content'>
          <Intro />
          <Second />
        </div>
      </div>

    </div>
  )
}

export default App