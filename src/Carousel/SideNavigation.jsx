import './css/SideNavigation.css'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

/*
    Боковая навигация карусели (кнопки слева/справа (прижаты к границе родителя)).

    setActiveSlide - идентификатор активного (отображаемого во вьюпорт) слайда;

    В отличии от BottomNavigation, состояние устанавливается путем чтения
    id соседнего от таргета элемента (nextElementSibling/previousElementSibling).
*/
function SideNavigation({setActiveSlide}) {
    // Вернуть id активного слайда (проверить наличие соседних элементов в DOM).
    // Если сосед присутствует, то вернуть его id; в противном случае будет
    // возвращен id текущего элемента.
    const scroll = (slideId, toRight) => {
        const currentSlide = document.getElementById(slideId);

        const nextSlide = (toRight) ? currentSlide.nextElementSibling : 
                                      currentSlide.previousElementSibling;

        return (nextSlide) ? nextSlide.id : currentSlide.id;
    };

    // установить id предыдущего слайда в качестве состояния карусели;
    // setActiveSlide() принимает функцию-коллбэк, аргумент которой
    // содержит текущее значение состояния
    const scrollToLeft = () => 
        setActiveSlide((currentSlideId) => scroll(currentSlideId, false));

    // установить id следующего слайда в качестве состояния карусели;
    const scrollToRight = () => 
        setActiveSlide((currentSlideId) => scroll(currentSlideId, true));

    return (
        <>
            <SlArrowLeft 
                className='carousel__nav-side carousel__nav-side_left' 
                onClick={scrollToLeft}/>
            <SlArrowRight 
                className='carousel__nav-side carousel__nav-side_right' 
                onClick={scrollToRight}/>
        </>
    );
}

export default SideNavigation