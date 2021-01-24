import styled from "styled-components";

const Button = styled.button`
	text-align: center;
	text-decoration: none;
	color: ${(props) => (props.primary ? "#fff" : "#d87b4f")};
	font-weight: bold;
	font-size: 24px;
	font-family: "Raleway", sans-serif;
	padding: 10px 20px;
	border: 2px solid #d87b4f;
	background-color: ${(props) => (props.primary ? "#d87b4f" : "rgba(255, 255, 255, 0)")};
	cursor: pointer;
`;

export default Button;
