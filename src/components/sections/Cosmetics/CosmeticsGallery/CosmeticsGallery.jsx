import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './_cosmetics-gallery.scss';
import CarouselButton from '../../../ui/CarouselButton/CarouselButton';
import prevBtn from '../../../../assets/icons/previous-button.svg';
import nextBtn from '../../../../assets/icons/next-button.svg';

const CosmeticsGallery = () => {
    const cosmeticsImages = Object.values(import.meta.glob('../../../../assets/images/brands/brand-*.webp', {
        eager: true,
        query: '?url'
    })).map(item => item.default)
        .sort((a, b) => {
            const getNumber = (path) => {
                const match = path.match(/brand-product-(\d+)/);
                if (!match) {
                    console.warn('Invalid filename:', path);
                    return 0;
                }
                return parseInt(match[1]);
            }
            return getNumber(a) - getNumber(b);
        });
        
    return (
        <div className="cosmetics-gallery">
            <Swiper
                modules={[Navigation]}
                loop={true}
                spaceBetween={15}
                speed={400}
                navigation={{
                    nextEl: '.cosmetics-gallery__btn--next',
                    prevEl: '.cosmetics-gallery__btn--prev',
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    }
                }}
                className="cosmetics-gallery__swiper"
            >
                {cosmeticsImages.map((img, index) => (
                    <SwiperSlide key={index}>
                        <img
                            src={img}
                            alt={`Косметика ${index + 1}`}
                            className="cosmetics-gallery__image"
                            loading="lazy"
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <CarouselButton
                direction="prev"
                icon={prevBtn}
                ariaLabel="Предыдущий слайд"
                swiperTarget="cosmetics-gallery__btn--prev"
            />
            <CarouselButton
                direction="next"
                icon={nextBtn}
                ariaLabel="Следующий слайд"
                swiperTarget="cosmetics-gallery__btn--next"
            />
        </div>
    );
};

export default CosmeticsGallery;