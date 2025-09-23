import './_phone-icon.scss';
import PhoneSvg from '../../../assets/icons/phone-icon.svg';

const PhoneIcon = () => {
    return (
        <a
            href="tel:+79969399802"
            aria-label="Позвонить по номеру 8 (996) 939-98-02"
        >
            <img
                src={PhoneSvg}
                alt="phone icon"
                className="phone-icon"
            />
        </a>

    );
};

export default PhoneIcon;