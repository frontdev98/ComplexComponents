import './css/BottomNavigation.css'

/*
    Нижняя навигация карусели (панель с кнопками, каждая кнопка
    соответствует слайду).
    
    slidesIds      - строковые и идентификаторы слайдов (атрибуты id);
    activeSlide    - идентификатор активного (отображаемого во вьюпорт) слайда;
    setActiveSlide - функция для установки состояния карусели;

    Состояние карусели устанавливается путем чтения атрибута "slide" таргета.
*/

function BottomNavigation({contentData, activeSlide, setActiveSlide}) {
    // установить id слайда в качестве состояния карусели;
    // таргет обработчика должен иметь атрибут slide, содержащий id
    // слайда (кнопка соответствует слайду);
    const clickHandler = (event) => 
        setActiveSlide(event.currentTarget.getAttribute('slide'));
    
    return (
        <ul className="carousel__nav-bottom">
            {contentData.map((data, index) => {
                // кнопка активна, если ее id совпадает с текущим
                // (добавить класс active)
                const classActive = (activeSlide === data.htmlId) ? ' active' : '';

                return (
                    <li key={index} className='carousel__nav-bottom-item'>
                        <span 
                            className={`carousel__nav-bottom-button ${classActive}`}
                            onClick={clickHandler}
                            slide={data.htmlId}>
                        </span>
                    </li>
                );  
            })}
        </ul>
    );
}

export default BottomNavigation