import { useState } from 'react';
import LogoAccent from '../../ui/Logo/LogoAccent/LogoAccent';
import LogoFooter from '../../ui/LogoFooter/LogoFooter';
import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import YClientsIcon from '../../ui/YClientsIcon/YClientsIcon';
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
                    <YClientsIcon className="footer__icon" />
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
                <div className="modal-content">
                    <div className="privacy-policy">
                        <div className="privacy-policy__header">
                            <p className="privacy-policy__date"><strong>Последнее обновление:</strong> 16 октября 2025</p>
                        </div>

                        <div className="privacy-policy__intro">
                            <p>Настоящая Политика конфиденциальности описывает наши принципы и процедуры сбора, использования и раскрытия Вашей информации при использовании Сервиса и рассказывает о Ваших правах на конфиденциальность и о том, как закон защищает Вас.</p>
                            <p>Мы используем Ваши Персональные данные для предоставления и улучшения Сервиса. Используя Сервис, Вы соглашаетесь на сбор и использование информации в соответствии с настоящей Политикой конфиденциальности.</p>
                        </div>

                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Толкование и определения</h2>

                            <h3 className="privacy-policy__subtitle">Определения</h3>
                            <div className="privacy-policy__definitions">
                                <div className="definition-item">
                                    <span className="definition-item__term">Компания</span>
                                    <span className="definition-item__description">(именуемая как «Компания», «Мы», «Нас» или «Наш» в данном Соглашении) относится к К53.</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Cookies</span>
                                    <span className="definition-item__description">небольшие файлы, которые размещаются на Вашем компьютере, мобильном устройстве или любом другом устройстве веб-сайтом, содержащие сведения о вашей истории просмотров на этом веб-сайте.</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Страна</span>
                                    <span className="definition-item__description">относится к: Россия</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Персональные<br />данные</span>
                                    <span className="definition-item__description">любая информация, которая относится к идентифицированному или идентифицируемому физическому лицу.</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Сервис</span>
                                    <span className="definition-item__description">относится к Веб-сайту.</span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Веб-сайт</span>
                                    <span className="definition-item__description">относится к К53, доступный по <a href="http://localhost:5173/" target="_blank">http://localhost:5173/</a></span>
                                </div>
                                <div className="definition-item">
                                    <span className="definition-item__term">Вы</span>
                                    <span className="definition-item__description">означает физическое лицо, получающее доступ или использующее Сервис, или компанию, или другое юридическое лицо, от имени которого такое физическое лицо получает доступ или использует Сервис, в зависимости от обстоятельств.</span>
                                </div>
                            </div>
                        </section>

                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Сбор и использование Ваших персональных данных</h2>

                            <h3 className="privacy-policy__subtitle">Типы собираемых данных</h3>

                            <div className="data-type">
                                <h4 className="data-type__title">Данные об использовании</h4>
                                <p>Данные об использовании собираются автоматически при использовании Сервиса.</p>
                                <p>Данные об использовании могут включать такую информацию, как IP-адрес Вашего Устройства, тип браузера, версия браузера, страницы нашего Сервиса, которые Вы посещаете, время и дата Вашего визита, время, проведенное на этих страницах, уникальные идентификаторы устройств и другие диагностические данные.</p>
                            </div>

                            <h4 className="privacy-policy__subtitle">Технологии отслеживания и Cookies</h4>
                            <p>Мы используем Cookies и аналогичные технологии отслеживания для отслеживания активности в нашем Сервисе и хранения определенной информации.</p>

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

                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Использование Ваших персональных данных</h2>
                            <p>Компания может использовать Персональные данные для следующих целей:</p>

                            <div className="usage-list">
                                <div className="usage-item">
                                    <strong>Для предоставления и поддержания нашего Сервиса</strong>, включая мониторинг использования нашего Сервиса.
                                </div>
                                <div className="usage-item">
                                    <strong>Для управления Вашими запросами:</strong> Для обработки и управления Вашими запросами к Нам.
                                </div>
                            </div>
                        </section>

                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Безопасность Ваших персональных данных</h2>
                            <p>Безопасность Ваших Персональных данных важна для Нас, но помните, что ни один метод передачи через Интернет или метод электронного хранения не является 100% безопасным.</p>
                        </section>

                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Сторонние сервисы</h2>
                            <p>Используемые Нами Поставщики услуг могут иметь доступ к Вашим Персональным данным.</p>

                            <div className="service-providers">
                                <div className="service-provider">
                                    <h4 className="service-provider__title">Яндекс.Карты</h4>
                                    <p>Их Политика конфиденциальности может быть просмотрена на <a href="https://yandex.ru/legal/maps_termsofuse/ru/" target="_blank">https://yandex.ru/legal/maps_termsofuse/ru/</a></p>
                                </div>
                            </div>
                        </section>

                        <section className="privacy-policy__section">
                            <h2 className="privacy-policy__section-title">Контакты</h2>
                            <div className="contact-methods">
                                <p>По телефону: <a href="tel:+7996939902" className="contact-link">+7 (996) 939-99-02</a></p>
                                <p>Через сайт: <a href="http://localhost:5173/" target="_blank" className="contact-link">http://localhost:5173/</a></p>
                            </div>
                        </section>
                    </div>
                </div>
            </Modal>
        </footer>
    );
};

export default Footer;