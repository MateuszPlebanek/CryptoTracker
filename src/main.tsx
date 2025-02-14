import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Ajout de Bootstrap
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<BrowserRouter>
			<App />
			</BrowserRouter>
		</StrictMode>,
	);
} else {
	console.error("Élément #root introuvable");
}
