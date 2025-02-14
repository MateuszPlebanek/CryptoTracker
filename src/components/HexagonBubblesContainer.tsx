import type React from "react";
import { useCallback, useEffect, useState } from "react";
import HexagonCrypto from "./HexagonCrypto";

interface CryptoData {
	id: string;
	name: string;
	symbol: string;
	image: string;
	current_price: number;
	price_change_percentage_24h: number;
}

interface Bubble {
	id: string;
	x: number;
	y: number;
	vx: number;
	vy: number;
	name: string;
	symbol: string;
	image: string;
	price: number;
	change24h: number;
	radius: number;
	mass: number;
}

const HexagonBubblesContainer: React.FC = () => {
	const [bubbles, setBubbles] = useState<Bubble[]>([]);
	const [windowSize, setWindowSize] = useState({
		width: window.innerWidth,
		height: window.innerHeight,
	});

	// Fonction pour ajuster les bulles lors du redimensionnement
	const adjustBubblesToWindowSize = useCallback(
		(width: number, height: number) => {
			setBubbles((prevBubbles) =>
				prevBubbles.map((bubble) => ({
					...bubble,
					x: Math.min(bubble.x, width - bubble.radius),
					y: Math.min(bubble.y, height - bubble.radius),
				})),
			);
		},
		[],
	);

	// Gestion du redimensionnement de la fenêtre
	useEffect(() => {
		const handleResize = () => {
			setWindowSize({ width: window.innerWidth, height: window.innerHeight });
			adjustBubblesToWindowSize(window.innerWidth, window.innerHeight);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, [adjustBubblesToWindowSize]);

	// Récupération des données API
	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=20&page=1&sparkline=false",
				);
				const data: CryptoData[] = await response.json();

				const initialBubbles = data.map((crypto) => {
					const baseRadius = 55;
					const changeFactor = crypto.price_change_percentage_24h / 10;
					const adjustedRadius = baseRadius * (1 + changeFactor);
					const radius = Math.max(30, Math.min(100, adjustedRadius));

					return {
						id: crypto.id,
						x: Math.random() * window.innerWidth,
						y: Math.random() * window.innerHeight,
						vx: (Math.random() - 0.5) * 2,
						vy: (Math.random() - 0.5) * 2,
						name: crypto.name,
						symbol: crypto.symbol.toUpperCase(),
						image: crypto.image,
						price: crypto.current_price,
						change24h: crypto.price_change_percentage_24h,
						radius: radius,
						mass: 1,
					};
				});

				setBubbles(initialBubbles);
			} catch (error) {
				console.error("Erreur API :", error);
			}
		};

		fetchData();
	}, []);

	// Moteur de physique : collisions et mouvement
	useEffect(() => {
		if (bubbles.length === 0) return;

		const interval = setInterval(() => {
			setBubbles((prevBubbles) => {
				const newBubbles = prevBubbles.map((bubble) => {
					let { x, y, vx, vy, radius } = bubble;

					x += vx;
					y += vy;

					if (x - radius <= 0 || x + radius >= windowSize.width) vx *= -1;
					if (y - radius <= 0 || y + radius >= windowSize.height) vy *= -1;

					return { ...bubble, x, y, vx, vy };
				});

				for (let i = 0; i < newBubbles.length; i++) {
					for (let j = i + 1; j < newBubbles.length; j++) {
						const bubbleA = newBubbles[i];
						const bubbleB = newBubbles[j];

						const apothemA = bubbleA.radius / Math.sqrt(3);
						const apothemB = bubbleB.radius / Math.sqrt(3);
						const minDist = apothemA + apothemB;

						const dx = bubbleB.x - bubbleA.x;
						const dy = bubbleB.y - bubbleA.y;
						const distance = Math.sqrt(dx * dx + dy * dy);

						if (distance < minDist) {
							const nx = dx / distance;
							const ny = dy / distance;
							const overlap = minDist - distance;

							const separationFactor = overlap * 1.2;
							bubbleA.x -= nx * separationFactor;
							bubbleA.y -= ny * separationFactor;
							bubbleB.x += nx * separationFactor;
							bubbleB.y += ny * separationFactor;

							const dvx = bubbleB.vx - bubbleA.vx;
							const dvy = bubbleB.vy - bubbleA.vy;
							const dotProduct = dvx * nx + dvy * ny;

							if (dotProduct > 0) continue;

							const coefficientRestitution = 0.9;
							const impulse = (2 * dotProduct) / (bubbleA.mass + bubbleB.mass);

							bubbleA.vx +=
								impulse * bubbleB.mass * nx * coefficientRestitution;
							bubbleA.vy +=
								impulse * bubbleB.mass * ny * coefficientRestitution;
							bubbleB.vx -=
								impulse * bubbleA.mass * nx * coefficientRestitution;
							bubbleB.vy -=
								impulse * bubbleA.mass * ny * coefficientRestitution;
						}
					}
				}

				return newBubbles;
			});
		}, 16);

		return () => clearInterval(interval);
	}, [bubbles, windowSize]);

	return (
		<div
			style={{
				position: "relative",
				width: "100vw",
				height: "100vh",
				backgroundColor: "#0d0d0d",
				overflow: "hidden",
			}}
		>
			{bubbles.map((bubble) => (
				<HexagonCrypto
					key={bubble.id}
					name={bubble.name}
					symbol={bubble.symbol}
					image={bubble.image}
					price={bubble.price}
					change24h={bubble.change24h}
					x={bubble.x}
					y={bubble.y}
					radius={bubble.radius}
				/>
			))}
		</div>
	);
};

export default HexagonBubblesContainer;
