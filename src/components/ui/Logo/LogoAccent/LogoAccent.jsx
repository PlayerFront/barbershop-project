import './_logo-accent.scss';
import LogoSvg from '../../../../assets/icons/logo.svg';


const LogoAccent = () => {
    return (
        <div className="logo__accent">
            <img
                src={LogoSvg}
                alt="K53"
                className="logo__accent-img"
            />
        </div>
    );
};

export default LogoAccent;