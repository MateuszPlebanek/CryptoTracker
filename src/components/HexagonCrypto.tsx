import type React from "react";
import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "../styles/HexagonCrypto.css";

interface HexagonCryptoProps {
	name: string;
	symbol: string;
	image: string;
	price: number;
	change24h: number;
	x: number;
	y: number;
	radius: number;
}

const HexagonCrypto: React.FC<HexagonCryptoProps> = ({
	name,
	symbol,
	image,
	price,
	change24h,
	x,
	y,
	radius,
}) => {
	const isPositive = change24h >= 0;
	const borderClass = isPositive ? "green" : "red"; // Pour appliquer la bordure verte ou rouge

	const [showModal, setShowModal] = useState(false);

	const handleOpenModal = () => setShowModal(true);
	const handleCloseModal = () => setShowModal(false);

	return (
		<>
			<div
				className="hexagon-container"
				style={{
					position: "absolute",
					left: x,
					top: y,
					width: `${radius * 2}px`,
					height: `${radius * 2 * (Math.sqrt(3) / 2)}px`,
					background: "transparent",
					border: "none",
					padding: 0,
					cursor: "pointer",
				}}
				onClick={handleOpenModal}
				onKeyDown={(e) => {
					if (e.key === "Enter" || e.key === " ") {
						handleOpenModal();
					}
				}}
			>
				<div
					className={`hexagon-custom ${borderClass}`}
					style={{
						width: `${radius * 2}px`,
						height: `${radius * 2 * (Math.sqrt(3) / 2)}px`,
					}}
				>
					<div className="hexagon-content-custom">
						<img
							src={image}
							alt={name}
							className="crypto-logo"
							style={{
								width: `${radius * 0.5}px`,
								height: `${radius * 0.5}px`,
							}}
						/>
						<p
							className="crypto-symbol"
							style={{
								fontSize: `${radius * 0.4}px`,
								margin: "0",
								fontWeight: "bold",
							}}
						>
							{symbol.toUpperCase()}
						</p>
						<p
							className="crypto-change"
							style={{
								fontSize: `${radius * 0.2}px`,
								margin: "0",
								color: isPositive ? "#00FF00" : "#FF4D4D",
							}}
						>
							{change24h.toFixed(2)}%
						</p>
					</div>
				</div>
			</div>

			{/* Modale Bootstrap */}
			<Modal show={showModal} onHide={handleCloseModal}>
				<Modal.Header closeButton>
					<Modal.Title>Détails de {name}</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Prix actuel : {price.toFixed(2)}€</p>
					<p>Variation sur 24h : {change24h.toFixed(2)}%</p>
					<p>Symbole : {symbol.toUpperCase()}</p>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleCloseModal}>
						Fermer
					</Button>
				</Modal.Footer>
			</Modal>
		</>
	);
};

export default HexagonCrypto;
