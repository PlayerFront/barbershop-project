import './_logo-text.scss';
import BarberShop from '../../../../assets/icons/barbershop.svg';

const LogoText = () => {
    return (
        <div className="logo__text">
            <img
                src={BarberShop}
                alt="BARBERSHOP"
                className="logo__text-img"
            />
        </div>
    )
}

export default LogoText;