import { useState } from 'react'
import './App.scss'
import Navigation from './components/sections/Navigation/Navigation';
import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';
import Services from './components/sections/Services/Services';


function App() {
    return (
        <div className='App'>
            <Navigation />
            <Header />
            <About />
            <Services />
        </div>
    )
}

export default App;
