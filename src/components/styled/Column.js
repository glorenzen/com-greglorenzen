import styled from "styled-components";

const Column = styled.div`
	display: flex;
	flex-direction: column;
	flex-basis: 100%;
	flex: 1;
	margin-right: 30px;

	@media (max-width: 1024px) {
		margin-right: 0;
	}
`;

export default Column;
