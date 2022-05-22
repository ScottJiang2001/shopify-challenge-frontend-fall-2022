import React from "react";
import "./ResponseCard.scss";

const ResponseCard = (props) => {
	return (
		<div className="summary-card">
			<div className="prompt-summary">
				<div className="prompt">
					<h3> Prompt </h3>
					<p>{props.summary.prompt}</p>
				</div>
				<div className="summary">
					<h3 bold> Summary </h3>
					<p>{props.summary.summary}</p>
				</div>
			</div>
			<div className="engine">
				<span>
					<strong> Engine: </strong>
					{props.summary.engine}
				</span>
			</div>
		</div>
	);
};

export default ResponseCard;
