import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ProductCreate() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, price, amount }),
    });
    navigate("/products");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Criar Produto</h2>

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
        Preço:
        <input
          type="number"
          step="0.01"
          placeholder="Digite o preço"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
      </label>

      <label>
        Quantidade:
        <input
          type="number"
          placeholder="Digite a quantidade"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
      </label>

      <button type="submit">Salvar</button>
    </form>
  );
}
