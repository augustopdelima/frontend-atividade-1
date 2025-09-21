import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../service/api";

export default function ProductsList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((res) => setProducts(res.data));
  }, []);

  return (
    <div>
      <h2>Produtos</h2>
      <Link to="/products/create">➕ Novo Produto</Link>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - R$ {p.price} (Qtd: {p.amount})
            <Link to={`/products/edit/${p.id}`}> ✏️ Editar</Link>
            <Link to={`/products/delete/${p.id}`}> ❌ Excluir</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
