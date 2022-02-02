import MemoryCard from './MemoryCard';
import './gameboard.css';

function GameBoard(props) {
    return (
        <div className="gameboard">
            {props.cards.map(card=><MemoryCard key={card}/>)}

        </div>
    );
}

export default GameBoard;
