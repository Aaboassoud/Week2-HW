import './App.css';
import './bootstrap.css';
import card from "./comp/Card"
import CardMovie from './comp/CardMovie';

function App() {
  let cardname = card.map((cards) => <CardMovie  cards={cards}/>)
  return (
    <div className="container text-center">
      <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="col">{cardname}
        </div>
      </div>
    </div>
  );
}

export default App;
