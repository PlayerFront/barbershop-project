import './_cookies-policy.scss';

const CookiesPolicy = () => {

    return (
        <div className="cookies-policy">
            <div className="cookies-policy__header">
                <p className="cookies-policy__date"><strong>Последнее обновление:</strong> {new Date().toLocaleDateString('ru-RU')}</p>
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
                        <div className="cookie-type__examples">
                            <strong>Включают:</strong>
                            <ul>
                                <li>ywidget_session - для работы сессии онлайн-записи</li>
                                <li>booking_token - для безопасности транзакций записи</li>
                            </ul>
                        </div>
                    </div>

                    <div className="cookie-type">
                        <h4 className="cookie-type__title">Функциональные Cookies</h4>
                        <div className="cookie-type__details">
                            <span><strong>Тип:</strong> Постоянные Cookies</span>
                            <span><strong>Администрируется:</strong> Нами</span>
                        </div>
                        <p className="cookie-type__purpose">Эти Cookies позволяют нам запоминать ваш выбор при использовании Веб-сайта, чтобы предоставить более персонализированный опыт.</p>
                    </div>
                    <div className="cookie-type">
                        <h4 className="cookie-type__title">Cookies сервиса онлайн-записи</h4>
                        <div className="cookie-type__details">
                            <span><strong>Тип:</strong> Постоянные и Сессионные Cookies</span>
                            <span><strong>Администрируется:</strong> YCLIENTS</span>
                        </div>
                        <p className="cookie-type__purpose">Эти Cookies используются для работы виджета онлайн-записи и могут <strong>включать:</strong></p>
                        <div className="cookie-type__examples">
                            <ul>
                                <li>yclients_session - идентификатор сессии записи</li>
                                <li>yc_analytics - данные аналитики использования виджета</li>
                                <li>yc_extra_fields - сохраненные данные форм записи</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cookie-type">
                        <h4 className="cookie-type__title">Аналитические Cookies (требуют согласия)</h4>
                        <div className="cookie-type__details">
                            <span><strong>Тип:</strong> Постоянные Cookies</span>
                            <span><strong>Администрируется:</strong> Третьими сторонами</span>
                        </div>
                        <p className="cookie-type__purpose">Эти Cookies помогают нам понимать, как посетители взаимодействуют с Веб-сайтом:</p>
                        <div className="cookie-examples">
                            <ul>
                                <li>_ga, _gid - Google Analytics</li>
                                <li>ym_metrika - Яндекс.Метрика</li>
                            </ul>
                        </div>
                    </div>
                    <div className="cookie-type cookie-transfer">
                        <h4 className="cookies-policy__subtitle">Передача данных третьим сторонам</h4>
                        <p>При использовании сервиса онлайн-записи данные cookies могут передаваться:</p>
                        <ul className="cookie-examples">
                            <li>YCLIENTS (yclients.com) - для технического обеспечения записи</li>
                            <li>Google (google.com) - для аналитики (при наличии согласия)</li>
                            <li>Яндекс (yandex.ru) - для аналитики (при наличии согласия)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="cookies-policy__section">
                <h2 className="cookies-policy__section-title">Ваш выбор относительно Cookies</h2>
                <p>Если Вы предпочитаете избегать использования Cookies, Вы можете отключить их в настройках браузера:</p>

                <div className="browser-links">
                    <a href="https://support.google.com/accounts/answer/32050" target="_blank" className="browser-link">Chrome</a>
                    <a href="https://clck.ru/3PvDJh" target="_blank" className="browser-link">Microsoft Edge</a>
                    <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" target="_blank" className="browser-link">Firefox</a>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" target="_blank" className="browser-link">Safari</a>
                                    <div className="cookie-warning">
                    <p><strong>Обратите внимание:</strong> Отключение необходимых cookies может привести к некорректной работе сервиса онлайн-записи.</p>
                </div>
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
    )
};

export default CookiesPolicy;