import './_header.scss';
import Hero from './Hero/Hero';
import headerBgDesktop from '../../../assets/images/background/header-background-desktop.webp';
import headerBgMobile from '../../../assets/images/background/header-background-mobile.webp';

const Header = () => {
    return (
        <>
            <link
                rel="preload"
                as="image"
                href={headerBgMobile}
                fetchpriority="high"
                media="(max-width: 1024px), (max-width: 1366px) and (orientation: portrait) and (max-height: 1024px)"
            />

            <link
                rel="preload"
                as="image"
                href={headerBgDesktop}
                fetchpriority="high"
                media="(min-width: 1025px) and (orientation: landscape), (min-width: 1367px)"
            />

            <header
                className="header"
                style={{
                    '--header-bg-desktop': `url(${headerBgDesktop})`,
                    '--header-bg-mobile': `url(${headerBgMobile})`
                }}
            >
                <Hero />
            </header >
        </>
    );
};

export default Header;