import './_contacts.scss';
import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import VkIcon from '../../ui/VkIcon/VkIcon';
import TelegramIcon from '../../ui/TelegramIcon/TelegramIcon';
import LocationIcon from '../../ui/LocationIcon/LocationIcon';

const Contacts = () => {
    const contactsData = {
        phone: '8 (996) 939-99-02',
        vk: 'https://vk.com/publickom1sx53',
        telegram: 'https://n1763817.yclients.com/', // поменять телегу
        adress: 'Новгородская обл., г. Чудово, ул. Титова, д.14, к.2, кв.19'
    };

    return (
        <section className="contacts" id="contacts">
            <h2 className="contacts__title">Контакты</h2>
            <div className="contacts__content">
                <div className="contacts__info">
                    <ul className="contacts__list">
                        <li className="contact-item">
                            <PhoneIcon className="contact-item__icon" />
                            <a href={`tel:${contactsData.phone.replace(/\s/g, '')}`}>
                                {contactsData.phone}
                            </a>
                        </li>
                        <li className="contact-item">
                            <VkIcon className="contact-item__icon" />
                            <a
                                href={contactsData.vk}
                                target="_blank"
                                rel="noopener noreferrer">
                                https://vk.com/publickom1sx5
                            </a>
                        </li>
                        <li className="contact-item">
                            <TelegramIcon className="contact-item__icon" /> {/*Поменять иконку телеги */}
                            <a
                                href={contactsData.telegram} // поменять телегу
                                target="_blank"
                                rel="noopener noreferrer">
                                https://n1763817.yclients.com/
                            </a>
                        </li>
                        <li className="contact-item">
                            <LocationIcon className="contact-item__icon" />
                            <a
                                href="https://yandex.ru/maps/-/CLFY7YK8"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Открыть в Яндекс.Картах"
                                >
                                {contactsData.adress}
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="contacts__map">
                    <iframe
                        src="https://yandex.ru/map-widget/v1/org/k53/244689515649/?azimuth=0.11786613279784912&ll=31.662464%2C59.122517&z=16.97"
                        frameBorder="0"
                        allowFullScreen={true}
                        title="местоположение барбершопа к53"
                        className="contacts__map-iframe"
                    />
                </div>
            </div>
        </section>
    )
}

export default Contacts;