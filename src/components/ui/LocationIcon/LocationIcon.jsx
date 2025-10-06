import './_location-icon.scss';
import LocationSvg from '../../../assets/icons/location-icon.svg';

const LocationIcon = () => {
    return (
        <a
            href="https://yandex.ru/maps/-/CLFY7YK8"
            target="_blank"
            rel="noopener noreferrer"
        >
            <img
                src={LocationSvg}
                alt="Location icon"
                className="location-icon"
            />
        </a>
    );
};

export default LocationIcon;