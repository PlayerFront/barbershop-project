import { useState } from 'react'
import './App.scss'
import Navigation from './components/sections/Navigation/Navigation';
import Header from './components/sections/Header/Header';


function App() {
    return (
        <div className='App'>
            <Navigation />
            <Header />
        </div>
    )
}

export default App;
