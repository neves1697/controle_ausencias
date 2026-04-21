import React from "react";
import "./BarraNavegacaoLateral.css";

const BarraNavegacaoLateral = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-logo">
        <h2>Controle de ausências</h2>
        <span>Ausências</span>
      </div>

      <nav className="sidebar-menu">
        <button className="sidebar-item">📅 Ausências</button>
        <button className="sidebar-item">📊 Histórico</button>
        <button className="sidebar-item">⚙️ Configurações</button>
      </nav>

      <div className="sidebar-footer">
        <small>Autor: Anderson Neves</small>
      </div>
    </div>
  );
};

export default BarraNavegacaoLateral;
