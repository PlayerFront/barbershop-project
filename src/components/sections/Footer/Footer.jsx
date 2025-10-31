import { useState } from 'react';
import './_footer.scss';
import LogoFooter from '../../ui/LogoFooter/LogoFooter';
import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import YClientsIcon from '../../ui/YClientsIcon/YClientsIcon';
import VkIcon from '../../ui/VkIcon/VkIcon';
import Modal from '../../common/Modal/Modal';
import PrivacyPolicy from '../../policies/PrivacyPolicy/PrivacyPolicy';
import CookiesPolicy from '../../policies/CookiesPolicy/CookiesPolicy';

const Footer = () => {
    const [modalType, setModalType] = useState(null);

    /**
     * Renders modal content based on modalType
     * @returns {JSX.Element|null} Modal content component
     */
    const renderModalContent = () => {
        switch (modalType) {
            case 'privacy':
                return <PrivacyPolicy />;
            case 'cookies':
                return <CookiesPolicy />
            default:
                return null;
        }
    }

    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="footer__header footer__container">
                    <div className='footer__header-top'>
                        <LogoFooter />
                        <p className="footer__description">Барбершоп в г. Чудово</p>
                    </div>
                    <p className="footer__copyright">© 2025</p>
                </div>
                <div className="footer__cookies footer__container">
                    <button
                        className='footer__link'
                        onClick={() => setModalType('cookies')}
                    >
                        Cookies
                    </button>
                    <button
                        className='footer__link'
                        onClick={() => setModalType('privacy')}
                    >
                        Политика конфиденциальности
                    </button>
                    <Modal
                        isOpen={!!modalType}
                        onClose={() => setModalType(null)}
                        title={modalType === 'cookies' ? "Политика использования cookies" : "Политика конфиденциальности"}
                    >
                        {renderModalContent()}
                    </Modal>
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
                    <YClientsIcon className="footer__icon" />
                    <VkIcon className="footer__icon" />
                </div>
            </div>
            <p className="footer__development">
                Разработка сайта: <a href="https://www.behance.net/desigdi" target="_blank" rel="noopener noreferrer">дизайн</a> и <a href="https://github.com/PlayerFront" target="_blank" rel="noopener noreferrer">разработка</a>
            </p>
        </footer>
    );
};

export default Footer;