import CTAButton from '../../../ui/CTAButton/CTAButton';
import './_hero.scss';

const Hero = () => {
    return (
        <section className="hero">
            <h1 className="hero__title">ИСКУССТВО СТРИЖКИ ДЛЯ НАСТОЯЩИХ МУЖЧИН В Г. ЧУДОВО</h1>
            <p className="hero__guarantee">Гарантия на стрижку 3 дня</p>
            <CTAButton></CTAButton>
        </section>
    );
};

export default Hero;