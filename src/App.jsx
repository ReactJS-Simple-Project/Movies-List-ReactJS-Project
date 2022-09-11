import Header from "./Header";
import Search from "./Search";
import Movie from "./movie";
import './movielist.css'

function App() {
  return (
    <div className="App">
      <div className="Nav">
        <Header title="RK64" />
        <Search />
      </div>
      <p className="App-intro">Show your favorite movies</p>
      <Movie />
    </div>
  );
}

export default App;
