import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function UserEdit() {
  const { id } = useParams();
  const [user, setUser] = useState({ name: "", password: "", type: "common" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`http://localhost:3000/users/${id}`);
      const data = await res.json();
      setUser(data);
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/users/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    navigate("/users");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Usuário</h2>

      <label>
        Nome:
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
      </label>

      <label>
        Senha:
        <input
          type="password"
          value={user.password || ""}
          minLength={8}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="Digite uma nova senha"
        />
      </label>

      <label>
        Tipo:
        <select
          value={user.type}
          onChange={(e) => setUser({ ...user, type: e.target.value })}
        >
          <option value="common">Comum</option>
          <option value="admin">Administrador</option>
        </select>
      </label>

      <button type="submit">Atualizar</button>
    </form>
  );
}
