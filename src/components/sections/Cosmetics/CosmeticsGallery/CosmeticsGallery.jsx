import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './_cosmetics-gallery.scss';
import CarouselButton from '../../../ui/CarouselButton/CarouselButton';
import prevBtn from '../../../../assets/icons/previous-button.svg';
import nextBtn from '../../../../assets/icons/next-button.svg';

/**
 * CosmeticsGallery - responsive cosmetics products carousel component
 * 
 * Displays a brand cosmetics gallery with intelligent image loading.
 * Automatically serves optimized image sizes (400px, 800px, 1200px) based on device capabilities
 * using srcSet for maximum performance across all devices.
 * 
 * Key features:
 * - Automatic image size selection based on viewport
 * - Groups images by product and size for efficient loading
 * - Uses Vite's import.meta.glob for optimized asset loading
 * - Integrates with Swiper for touch-friendly carousel
 * - Implements lazy loading for performance optimization
 * - Sorts images numerically by filename (brand-product-1.webp, etc.)
 * 
 * @component
 * @example
 * <CosmeticsGallery />
 * 
 * File structure:
 * brand-product-1-400.webp    // mobile devices
 * brand-product-1-800.webp    // tablets
 * brand-product-1-1200.webp   // desktop
 */

const CosmeticsGallery = () => {
    const cosmeticsImages = Object.values(import.meta.glob('../../../../assets/images/brands/brand-product-*.webp', {
        eager: true,
        query: '?url'
    })).map(item => item.default);

    const getImageGroups = () => {
        const groups = {};

        cosmeticsImages.forEach(path => {
            const filename = path.split('/').pop();
            const parts = filename.split('-');

            if(parts.length >= 4 && parts[0] === 'brand' && parts[1] === 'product') {
                const number = parts[2];
                const size = parts[3].replace('.webp', '');

                if (!groups[number]) groups[number] = {};
                groups[number][size] = path;
            }
        });
 
        return Object.keys(groups)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(number => groups[number]);
    }

    const imageGroups = getImageGroups();

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

                {imageGroups.map((group, index) => {
                    const adaptiveSet = {
                        src: group['800'], 
                        srcSet: `
                            ${group['400']} 400w,
                            ${group['800']} 800w,
                            ${group['1200']} 1200w
                        `,
                        sizes: `(max-width: 768px) 400px,
                                (max-width: 1200px) 800px,
                                1200px`
                    };

                    return (
                        <SwiperSlide key={index}>
                            <img
                                {...adaptiveSet}
                                alt={`Косметика ${index + 1}`}
                                className="cosmetics-gallery__image"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    );
                })}
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