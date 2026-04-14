import "./App.css";
import Ausencias from "./pages/Ausencias";
import BarraNavegacaoLateral from "./Components/BarraNavegacao"

function App() {
  return (
    <div style={{ display: "flex" }}>
      <BarraNavegacaoLateral />

      <div style={{ marginLeft: "240px", width: "100%" }}>
        <Ausencias />
      </div>
    </div>
  );
}

export default App;
