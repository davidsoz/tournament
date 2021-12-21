import styled from "styled-components";
import TableRow from "../TableRow/TeableRow";

const Table = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`;

function Standing({ teams }) {
	return (
		<Table>
			{teams.map((team) => (
				<TableRow key={team.name} team={team} />
			))}
		</Table>
	);
}

export default Standing;
