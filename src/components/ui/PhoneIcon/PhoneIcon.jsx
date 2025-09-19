import './_phone-icon.scss';
import PhoneSvg from '../../../assets/icons/phone-icon.svg';

const PhoneIcon = () => {
    return (
        <img
            src={PhoneSvg}
            alt="phone icon"
            className="phone-icon"
        />
    );
};

export default PhoneIcon;