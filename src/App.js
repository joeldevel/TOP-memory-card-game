import {useState, useEffect} from 'react';

import ScoreDisplay from './components/ScoreDisplay';
import GameBoard from './components/GameBoard';
import bgPattern from './bg-pattern.png';

const cardsArray = [
    {id: 1, img: '\u{1F33B}'},
    {id: 2, img: '\u{1F600}'},
    {id: 3, img: '\u{1F47D}'},
    {id: 4, img:'\u{1F63A}'},
    {id: 5, img:'\u{1F98B}'},
    {id: 6, img:'\u{1F385}'},
    {id: 7, img:'\u{1F4A3}'},
    {id: 8, img:'\u{1F98A}'},
    {id: 9, img:'\u{1F431}'},
    {id: 10, img:'\u{1F98C}'},
    {id: 11, img:'\u{1F439}'},
    {id: 12, img:'\u{1F438}'},
];
function App() {
    const [cards, setCards] = useState(cardsArray);
    const [cardsPicked, setCardsPicked] = useState([]);
    const [score, setScore] = useState(0);
    const [hideModal, setHideModal] = useState(true);
    const [playerWins, setPlayerWins] = useState(false);

    useEffect(()=> {
        // console.log(cardsPicked.length)
        if(score === cards.length) {
            setPlayerWins(true);
            setHideModal(false);
            return;
        }
    },[score]);

    const handleClick = (e) => {
        checkHand(e.currentTarget.dataset.id);
    }

    const checkHand = (id) => {
        // console.log(cardsPicked);
        if(cardsPicked.find(card => card == id)) {
            // console.log("=========== card already taken, game over");
            setCardsPicked([]);
            setHideModal(false);
            // return alert('game over');
        } else {
            const newCardsPicked = [...cardsPicked];
            newCardsPicked.push(id);
            setCardsPicked(newCardsPicked);
            const newCards = [...cards];
            // taken from
            //https://www.geeksforgeeks.org/how-to-shuffle-an-array-using-javascript/
            newCards.sort( ()=>Math.random()-0.5 );
            setCards(newCards);
            setScore(p => p+1);

        }
    }

    const playAgain = () => {
        setHideModal(true);
        setScore(0);
    }

    return (
    <div className="app" style={{background: `url(${bgPattern})`}}>
        <div>
            <h1>memory card game</h1>
            <p>you have to click on every image but only once!</p>
        </div>
        <ScoreDisplay score={score}/>
        <GameBoard cards={cards} handleClick={handleClick}/>
        <div className={`modal  ${hideModal ? "modal-hidden": ""}`}>
            <div className="modal-msg">
                <h2> {playerWins ?"Congratulations!!! your won":
                     `your score is ${score}/${cards.length}` }</h2>
                <button className="button-play-again" onClick={()=>playAgain()}>Play again?</button>
            </div>
        </div>
    </div>
    );
}

export default App;
