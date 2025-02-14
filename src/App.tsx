import type React from "react";
import Header from "./components/Header";
import HexagonBubblesContainer from "./components/HexagonBubblesContainer";
import "../src/App.css";

const App: React.FC = () => {
	return (
		<div className="app-container">
			<Header />
			<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
				<HexagonBubblesContainer />
			</div>
		</div>
	);
};

export default App;
