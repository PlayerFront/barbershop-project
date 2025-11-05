import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './_cosmetics-gallery.scss';
import CarouselButton from '../../../ui/CarouselButton/CarouselButton';
import prevBtn from '../../../../assets/icons/previous-button.svg';
import nextBtn from '../../../../assets/icons/next-button.svg';

/**
 * CosmeticsGallery - products brands carousel component
 * Displays a responsive gallery of cosmetics products with dynamic image loading
 * Uses Vite's import.meta.glob for efficient asset loading and Swiper for carousel
 * Dynamically import and sort cosmetics product images using Vite's glob import
 * Images are sorted by number in filename (brand-product-1.webp, brand-product-2.webp, etc.)
 */
const CosmeticsGallery = () => {
    const cosmeticsImages = Object.values(import.meta.glob('../../../../assets/images/brands/brand-product-*.webp', {
        eager: true,
        query: '?url'
    })).map(item => item.default);

    console.log('Все изображения:', cosmeticsImages); // 👈 ДОБАВЬ


    // const getAdaptiveSet = (baseImagePath) => {

    //     const productionPath = baseImagePath.replace('/src/assets/images/brands', '/assets');
    //     const basePath = productionPath.replace('-800.webp', '');

    //     console.log('Исходный путь:', productionPath); // 👈 ДОБАВЬ ЭТО
    //     return {
    //         src: productionPath, // средний размер по умолчанию
    //         srcSet: `
    //             ${basePath}-400.webp 400w,
    //             ${basePath}-800.webp 800w,
    //             ${basePath}-1200.webp 1200w
    //         `,
    //         sizes: `(max-width: 768px) 400px,
    //                 (max-width: 1200px) 800px,
    //                 1200px`
    //     };
    // };

    const getImageGroups = () => {
        const groups = {};

        cosmeticsImages.forEach(path => {
            const match = path.match(/brand-product-(\d+)-(\d+)\.webp/);
            if (match) {
                const [, number, size] = match;
                if (!groups[number]) groups[number] = {};

                const productionPath = path.replace('/src/assets/images/brands', '/assets'); // prod version
                groups[number][size] = productionPath; // path for dev version
            }
        });
 
        return Object.keys(groups)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(number => groups[number]);
    }

    const imageGroups = getImageGroups();
    console.log('Сгруппированные изображения:', imageGroups);


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
                        src: group['800'], // средний размер
                        srcSet: `
                            ${group['400']} 400w,
                            ${group['800']} 800w,
                            ${group['1200']} 1200w
                        `,
                        sizes: `(max-width: 768px) 400px,
                                (max-width: 1200px) 800px,
                                1200px`
                    };

                    console.log(`Продукт ${index + 1}:`, adaptiveSet);

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