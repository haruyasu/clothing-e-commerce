import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Open Sans Condensed';
		padding: 20px 40px;

		@media screen and (max-width: 800px) {
			padding: 10px;
		}
	}

	a {
		text-decoration: none;
		color: black;
	}

	a, a:focus {
		outline:none;
	}

	button:focus {
		outline:none;
	}

	* {
		box-sizing: border-box;
	}
`;


