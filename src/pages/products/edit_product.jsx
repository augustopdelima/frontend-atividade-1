import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ProductEdit() {
  const { id } = useParams();
  const [product, setProduct] = useState({ name: "", price: "", amount: "" });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`http://localhost:3000/products/${id}`);
      const data = await res.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Editar Produto</h2>

      <label>
        Nome:
        <input
          type="text"
          value={product.name}
          onChange={(e) => setProduct({ ...product, name: e.target.value })}
          required
        />
      </label>

      <label>
        Preço:
        <input
          type="number"
          step="0.01"
          value={product.price}
          onChange={(e) => setProduct({ ...product, price: e.target.value })}
          required
        />
      </label>

      <label>
        Quantidade:
        <input
          type="number"
          value={product.amount}
          onChange={(e) => setProduct({ ...product, amount: e.target.value })}
          required
        />
      </label>

      <button type="submit">Atualizar</button>
    </form>
  );
}
