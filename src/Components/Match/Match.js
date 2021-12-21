import styled from "styled-components";

const MatchWrapper = styled.div`
	display: flex;
	gap: 10px;
	input {
		width: 35px;
		text-align: center;
	}
`;

function Match({ team1, team2, score1, score2 }) {
	return (
		<MatchWrapper>
			<span>{team1}</span>
			<input value={score1} />
			-
			<input value={score2} />
			<span>{team2}</span>
		</MatchWrapper>
	);
}

export default Match;
