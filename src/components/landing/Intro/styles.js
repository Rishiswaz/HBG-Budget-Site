import styled from 'styled-components';
//import overlayIllustration from 'assets/illustrations/overlay.svg';

export const Wrapper = styled.div`
	padding-bottom: 4rem;
	background-size: contain;
	background-position: left;
	background-repeat: no-repeat;
	background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#121212)')};
	border-left: 30px solid #008037;
`;

export const IntroWrapper = styled.div`
	padding: 4rem 0;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 960px) {
		flex-direction: column;
	}
`;

export const Details = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
		margin-bottom: 2rem;
	}

	h1 {
		margin-bottom: 2rem;
		font-size: 36pt;
		color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

		@media (max-width: 960px) {
			mix-blend-mode: ${({ theme }) =>
				theme === 'light' ? 'unset' : 'difference'};
		}

		@media (max-width: 680px) {
			font-size: 30pt;
		}
	}

	h4 {
		margin-bottom: 2.5rem;
		font-size: 32pt;
		font-weight: normal;
		color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

		@media (max-width: 960px) {
			mix-blend-mode: ${({ theme }) =>
				theme === 'light' ? 'unset' : 'difference'};
		}

		@media (max-width: 680px) {
			font-size: 26pt;
		}
	}
`;

export const Button_Group = styled.div`
	flex: 1;
	button {
		background-color: #008037; /* Green background */
		border: 1px solid #008037; /* Green border */
		color: #ffffff; /* White text */
		padding: 10px 24px; /* Some padding */
		cursor: pointer; /* Pointer/hand icon */
		float: left; /* Float the buttons side by side */
		width: 10%;
		border-radius: 15px;
		margin: 0 3px;
		@media (max-width: 960px) {
			padding: 5px 12px;
		}
	}

	button a {
		color: #ffffff;
	}

	button:first-of-type {
		margin-left: 0;
	}

	button:last-of-type {
		margin-right: 0;
	}

	/* Clear floats (clearfix hack) */
	.btn-group:after {
		content: '';
		clear: both;
		display: table;
	}

	button:not(:last-child) {
		border-right: none; /* Prevent double borders */
	}

	/* Add a background color on hover */
	button:hover {
		background-color: #3e8e41;
	}

	button a:link {
		color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
		text-decoration: none;
	}

	button a:visted {
		color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
		text-decoration: none;
	}

	button a:hover {
		color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
		text-decoration: none;
	}

	button a:active {
		color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};
		text-decoration: none;
	}
`;

export const Thumbnail = styled.div`
	flex: 1;

	@media (max-width: 960px) {
		width: 100%;
	}

	img {
		width: 100%;
	}
`;
