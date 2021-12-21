import styled from "styled-components";

const Row = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 5px;
	width: 500px;

	div {
		width: 200px;
		padding: 5px 0;
		border: 1px solid lightgray;
	}

	div:first-child {
		width: 30px;
		text-align: center;
		border: none;
		img {
			height: 20px;
		}
	}
`;

function TableRow({ team }) {
	return (
		<Row>
			<div>
				<img src={team.logo} alt={team.logo} />
			</div>
			<div>{team.name}</div>
			<div>{team.game}</div>
			<div>{team.points}</div>
		</Row>
	);
}

export default TableRow;
