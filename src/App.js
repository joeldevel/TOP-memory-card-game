
import ScoreDisplay from './components/ScoreDisplay';
import GameBoard from './components/GameBoard';

const cards = [1,2,3,4,5,6,7,8,9,10,11,12];
const score = 1;
function App() {
  return (
    <div className="app">
        <h1>memory card game</h1>
        <ScoreDisplay score={score}/>
        <GameBoard cards={cards}/>
    </div>
  );
}

export default App;
