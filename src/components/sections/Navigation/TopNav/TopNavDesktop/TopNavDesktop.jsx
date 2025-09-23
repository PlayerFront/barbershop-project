import './_top-nav-desktop.scss';
import LogoAccent from '../../../../ui/Logo/LogoAccent/LogoAccent';

const TopNavDesktop = () => {
    return (
        <div className="top-nav-desktop">
            <LogoAccent />

            <nav className="top-nav-desktop__menu">
                <a href="#about" className="top-nav-desktop__link">Обо мне</a>
                <a href="#services" className="top-nav-desktop__link">Услуги и цены</a>
                <a href="#cosmetics" className="top-nav-desktop__link">Косметика</a>
                <a href="#reviews" className="top-nav-desktop__link">Отзывы</a>
                <a href="#contacts" className="top-nav-desktop__link">Контакты</a>
            </nav>
        </div>
    );
};

export default TopNavDesktop;