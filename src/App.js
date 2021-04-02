import Congrats from './Congrats'
import GussedWords from './GussedWords'

function App() {
  return (
    <div className="App">
  <Congrats success={true} />
  <GussedWords guessedWords={[{guessedWord: 'movie' , letterMatchCount: 3}]} /> 
    </div>
  );
}

export default App;
