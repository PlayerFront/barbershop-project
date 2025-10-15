import { useState } from 'react';
import LogoAccent from '../../ui/Logo/LogoAccent/LogoAccent';
import LogoFooter from '../../ui/LogoFooter/LogoFooter';
import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import TelegramIcon from '../../ui/TelegramIcon/TelegramIcon';
import VkIcon from '../../ui/VkIcon/VkIcon';
import './_footer.scss';
import Modal from '../../common/Modal/Modal';

const Footer = () => {
    const [modalType, setModalType] = useState(null);

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
                    {/* <p className="footer__text">Cookies</p>
                    <p className="footer__text">Политика конфиденциальности</p> */}
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
            <Modal
                isOpen={modalType === 'cookies'}
                onClose={() => setModalType(null)}
                title="Политика использования cookies"
            >
                <div className="modal-content">
                    <div className="cookies-policy">
                        <div className="cookies-policy__header">
                            <p className="cookies-policy__date"><strong>Последнее обновление:</strong> 15 октября 2025</p>
                        </div>

                        <div className="cookies-policy__intro">
                            <p>Эта Политика использования Cookies объясняет, что такое Cookies и как Мы их используем. Вам следует прочитать эту политику, чтобы понимать, какие типы cookies Мы используем и как эта информация используется.</p>
                            <p>Мы не храним конфиденциальную личную информацию в используемых нами Cookies.</p>
                        </div>

                        <section className="cookies-policy__section">
                            <h2 className="cookies-policy__section-title">Толкование и определения</h2>
                            <div className="cookies-policy__definitions">
                                <div className="definition-item">
                                    <span className="definition-item__term">Компания</span>
                                    <span className="definition-item__description">(именуемая как «Компания», «Мы», «Нас» или «Наш» в данной Политике) относится к К53.</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Cookies</span>
                                    <span className="definition-item__description">небольшие файлы, которые размещаются на Вашем устройстве веб-сайтом, содержащие сведения о вашей истории просмотров.</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Веб-сайт</span>
                                    <span className="definition-item__description">относится к К53, доступный по <a href="http://localhost:5173" target="_blank">http://localhost:5173</a></span>
                                </div>
                            </div>
                        </section>

                        <section className="cookies-policy__section">
                            <h2 className="cookies-policy__section-title">Использование Cookies</h2>

                            <h3 className="cookies-policy__subtitle">Типы Cookies, которые Мы используем</h3>
                            <p>Cookies могут быть «Постоянными» или «Сессионными». Мы используем оба типа для целей, указанных ниже:</p>

                            <div className="cookies-types">
                                <div className="cookie-type">
                                    <h4 className="cookie-type__title">Необходимые / Основные Cookies</h4>
                                    <div className="cookie-type__details">
                                        <span><strong>Тип:</strong> Сессионные Cookies</span>
                                        <span><strong>Администрируется:</strong> Нами</span>
                                    </div>
                                    <p className="cookie-type__purpose">Эти Cookies необходимы для предоставления Вам услуг, доступных через Веб-сайт. Без этих Cookies услуги не могут быть предоставлены.</p>
                                </div>

                                <div className="cookie-type">
                                    <h4 className="cookie-type__title">Функциональные Cookies</h4>
                                    <div className="cookie-type__details">
                                        <span><strong>Тип:</strong> Постоянные Cookies</span>
                                        <span><strong>Администрируется:</strong> Нами</span>
                                    </div>
                                    <p className="cookie-type__purpose">Эти Cookies позволяют нам запоминать ваш выбор при использовании Веб-сайта, чтобы предоставить более персонализированный опыт.</p>
                                </div>
                            </div>
                        </section>

                        <section className="cookies-policy__section">
                            <h2 className="cookies-policy__section-title">Ваш выбор относительно Cookies</h2>
                            <p>Если Вы предпочитаете избегать использования Cookies, Вы можете отключить их в настройках браузера:</p>

                            <div className="browser-links">
                                <a href="https://support.google.com/accounts/answer/32050" target="_blank" className="browser-link">Chrome</a>
                                <a href="http://support.microsoft.com/kb/278835" target="_blank" className="browser-link">Internet Explorer</a>
                                <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" className="browser-link">Firefox</a>
                                <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" className="browser-link">Safari</a>
                            </div>
                        </section>

                        <section className="cookies-policy__section">
                            <h2 className="cookies-policy__section-title">Контакты</h2>
                            <div className="contact-methods">
                                <p>По телефону: <a href="tel:+7996939902" className="contact-link">+7 (996) 939-99-02</a></p>
                                <p>Через сайт: <a href="http://localhost:5173" target="_blank" className="contact-link">http://localhost:5173</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </Modal>
            <Modal
                isOpen={modalType === 'privacy'}
                onClose={() => setModalType(null)}
                title="Политика конфиденциальности"
            >
                <p>
                    1. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    2. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br />
                    3. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </Modal>
        </footer>
    );
};

export default Footer;