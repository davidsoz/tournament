import styled from "styled-components";

const BtnCont = styled.div`
	text-align: center;
`;

function Button() {
	return (
		<BtnCont>
			<button>Play Game</button>
		</BtnCont>
	);
}

export default Button;
