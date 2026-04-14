import React from "react";
import "./BarraNavegacaoLateral.css";

const BarraNavegacaoLateral = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Controle</h2>
        <span>Ausências</span>
      </div>

      <nav className="sidebar-menu">
        <button className="sidebar-item">📅 Ausências</button>
        <button className="sidebar-item">📊 Histórico</button>
        <button className="sidebar-item">⚙️ Configurações</button>
      </nav>

      <div className="sidebar-footer">
        <small>Sistema Interno</small>
      </div>
    </div>
  );
};

export default BarraNavegacaoLateral;
