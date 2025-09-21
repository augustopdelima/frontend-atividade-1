import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../service/api";

export default function ProductDelete() {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = async () => {
      await api.delete(`/products/${id}`);
      navigate("/products");
    };
    confirmDelete();
  }, [id, navigate]);

  return <p>Excluindo produto...</p>;
}
