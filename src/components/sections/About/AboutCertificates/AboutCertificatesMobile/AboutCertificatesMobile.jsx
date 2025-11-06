import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './_about-certificates-mobile.scss';
import CarouselButton from '../../../../ui/CarouselButton/CarouselButton';

import prevBtn from '../../../../../assets/icons/previous-button.svg';
import nextBtn from '../../../../../assets/icons/next-button.svg';

/**
 * AboutCertificatesMobile - Responsive certificates carousel component for mobile devices
 * 
 * Displays a touch-friendly carousel of barbershop certificates with adaptive image loading.
 * Automatically serves optimized certificate images (400px, 800px, 1200px) based on device viewport
 * using srcSet for optimal performance on mobile devices.
 * 
 * Key features:
 * - Adaptive image loading with three size variants
 * - Touch-friendly Swiper carousel implementation
 * - Automatic sorting and grouping of certificate images
 * - Lazy loading for performance optimization
 * - Mobile-first responsive design
 * 
 * @component
 * @example
 * <AboutCertificatesMobile />
 * 
 * File structure:
 * certificate-1-400.webp    // mobile devices
 * certificate-1-800.webp    // tablets  
 * certificate-1-1200.webp   // desktop (fallback)
 */
const AboutCertificatesMobile = () => {

    const certificateImages = Object.values(import.meta.glob('../../../../../assets/images/certs/certificate-*.webp', {
        eager: true,
        query: '?url'
    })).map(item => item.default);

        const getCertificateGroups = () => {
        const groups = {};

        certificateImages.forEach(path => {
            const filename = path.split('/').pop();
            const parts = filename.split('-');

            if (parts.length >= 3 && parts[0] === 'certificate') {
                const number = parts[1];
                const size = parts[2].replace('.webp', '');

                if (!groups[number]) groups[number] = {};
                groups[number][size] = path;
            }
        });

        return Object.keys(groups)
            .sort((a, b) => parseInt(a) - parseInt(b))
            .map(number => groups[number]);
    }

    const certificateGroups = getCertificateGroups();

    return (
        <div className="about-certificates-mobile">
            <Swiper
                modules={[Navigation]}
                spaceBetween={15}
                loop={true}
                speed={400}
                slidesPerView={1}
                navigation={{
                    nextEl: '.about-certificates-mobile__btn--next',
                    prevEl: '.about-certificates-mobile__btn--prev',
                }}
                className="about-certificates-mobile__swiper"
            >
                {certificateGroups.map((group, index) => {
                    const adaptiveSet = {
                        src: group['400'],
                        srcSet: `
                ${group['400']} 400w,
                ${group['800']} 800w,
                ${group['1200']} 1200w
                        `,
                        sizes: `(max-width: 768px) 400px,
                    (max-width: 1200px) 800px,
                    1200px`
                    }

                    return (
                        <SwiperSlide key={index}>
                            <img
                                {...adaptiveSet}
                                alt={`Сертификат ${index + 1}`}
                                className="about-certificates-mobile__image"
                                loading="lazy"
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>

            <div className="about-certificates-mobile__controls">
                <CarouselButton
                    direction="prev"
                    icon={prevBtn}
                    ariaLabel="Предыдущий слайд"
                    swiperTarget="about-certificates-mobile__btn--prev"
                />
                <CarouselButton
                    direction="next"
                    icon={nextBtn}
                    ariaLabel="Следующий слайд"
                    swiperTarget="about-certificates-mobile__btn--next"
                />
            </div>
        </div>
    )
}

export default AboutCertificatesMobile;