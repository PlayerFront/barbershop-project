import './_about-content.scss';
import AboutPhotoMobile from '../../../../assets/images/about/about-photo-mobile.webp';
import AboutPhotoDesktop from '../../../../assets/images/about/about-photo-desktop.webp';

const AboutContent = () => {
    return (
        <div className="about-content">
            <picture className="about-content__picture">
                <source
                    media="(min-width: 768px)"
                    srcSet={AboutPhotoDesktop}
                />
                <img
                    src={AboutPhotoMobile}
                    alt="Фото барбера Комисова Игоря"
                    className="about-content__photo"
                    loading="lazy"
                />
            </picture>
            <div className="about-content__text">
                <div className="about-content__paragraph">
                    <p>Я — Комисов Игорь Михайлович, дипломированный барбер с опытом работы более 2,5 лет, оказываю широкий спектр услуг по уходу за волосами и кожей лица. Моё главное вдохновение — это клиенты. Каждый из вас уникален, и я стремлюсь подчеркнуть вашу индивидуальность  через стильную стрижку и ухоженную бороду.</p>
                </div>
                <div className="about-content__paragraph">
                    <p>Мой подход к работе основывается на профессионализме, креативности и дружелюбной атмосфере. Также я постоянно повышаю свою квалификацию, чтобы гарантировать высокое качество своей работы.</p>
                </div>
                <div className="about-content__paragraph">
                    <p>Я всегда в поиске новых трендов и технологий, чтобы предложить вам лучший сервис и стиль.<br />Приходите, и давайте вместе создадим ваш идеальный образ!</p>
                </div>
            </div>
        </div>
    );
};

export default AboutContent;