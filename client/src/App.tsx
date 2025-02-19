import type { FC } from "react";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";

const App: FC = () => {
	const location = useLocation();
	const isAuthPage = location.pathname === "/login" || location.pathname === "/register";

	return (
		<div className="app-container">
			{!isAuthPage && <Header />}
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/register" element={<RegisterPage />} />
			</Routes>
			{!isAuthPage && <Footer />}
		</div>
	);
};

export default App;
