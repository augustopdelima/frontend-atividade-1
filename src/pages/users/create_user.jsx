import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserCreate() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("common");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, password, type }),
    });
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Usuário</h2>

      <label>
        Nome:
        <input
          type="text"
          placeholder="Digite o nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Senha:
        <input
          type="password"
          placeholder="Digite a senha"
          value={password}
          minLength={8}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>

      <label>
        Tipo:
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="common">Comum</option>
          <option value="admin">Administrador</option>
        </select>
      </label>

      <button type="submit">Salvar</button>
    </form>
  );
}
