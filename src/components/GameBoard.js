import MemoryCard from './MemoryCard';
import './gameboard.css';

function GameBoard(props) {
    // console.log(props)
    return (
        <div className="gameboard">
            {props.cards.map(card=><MemoryCard key={card.id} card={card} handleClick={props.handleClick}/>)}

        </div>
    );
}

export default GameBoard;
