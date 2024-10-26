import './App.css';
import Header from './components/Header';
import CharacterCard from './components/CharacterCard'


function App() {
  return (
    <div className="App">
      <Header />
      <h1>Who Would Win?</h1>

        <div class = "first">
          <CharacterCard />
        </div>

       


        <div class="third">
          <CharacterCard />
        </div>
        

    </div>
  );
}

export default App;
