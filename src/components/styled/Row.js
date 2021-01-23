import styled from "styled-components";
import Column from "./Column";

const Row = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	padding: 10px 0;
	margin: 0 auto;
	width: 90%;

	& ${Column}:last-child {
		margin-right: 0 !important;
	}

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

export default Row;
