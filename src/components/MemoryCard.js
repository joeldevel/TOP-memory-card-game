import './memorycard.css';

function MemoryCard(props) {
    // console.log(props)
    return (
        <div className="memorycard" onClick={(e) => props.handleClick(e)} data-id={props.card.id}>
            <span>{props.card.img}</span>
        </div>
    );
}

export default MemoryCard;
