import { useState } from 'react'
import './App.scss'
import Navigation from './components/sections/Navigation/Navigation';
import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';
import Services from './components/sections/Services/Services';
import Cosmetics from './components/sections/Cosmetics/Cosmetics';
import Reviews from './components/sections/Reviews/Reviews';
import Contacts from './components/sections/Contacts/Contacts';


function App() {
    return (
        <div className='App'>
            <Navigation />
            <Header />
            <About />
            <Services />
            <Cosmetics />
            <Reviews />
            <Contacts />
        </div>
    )
}

export default App;
