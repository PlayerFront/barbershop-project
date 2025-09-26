import './_carousel-button.scss';

const CarouselButton = ({
    direction,
    onClick,
    ariaLabel,
    icon,
    swiperTarget,
}) => {
    return (
        <button
            className={`carousel-button carousel-button--${direction} ${swiperTarget}`}
            onClick={onClick}
            aria-label={ariaLabel}
        >
            <img src={icon} alt="" className="carousel-button__icon" />
        </button>
    );
};

export default CarouselButton;