import type React from "react";
import Header from "./components/Header";
import HexagonBubblesContainer from "./components/HexagonBubblesContainer";
import LoginPage from "./pages/LoginPage";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
	return (
		<div className="app-container">
			<Header />
			<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
				<HexagonBubblesContainer />
			</div>
			<Routes>
				<Route path="/login" element={<LoginPage />} />
			</Routes>
		</div>
	);
};

export default App;
