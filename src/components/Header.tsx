import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Header.css";
import {
	Button,
	FormControl,
	Image,
	InputGroup,
	ListGroup,
	Modal,
} from "react-bootstrap";
import { Search, XCircle } from "react-bootstrap-icons";

interface CryptoData {
	id: string;
	name: string;
	symbol: string;
	image: string;
	current_price: number;
	price_change_percentage_24h: number;
}

const Header = () => {
	const navigate = useNavigate();

	const [search, setSearch] = useState("");
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
	const [showSearchMobile, setShowSearchMobile] = useState(false);
	const [cryptos, setCryptos] = useState<CryptoData[]>([]);
	const [filteredCryptos, setFilteredCryptos] = useState<CryptoData[]>([]);
	const [selectedCrypto, setSelectedCrypto] = useState<CryptoData | null>(null);

	const handleLoginClick = () => {
		navigate("/login");
	};

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setSearch(value);

		if (value.trim() === "") {
			setFilteredCryptos([]);
		} else {
			const filtered = cryptos.filter(
				(crypto) =>
					crypto.name.toLowerCase().includes(value.toLowerCase()) ||
					crypto.symbol.toLowerCase().includes(value.toLowerCase()),
			);
			setFilteredCryptos(filtered);
		}
	};

	const handleResize = useCallback(() => {
		setIsMobile(window.innerWidth <= 768);
	}, []);

	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [handleResize]);

	useEffect(() => {
		const fetchCryptos = async () => {
			try {
				const response = await fetch(
					"https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false",
				);
				const data: CryptoData[] = await response.json();
				setCryptos(data);
			} catch (error) {
				console.error("Erreur API :", error);
			}
		};

		fetchCryptos();
	}, []);

	const handleSelectCrypto = (crypto: CryptoData) => {
		setSelectedCrypto(crypto);
		setFilteredCryptos([]);
		setSearch("");
	};

	const handleCloseModal = () => {
		setSelectedCrypto(null);
	};

	const handleShowSearchMobile = () => {
		setShowSearchMobile(true);
	};

	const handleCloseSearchMobile = () => {
		setShowSearchMobile(false);
		setSearch("");
		setFilteredCryptos([]);
	};

	return (
		<header className="header">
			<h1 className="site-title">CryptoTracker</h1>

			{/* Barre de recherche sur Desktop */}
			{!isMobile && (
				<div className="search-container">
					<InputGroup className="search-bar custom-search-group">
						<InputGroup.Text className="search-input-icon">
							<Search className="search-icon" />
						</InputGroup.Text>
						<FormControl
							type="text"
							placeholder="Rechercher une crypto-monnaie..."
							value={search}
							onChange={handleSearchChange}
						/>
					</InputGroup>

					{filteredCryptos.length > 0 && (
						<div className="search-results">
							<ListGroup>
								{filteredCryptos.map((crypto) => (
									<ListGroup.Item
										key={crypto.id}
										action
										onClick={() => handleSelectCrypto(crypto)}
									>
										<img
											src={crypto.image}
											alt={crypto.name}
											className="crypto-icon"
										/>
										<span>
											{crypto.name} - {crypto.symbol.toUpperCase()}
										</span>
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					)}
				</div>
			)}

			{/* Icônes sur Mobile */}
			<div className="icons-container">
				{isMobile && !showSearchMobile && (
					<Button
						variant="outline-light"
						className="search-icon-btn"
						onClick={handleShowSearchMobile}
					>
						<Search className="search-icon-btn-inner" />
					</Button>
				)}

				{/* Avatar */}
				<button
					className="user-avatar"
					onClick={handleLoginClick}
					type="button"
				>
					<Image
						src="https://www.w3schools.com/howto/img_avatar.png"
						roundedCircle
						alt="Avatar utilisateur"
						className="avatar-img"
					/>
				</button>
			</div>

			{/* Barre de recherche sur mobile */}
			{isMobile && showSearchMobile && (
				<div className="search-container-mobile">
					<InputGroup className="search-bar custom-search-group">
						<InputGroup.Text className="search-input-icon">
							<Search className="search-icon" />
						</InputGroup.Text>
						<FormControl
							type="text"
							placeholder="Rechercher une crypto-monnaie..."
							value={search}
							onChange={handleSearchChange}
							autoFocus
						/>
						<Button
							variant="outline-secondary"
							onClick={handleCloseSearchMobile}
						>
							<XCircle />
						</Button>
					</InputGroup>

					{filteredCryptos.length > 0 && (
						<div className="search-results">
							<ListGroup>
								{filteredCryptos.map((crypto) => (
									<ListGroup.Item
										key={crypto.id}
										action
										onClick={() => handleSelectCrypto(crypto)}
									>
										<img
											src={crypto.image}
											alt={crypto.name}
											className="crypto-icon"
										/>
										<span>
											{crypto.name} - {crypto.symbol.toUpperCase()}
										</span>
									</ListGroup.Item>
								))}
							</ListGroup>
						</div>
					)}
				</div>
			)}

			{/* Modale de détails */}
			{selectedCrypto && (
				<Modal show onHide={handleCloseModal}>
					<Modal.Header closeButton>
						<Modal.Title>Détails de {selectedCrypto.name}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>Symbole : {selectedCrypto.symbol.toUpperCase()}</p>
						<p>Prix : {selectedCrypto.current_price.toFixed(2)} €</p>
						<p>
							Évolution sur 24h :{" "}
							{selectedCrypto.price_change_percentage_24h.toFixed(2)}%
						</p>
						<img
							src={selectedCrypto.image}
							alt={selectedCrypto.name}
							width="50"
						/>
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={handleCloseModal}>
							Fermer
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</header>
	);
};

export default Header;
