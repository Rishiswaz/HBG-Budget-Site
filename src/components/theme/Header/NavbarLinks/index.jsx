import React, { useContext } from 'react';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';
import { Link } from 'gatsby';

const NavbarLinks = ({ desktop }) => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper desktop={desktop} theme={theme}>
			<Link href="/why">Why?</Link>
			<Link href="/learnmore">Learn More</Link>
			<Link href="/takesurvey">Survey</Link>
			<Link href="/getinvolved">Get Involved</Link>
			<ToggleTheme />
		</Wrapper>
	);
};

export default NavbarLinks;
