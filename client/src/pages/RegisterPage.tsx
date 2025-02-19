import { useState } from 'react';
import "../styles/RegisterPage.css";
import { Link } from "react-router-dom"
import PasswordInput from "../components/PasswordInput";

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, pseudo, password }),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Inscription réussie');
      } else {
        alert(`Erreur : ${data.message}`);
      }
    } catch (error) {
      console.error('Erreur lors de l\'inscription :', error);
    }
  };

  return (
    <div className="register-page-container">
        <div className="register-form-container">
      {/* Titre cliquable qui renvoie vers la page d'accueil */}
			<Link to="/" className="site-name-link">CryptoTracker</Link>
      <h2>Inscription</h2>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Pseudo"
          value={pseudo}
          onChange={(e) => setPseudo(e.target.value)}
          required
        />

        <PasswordInput value={password} onChange={setPassword} />
        <button type="submit" className="submit-button">S'inscrire</button>
      </form>
        <p>
			Déjà un compte ? <Link to="/login">Connecte-toi ici</Link>
		</p>
    </div>
    </div>
  );
};

export default RegisterPage;
