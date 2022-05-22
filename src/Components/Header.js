import React from "react";
import OpenAiLogo from "../OpenAI.svg";
import "./Header.scss";

const Header = () => {
	return (
		<div className="header-section">
			<h1> Point Summarizer </h1>
			<div className="powered-by">
				<span>Powered by</span>
				<img src={OpenAiLogo} alt="OpenAI Logo" width="110" />
			</div>
			<div className="description">
				<p>
					Too lazy to read? Use Rapid Summary to quickly summarize any prompt
					into 1-4 points! It's simple, choose from a range of 3 GPT-3 engines,
					number of points you'd like to summarize, and submit!
				</p>
			</div>
		</div>
	);
};

export default Header;
