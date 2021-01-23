import styled from "styled-components";

const Divider = styled.hr`
	border: ${(props) => (props.primary ? "1px solid #59564F" : "1px solid #d87b4f")};
	width: ${(props) => (props.primary ? "200px" : "50px")};
`;

export default Divider;
