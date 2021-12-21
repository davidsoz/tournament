import { shuffle } from "lodash";

export function shuffleTeams(teams) {
	let result = [];

	for (let i = 0; i < teams.length - 1; i++) {
		for (let j = i + 1; j < teams.length; j++) {
			result.push(
				Math.random() < 0.5
					? [teams[i], teams[j]]
					: [teams[j], teams[i]]
			);
		}
	}

	return shuffle(result);
}
