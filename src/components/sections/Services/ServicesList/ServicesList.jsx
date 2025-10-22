import ServicesItem from '../ServicesItem/ServicesItem';
import './_services-list.scss';

const ServicesList = () => {
    const servicesData = [
        {name: 'Стрижка мужская', price: '700 руб.'},
        {name: 'Стрижка детская', price: '700 руб.'},
        {name: 'Оформление бороды с распариванием', price: '800 руб.'},
        {name: 'Оформление бороды', price: '700 руб.'},
        {name: 'Королевское бритье', price: '700 руб.'},
        {name: 'Камуфляж: бороды/головы', price: '700 руб.'},
        {name: 'Ваксинг', price: '300 руб.'},
        {name: 'SPA уход за лицом', price: '700 руб.'},
        {name: 'Комплекс: стрижка мужская и оформление бороды с распариванием ', price: '1400 руб.'},
        {name: 'Комплекс: стрижка мужская и оформление бороды  ', price: '1300 руб.'},
        {name: 'Премиум-комплекс: стрижка, борода, воск, SPA процедуры  ', price: '2500 руб.'},
    ];

    return (
        <ul className="services-list">
            {servicesData.map((service, index) => (
                <li key={index} className="services-item">
                    <ServicesItem name={service.name} price={service.price} />
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;