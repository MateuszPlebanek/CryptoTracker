import { useState } from "react";
import "../styles/LoginPage.css";
import { Link } from "react-router-dom";
import PasswordInput from "../components/PasswordInput";

const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("http://localhost:3000/api/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await response.json();

			if (response.ok) {
				alert("Connexion réussie");
				console.log('Token JWT :', data.token);
			} else {
				alert(`Erreur : ${data.message}`);
			}
		} catch (error) {
			console.error('Erreur lors de la connexion :', error);
		}
	};

	
	return (
		<div className="login-container">
			<form onSubmit={handleLogin} className="login-form">
			{/* Titre cliquable qui renvoie vers la page d'accueil */}
			<Link to="/" className="site-name-link">CryptoTracker</Link>
			<h2>Connexion</h2>
				<input
					type="email"
					placeholder="Email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>
				<PasswordInput value={password} onChange={setPassword} />
				<button type="submit" className="submit-button">Se connecter</button>
				<p>
					Pas encore de compte ? <Link to="/register">Inscris-toi ici</Link>
				</p>
				{/* Bouton pour revenir à l'accueil */}
			</form>
			</div>
	);
};

export default LoginPage;
