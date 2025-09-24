import { useState } from 'react'
import './App.scss'
import Navigation from './components/sections/Navigation/Navigation';
import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';


function App() {
    return (
        <div className='App'>
            <Navigation />
            <Header />
            <About />
        </div>
    )
}

export default App;
