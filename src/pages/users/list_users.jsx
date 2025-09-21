import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function UsersList() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/users");
    const data = await res.json();
    setUsers(data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);


  return (
    <div>
      <h2>Lista de Usuários</h2>
      <Link to="/users/create">➕ Criar Usuário</Link>
      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} - {u.type}
            <Link to={`/users/edit/${u.id}`}> ✏️ Editar</Link>
            <Link to={`/users/delete/${u.id}`}> ❌ Excluir</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
