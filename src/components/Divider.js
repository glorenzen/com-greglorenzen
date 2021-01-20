import React from "react";
import styled from "styled-components";

const HR = styled.hr`
	border: ${(props) => (props.primary ? "1px solid #59564F" : "1px solid #d87b4f")};
	width: ${(props) => (props.primary ? "200px" : "50px")};
`;

const Divider = (props) => {
	const { primary } = props;

	return <HR primary={primary} />;
};

export default Divider;
