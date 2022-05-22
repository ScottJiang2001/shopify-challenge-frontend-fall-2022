import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from "@mui/material/CircularProgress";
import "./PromptSubmission.scss";

const PromptSubmission = (props) => {
	const [points, setPoints] = useState(2);
	const [engine, setEngine] = useState("text-curie-001");
	const [prompt, setPrompt] = useState("");
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(false);

	//Remove all new lines along with starting trailing spaces
	//If a prompt only contains newlines or spaces, then it's considered empty
	const wordCount = prompt.trim().split(" ").length;

	async function handleSubmit(e) {
		setError(false);
		setLoading(true);

		if (wordCount < 20) {
			console.log("error!");
			console.log(wordCount);
			setError(true);

			setTimeout(() => {
				setError(false);
			}, 2000);

			setLoading(false);
			return;
		}

		const newPrompt = prompt.trim();
		const result = newPrompt.concat(
			`\n\n Summarize in a numbered list with ${points} points:`
		);

		const data = {
			prompt: result,
			suffix: null,
			max_tokens: 128,
			temperature: 0.5,
			top_p: 1,
			n: 1,
			presence_penalty: 0.0,
			frequency_penalty: 0.0,
		};

		const response = await fetch(
			`https://api.openai.com/v1/engines/${engine}/completions`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_SECRET}`,
				},
				body: JSON.stringify(data),
			}
		);

		const summary = await response.json();
		props.addSummary(prompt, summary.choices[0].text.trim(), engine);

		setPrompt("");
		setLoading(false);
	}
	return (
		<div className="prompt-submission">
			<div className="selection-options">
				<div className="engine-selection">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Engine</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={engine}
							label="Engine"
							onChange={(e) => setEngine(e.target.value)}
						>
							<MenuItem value={"text-curie-001"}>text-curie-001</MenuItem>
							<MenuItem value={"text-babbage-001"}>text-babbage-001</MenuItem>
							<MenuItem value={"text-ada-001"}>text-ada-001</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="point-selection">
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label"># of Points</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={points}
							label="# of Points"
							onChange={(e) => setPoints(e.target.value)}
						>
							<MenuItem value={2}>2</MenuItem>
							<MenuItem value={3}>3</MenuItem>
							<MenuItem value={4}>4</MenuItem>
						</Select>
					</FormControl>
				</div>
			</div>
			<div className="text-input">
				<TextField
					label="Enter your prompt"
					id="custom-css-outlined-input"
					fullWidth
					value={prompt}
					onChange={(e) => setPrompt(e.target.value)}
					multiline
					rows={10}
				/>
			</div>
			{points && engine && (
				<div className = "submit-description">
					<p>
						Summarize your prompt into {" "}
						<strong>
							{points} points
						</strong>{" "}
						using the <strong>{engine}</strong> engine
					</p>
				</div>
			)}
			{error && (
				<div className="error-message">
					<p>
						<strong>
							Please ensure your prompt is longer than 20 words 
						</strong>
					</p>
				</div>
			)}
			<div className="submit-button">
				<Button variant="contained" onClick={handleSubmit} disabled={loading}>
					Summarize!
					{loading && (
						<CircularProgress
							size={22}
							sx={{
								position: "absolute",
								top: "50%",
								left: "50%",
								marginTop: "-12px",
								marginLeft: "-12px",
							}}
						/>
					)}
				</Button>
			</div>
		</div>
	);
};

export default PromptSubmission;
