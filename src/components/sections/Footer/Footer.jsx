import LogoAccent from '../../ui/Logo/LogoAccent/LogoAccent';
import LogoFooter from '../../ui/LogoFooter/LogoFooter';
import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import TelegramIcon from '../../ui/TelegramIcon/TelegramIcon';
import VkIcon from '../../ui/VkIcon/VkIcon';
import './_footer.scss';

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="footer__header footer__container">
                    <LogoFooter />
                    <p className="footer__description">Барбершоп в г. Чудово</p>
                    <p className="footer__copyright">© 2025</p>
                </div>
                <div className="footer__cookies footer__container">
                    <p className="footer__text">Cookies</p>
                    <p className="footer__text">Политика конфиденциальности</p>
                </div>
                <div className="footer__navigation footer__container">
                    <a href="#about" className="footer__link">Обо мне</a>
                    <a href="#services" className="footer__link">Услуги и цены</a>
                    <a href="#cosmetics" className="footer__link">Косметика</a>
                    <a href="#reviews" className="footer__link">Отзывы</a>
                    <a href="#contacts" className="footer__link">Контакты</a>
                </div>
                <div className="footer__social footer__container">
                    <PhoneIcon className="footer__icon" />
                    <TelegramIcon className="footer__icon" />
                    <VkIcon className="footer__icon" />
                </div>
            </div>
            <p className="footer__development">
                Разработка сайта: <a href="https://www.behance.net/desigdi" target="_blank" rel="noopener noreferrer">дизайн</a> и <a href="https://github.com/PlayerFront" target="_blank" rel="noopener noreferrer">разработка</a>
            </p>
        </footer>
    )
}

export default Footer;