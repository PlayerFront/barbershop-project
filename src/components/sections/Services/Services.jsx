import './_services.scss';
import ServicesList from './ServicesList/ServicesList';

const Services = () => {
    return (
        <section className="services" id="services">
            <h2 className="services__title">Услуги и цены</h2>
            <ServicesList />
        </section>
    )
}

export default Services;