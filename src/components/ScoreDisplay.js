import './scoredisplay.css';

function ScoreDisplay(props) {
    return (
        <div className="score-display-container">
            <h2>your score is: {props.score}</h2>
        </div>
    );
}

export default ScoreDisplay;
