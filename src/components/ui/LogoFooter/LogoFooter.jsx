import './_logo-footer.scss';
import LogoSvg from '../../../assets/icons/logo-footer.svg';

const LogoFooter = () => {
    return (
        <img 
            src={LogoSvg}
            alt="barbershop logo"
            className="logo-footer"
        />
    );
};

export default LogoFooter;