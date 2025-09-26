import './_services-item.scss';

const ServicesItem = ({name, price}) => {
    return (
        <>
            <span className="services-item__name">{name}</span>
            <span className="services-item__price">{price}</span>
        </>
    );
};

export default ServicesItem;