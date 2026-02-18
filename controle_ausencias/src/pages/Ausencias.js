/*
1 - Adicionar validação de (data fim não pode ser menor que que data início)
2 - Adicionar validação de (data início não poder ser maior que data fim)
3 - Adicionar validação de, não obrigar a preencher a data fim porque haverá momentos em que o usuário não saberá exatamente o horário
de retorno.
*/

import React, { useState } from "react";
import "./Ausencias.css";

export default function Ausencias() {
  const [registros, setRegistros] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const [form, setForm] = useState({
    nome: "",
    motivo: "",
    inicio: "",
    fim: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleAdicionar = () => {
    if (!form.nome || !form.motivo || !form.inicio || !form.fim) {
      alert("Preencha todos os campos.");
      return;
    }

    if (editIndex !== null) {
      const novosRegistros = [...registros];
      novosRegistros[editIndex] = form;
      setRegistros(novosRegistros);
      setEditIndex(null);
    } else {
      setRegistros([...registros, form]);
    }

    setForm({
      nome: "",
      motivo: "",
      inicio: "",
      fim: "",
    });
  };

  const handleEditar = (index) => {
    setForm(registros[index]);
    setEditIndex(index);
  };

  const handleRemover = (index) => {
    const novosRegistros = registros.filter((_, i) => i !== index);
    setRegistros(novosRegistros);
  };

  const handleSalvar = () => {
    console.log("Dados salvos:", registros);
    alert("Registros salvos com sucesso!");
  };

  return (
    <div className="ausencias-container">
      <h2>Controle de Ausências 1.0</h2>

      <div className="form-card">
        <input
          type="text"
          name="nome"
          placeholder="Nome do colaborador"
          value={form.nome}
          onChange={handleChange}
        />

        <input
          type="text"
          name="motivo"
          placeholder="Motivo da ausência"
          value={form.motivo}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="inicio"
          value={form.inicio}
          onChange={handleChange}
        />

        <input
          type="datetime-local"
          name="fim"
          value={form.fim}
          onChange={handleChange}
        />

        <button className="btn-add" onClick={handleAdicionar}>
          {editIndex !== null ? "Atualizar" : "Adicionar"}
        </button>
      </div>

      <table className="ausencias-tabela">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Motivo</th>
            <th>Início</th>
            <th>Fim</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {registros.map((item, index) => (
            <tr key={index}>
              <td>{item.nome}</td>
              <td>{item.motivo}</td>
              <td>{item.inicio}</td>
              <td>{item.fim}</td>
              <td>
                <button
                  className="btn-edit"
                  onClick={() => handleEditar(index)}
                >
                  Editar
                </button>
                <button
                  className="btn-remove"
                  onClick={() => handleRemover(index)}
                >
                  Remover
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="btn-save" onClick={handleSalvar}>
        Salvar
      </button>
    </div>
  );
}
