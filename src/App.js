import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import Button from "./Components/Button/Button";
import Match from "./Components/Match/Match";
import Standing from "./Components/Standing/Standing";

import barcelonaLogo from "./images/FC_Barcelona-logo-D941E13B46-seeklogo.com.png";
import realLogo from "./images/Real_Madrid_Club_de_Futbol-logo-60682932F8-seeklogo.com.png";
import milanLogo from "./images/AC_Milan-logo-FAB8F89DB7-seeklogo.com.png";
import bayernLogo from "./images/bayern-munchen-logo-68D0CB94C3-seeklogo.com.png";
import { shuffleTeams } from "./helpers";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	margin: 20px auto;
`;

function App() {
	const [teams, setTeams] = useState([
		{ logo: barcelonaLogo, name: "Barcelona", game: 0, points: 0 },
		{ logo: realLogo, name: "Real Madrid", game: 0, points: 0 },
		{ logo: milanLogo, name: "AC Milan", game: 0, points: 0 },
		{ logo: bayernLogo, name: "Bayern", game: 0, points: 0 },
	]);

	const [score, setScore] = useState([0, 0]);
	const [tour, setTour] = useState(1);

	const teamNames = useRef(teams.map((team) => team.name));

	const matches = useMemo(() => shuffleTeams(teamNames.current), [teamNames]);

	console.log(matches);

	return (
		<>
			<Wrapper>
				<Standing teams={teams} />
			</Wrapper>
			<Wrapper>
				<Match
					team1={matches[tour - 1][0]}
					team2={matches[tour - 1][1]}
					score1={score[0]}
					score2={score[1]}
				/>
			</Wrapper>
			<Button />
		</>
	);
}

export default App;
