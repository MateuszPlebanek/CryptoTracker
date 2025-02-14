import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import { Image } from "react-bootstrap";

const Header = () => {
	const navigate = useNavigate();

	const handleLoginClick = () => {
		navigate("/login");
	};

	return (
		<header className="header">
			<h1 className="site-title">CryptoTracker</h1>
			<button className="user-avatar" onClick={handleLoginClick} type="button">
				<Image
					src="https://www.w3schools.com/howto/img_avatar.png" // Remplace par une image réelle si tu veux
					roundedCircle
					alt="Avatar utilisateur"
					className="avatar-img"
				/>
			</button>
		</header>
	);
};

export default Header;
