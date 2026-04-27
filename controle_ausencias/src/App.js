import { useState } from "react";
import "./App.css";
import Ausencias from "./pages/Ausencias";
import BarraNavegacaoLateral from "./Components/BarraNavegacao";
import Login from "./pages/Login";

function App() {
  const [logado, setLogado] = useState(false);

  return (
    <div>
      {
        logado ? (
          <>
            <BarraNavegacaoLateral />
            <div style={{ marginLeft: "240px" }}>
              <Ausencias />
            </div>
          </>
        ) : (
          <Login onLogin={setLogado} />
        )
      }
    </div>
  );
}

export default App;
