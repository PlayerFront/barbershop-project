import './_contacts.scss';
import PhoneIcon from '../../ui/PhoneIcon/PhoneIcon';
import VkIcon from '../../ui/VkIcon/VkIcon';
import YClientsIcon from '../../ui/YClientsIcon/YClientsIcon';
import LocationIcon from '../../ui/LocationIcon/LocationIcon';

const Contacts = () => {
    const contactsData = {
        phone: '8 (996) 939-99-02',
        vk: 'https://vk.com/publickom1sx53',
        yclients: 'https://n1763817.yclients.com',
        adress: 'Новгородская обл., г. Чудово, ул. Парайненская, д.8'
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
                                {contactsData.vk}
                            </a>
                        </li>
                        <li className="contact-item">
                            <YClientsIcon className="contact-item__icon" /> 
                            <a
                                href={contactsData.yclients}
                                target="_blank"
                                rel="noopener noreferrer">
                                {contactsData.yclients}
                            </a>
                        </li>
                        <li className="contact-item">
                            <LocationIcon className="contact-item__icon" />
                            <a
                                href="https://yandex.ru/maps/-/CLf9E21c"
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
                        src="https://yandex.ru/map-widget/v1/org/k53/120669742018/?from=mapframe&ll=31.670444%2C59.120955&z=15.33"
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