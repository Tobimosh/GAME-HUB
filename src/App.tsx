function App() {
  return (
    <>
      <div className="bg-coral md:block">Nav</div>
      <div className="grid md:grid-cols-2">
        <div className="bg-coral md:block hidden">Aside</div>
        <div className="bg-dodgerblue">Main</div>
      </div>
    </>
  );
}

export default App;
