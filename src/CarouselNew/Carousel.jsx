import { useEffect, useRef } from 'react';
import './Carousel.scss'
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

function CarouselContainer(props) {
    const images = props.images; // images for output
    const name = props.name;     // carousel name (using in HTML and to build id of its slides)

    const content = images.map((image, index) => {
        return {
            id: name + '-' + index,
            img: image
        };
    });

    return (
        <div className="carousel-container">
            <Carousel content={content} />
            <LeftArrow />
            <RightArrow />
            <BottomNav content={content} name={name} />
        </div>
    );
}

const Image = (props) => {
    const id = props.id;
    const pic = props.pic;
    const tabindex = props.tabindex;

    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const radioInput = document.querySelector(`input[target=${id}`);
                    const carousel = radioInput.closest('.carousel-container').querySelector('.carousel');
                    
                    carousel.setAttribute('active', radioInput.getAttribute('target'));
                    radioInput.checked = true;
                }
            });
        });

        observer.observe(ref.current);
    });

    return <img src={pic} id={id} tabIndex={tabindex} ref={ref} />
}

function Carousel(props) {
    const content = props.content;
    
    return (
        <div className='carousel' >
            {content.map(({id, img}, index) => 
                <Image key={index} id={id} pic={img} tabindex={`-${index+1}`} />)}
        </div>
    );
}

function LeftArrow() {
    const onClick = (event) => {
        const activeSlide = document.getElementById(
            event.currentTarget.parentElement
            .querySelector('.carousel')
            .getAttribute('active')
        );

        const prevSlide = activeSlide.previousElementSibling;

        if (prevSlide)
            prevSlide.focus();
        else
            activeSlide.parentElement.lastElementChild.focus();
    };

    return <button className="arrow-left" onClick={onClick}><SlArrowLeft /></button>
}

function RightArrow() {
    const onClick = (event) => {
        const activeSlide = document.getElementById(
            event.currentTarget.parentElement
            .querySelector('.carousel')
            .getAttribute('active')
        );

        const nextSlide = activeSlide.nextElementSibling;

        if (nextSlide)
            nextSlide.focus();
        else
            activeSlide.parentElement.firstElementChild.focus();
    }
    return <button className="arrow-right" onClick={onClick}><SlArrowRight /></button>
}

function BottomNav(props) {
    const content = props.content;
    const name = props.name;

    const Button = (props) => {
        const onclick = (event) => {
            document.getElementById(
                event.currentTarget.getAttribute('target')
            ).focus();
        };
        return <input type="radio" name={name + '-nav'} target={props.target} onClick={onclick}/>;
    };

    return (
        <div className="carousel__nav">
            {content.map(({id,}, index) => 
                <Button key={index} target={id} />)}
        </div>
    );
}

export default CarouselContainer