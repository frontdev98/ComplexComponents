import './Cardset.scss';
import Card from './Card';

/* 
    Компонент "Набор карточек"; представляет собой контейнер
    для хранения компонентов <Card />. 
*/
function Cardset(props) {
    const cards = props.cards;

    return <>
        <div className='cardset'>
            {cards.map((card, index) => <Card key={index} img={card.img} header={card.header} content={card.content} />)}
        </div>
    </>;
}

export default Cardset;