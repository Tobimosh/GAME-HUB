import GameGrid from "./components/GameGrid";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="bg-coral md:block">
        <NavBar />
      </div>
      <div className="grid md:grid-cols-2">
        <div className="w-2/3 md:block hidden">Aside</div>
        <div className="bg-dodgerblue">
          <GameGrid />
        </div>
      </div>
    </>
  );
}

export default App;
