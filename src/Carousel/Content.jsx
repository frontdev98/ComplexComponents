import './css/Content.css'

/*
    Компонент контента карусели (контейнер, слайды).
    contentData - данные вида [{htmlId: string, img: <img-object>}, ...]
*/
function CarouselContent({contentData}) {
    return (
        <section className='carousel__content'>
            {
                contentData.map((data, index) =>
                    <div key={index}
                         id={data.htmlId}
                         className='carousel__slide'
                         tabIndex={index+1}>
                            <img src={data.img} />
                    </div>
                )
            }
        </section>
    );
}
export default CarouselContent