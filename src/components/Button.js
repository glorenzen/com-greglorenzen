import React from "react";

const Button = (props) => {
	const { text, link } = props;

	return (
		<div className="button-wrapper">
			<a href={link}>{text}</a>
		</div>
	);
};

export default Button;
