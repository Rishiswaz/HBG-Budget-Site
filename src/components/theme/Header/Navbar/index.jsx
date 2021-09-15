import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import NavbarLinks from '../NavbarLinks';
import { Wrapper, Brand } from './styles';
import logo from './logo.png';

const Navbar = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper as={Container}>
			<Brand as={Link} to="/" theme={theme}>
				<img src={logo} alt="logo" style={{ maxHeight: 100 }} />
			</Brand>
			<NavbarLinks desktop />
		</Wrapper>
	);
};

export default Navbar;
