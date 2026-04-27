import React, { useState } from "react";
import "../Login/Login.css";

const Login = ({ onLogin }) => {

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (usuario === "adm" && senha === "123") {
            onLogin(true);
        } else {
            alert("Usuário ou senha inválidos");
        }
    };

    return (
        <div className="container_login">
            <h1>Controle de Ausências</h1>

            <form className="form_login" onSubmit={handleSubmit}>
                <div className="box_login">
                    <input
                        placeholder="Usuário"
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                        required
                    />

                    <input
                        placeholder="Senha"
                        type="password"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                        required
                    />

                    <button type="submit">Entrar</button>
                </div>
            </form>
        </div>
    );
}

export default Login;
