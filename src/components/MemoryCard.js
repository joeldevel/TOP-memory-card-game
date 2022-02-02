import './memorycard.css';

function MemoryCard(props) {
    console.log(props)
    return (
        <div className="memorycard"><span>{props.card.img}</span></div>
    );
}

export default MemoryCard;
