import type React from "react";
import HexagonBubblesContainer from "./components/HexagonBubblesContainer";

const App: React.FC = () => {
	return (
		<div className="d-flex justify-content-center align-items-center vh-100 bg-light">
			<HexagonBubblesContainer />
		</div>
	);
};

export default App;
