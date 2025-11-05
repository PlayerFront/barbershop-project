import { Suspense, useState, lazy } from 'react';
// import { HashRouter as Router } from 'react-router-dom';
import './App.scss';
import Navigation from './components/sections/Navigation/Navigation';
import Header from './components/sections/Header/Header';
import About from './components/sections/About/About';
import Services from './components/sections/Services/Services';
import Cosmetics from './components/sections/Cosmetics/Cosmetics';
import Reviews from './components/sections/Reviews/Reviews';
import Contacts from './components/sections/Contacts/Contacts';
import WidgetController from './components/common/WidgetController/WidgetController';

const Footer = lazy(() => import('./components/sections/Footer/Footer'));
const CookiesBanner = lazy(() => import('./components/common/CookiesBanner/CookiesBanner'));
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

            <Suspense fallback={null}>
                <Footer />
                <CookiesBanner />
            </Suspense>

            <WidgetController />
            <div style={{ display: 'none' }}>
                <h1>Барбершоп в Чудово - мужские стрижки и бритье</h1>
                <p>Профессиональный барбершоп в Чудово предлагает мужские стрижки, оформление бороды, классическое бритье.
                    Наши барберы с опытом создадут стильный образ. Работаем с 10:00 до 21:00, запись онлайн.</p>

                <h2>Услуги барбершопа в Чудово</h2>
                <p>Мужская стрижка, детская стрижка, оформление бороды, бритье головы, королевское бритье.</p>

                <h3>Барбершоп Чудово недорого</h3>
                <p>Качественные услуги барбера по доступным ценам в городе Чудово.</p>
            </div>
        </div>
    )
}

export default App;
