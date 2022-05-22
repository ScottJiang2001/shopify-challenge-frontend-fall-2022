import React, { useState } from "react";
import "./App.scss";

import Header from "./Components/Header";
import PromptSubmission from "./Components/PromptSubmission";
import ResponseCard from "./Components/ResponseCard";

function App() {
	const [summaries, setSummaries] = useState([]);

	const addSummary = (prompt, summary, engine) => {
		setSummaries([
			{ prompt: prompt, summary: summary, engine: engine },
			...summaries,
		]);
	};

	return (
		<div className="App">
			<Header />
			<PromptSubmission addSummary={addSummary} />
			<div className="summary-section">
				{summaries.length !== 0 && <h2> Responses </h2>}
				{summaries.map((summary) => (
					<ResponseCard summary={summary} />
				))}
			</div>
		</div>
	);
}

export default App;
