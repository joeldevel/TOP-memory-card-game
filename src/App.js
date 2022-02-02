import {useState} from 'react';

import ScoreDisplay from './components/ScoreDisplay';
import GameBoard from './components/GameBoard';

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
const score = 1;
function App() {
    const [cards, setCards] = useState(cardsArray);
  return (
    <div className="app">
        <h1>memory card game</h1>
        <ScoreDisplay score={score}/>
        <GameBoard cards={cards}/>
    </div>
  );
}

export default App;
