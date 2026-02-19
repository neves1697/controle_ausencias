import React from "react";
import { a } from "react-router-dom";
import "./BarraNavegacaoLateral.css";

const BarraNavegacaoLateral = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-logo">
                <h2>Controle</h2>
                <span>Ausências</span>
            </div>

            <nav className="sidebar-menu">


                <a to="/ausencias" className="sidebar-item">
                    📅 Ausências
                </a>

                <a to="/relatorios" className="sidebar-item">
                    📊 Histórico
                </a>

                <a to="/configuracoes" className="sidebar-item">
                    ⚙️ Configurações
                </a>
            </nav>

            <div className="sidebar-footer">
                <small>Sistema Interno</small>
            </div>
        </div>
    );
};

export default BarraNavegacaoLateral;
