import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../service/api";

export default function UserDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = async () => {
      await api.delete(`/users/${id}`);
      navigate("/users");
    };
    confirmDelete();
  }, [id, navigate]);

  return <p>Excluindo usuário...</p>;
}

