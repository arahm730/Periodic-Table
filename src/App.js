import "./App.css";
import PeriodicTable from "../src/components/PeriodicTable";

function App() {
  return (
    <div className="app">
      <header>
        <h1>Interactive Periodic Table</h1>
      </header>
        <PeriodicTable />
      <footer>© 2022 A Rahman</footer>
    </div>
  );
}

export default App;
