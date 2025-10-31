import './_reviews.scss';
import { useIsMobile } from '../../../hooks/useIsMobile';
import StarIcon from '../../../assets/icons/star.svg';

/**
 * Reviews section component
 * All reviews data - consider moving to separate files if it grows larger
 * Shows only 5 reviews on mobile
 */
const Reviews = () => {
    const isMobile = useIsMobile();

    const allReviews = [
        {
            id: 1,
            text: "Отличный мастер, стрижёт аккуратно и красиво. Есть о чем поговорить во время стрижки.",
            author: "Денис"
        },
        {
            id: 2,
            text: "Отличный мастер,создал приятную атмосферу,так же сделал и стрижку на высшем уровне.",
            author: "Максим"
        },
        {
            id: 3,
            text: "Доверился рукам Игоря, сделал стрижку на его усмотрение и он с этим превосходно справился.",
            author: "Вадим"
        },
        {
            id: 4,
            text: "Огромное спасибо Игорю. Очень долго искал мастера в нашем городе, который сможет не только подстричь, но и оформить бороду.",
            author: "Максим"
        },
        {
            id: 5,
            text: "Настоящий профессионал своего дела. Постоянно развивается и проходит обучения у лучших по своей профессии. Однозначно рекомендую его вам!",
            author: "Александр"
        },
        {
            id: 6,
            text: "Барбер здорового человека! Попал один раз, теперь никому не доверяю. Продолжай в том же духе! Успехов! Однозначно рекомендую!",
            author: "Николай"
        },
        {
            id: 7,
            text: "Большой респект Игорю. С первой стрижки увидел, что это профессионал своего дела. Приятное общение и музыка. 100% рекомендация!",
            author: "Руслан"
        },
        {
            id: 8,
            text: "Больше года стригусь только у Игоря. Аккуратист и идеалист! Работает шикарно как с моими длинными волосами ранее, так и с короткими сейчас.",
            author: "Лев"
        },
    ]

    const displayedReviews = isMobile ? allReviews.slice(0, 5) : allReviews;

    return (
        <section className="reviews" id="reviews">
            <h2 className="reviews__title">Отзывы</h2>
            <div className="reviews__container">
                <div className="reviews__grid">
                    {displayedReviews.map(review => (
                        <div key={review.id} className="review-card">
                            <p className="review-card__text" >{review.text}</p>
                            <div className="review-card__rating">
                                <div className="review-card__stars">
                                    {[...Array(5)].map((_, index) => (
                                        <img
                                            key={index}
                                            src={StarIcon}
                                            alt="Звезда"
                                            className="review-card__star"
                                        />
                                    ))}
                                </div>
                                <span className="review-card__author">{review.author}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="reviews__link">Посмотреть все отзывы можно {' '}
                    <a href="https://yandex.ru/maps/org/k53/120669742018/reviews" target="_blank" rel="noopener noreferrer">здесь</a>
                </p>
            </div>
        </section>
    );
};

export default Reviews;