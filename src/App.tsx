import type React from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";

const App: React.FC = () => {
	return (
		<div className="app-container">
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
