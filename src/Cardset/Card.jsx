import './Card.scss';

/*
    Компонент "карточка". Используется внутри <Cardset />.

    img     - изображение к карточке; путь;
    header  - заголовок;
    content - текстовое содержимое карточки;
*/
function Card(props) {
    const img = props.img;
    const header = props.header;
    const content = props.content;

    return <>
        <article className='card'>
            <img width="auto" height="auto" src={img}></img>
            <header>{header}</header>
            <p>{content}</p>
        </article>
    </>;
}

export default Card;