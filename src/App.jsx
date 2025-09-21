import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";

import ProductsList from "./pages/products/list_products";
import ProductCreate from "./pages/products/create_product";
import ProductEdit from "./pages/products/edit_product";
import ProductDelete from "./pages/products/delete_product";
import UsersList from "./pages/users/list_users";
import UserCreate from "./pages/users/create_user";
import UserEdit from "./pages/users/edit_user";
import UserDelete from "./pages/users/delete_users";

export default function App() {
  return (
   <Router>
      <header className="navbar">
        <nav>
          <Link to="/" className="nav-link">🏠 Home</Link>
          <Link to="/products" className="nav-link">📦 Produtos</Link>
          <Link to="/users" className="nav-link">👤 Usuários</Link>
        </nav>
      </header>
      
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />

         
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/create" element={<ProductCreate />} />
          <Route path="/products/edit/:id" element={<ProductEdit />} />
          <Route path="/products/delete/:id" element={<ProductDelete />} />

         
          <Route path="/users" element={<UsersList />} />
          <Route path="/users/create" element={<UserCreate />} />
          <Route path="/users/edit/:id" element={<UserEdit />} />
          <Route path="/users/delete/:id" element={<UserDelete />} />
        </Routes>
      </main>
    </Router> 
  );
}
