import React, { useContext } from 'react';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper id="learnmore">
			<SkillsWrapper as={Container}>
				<Thumbnail>
					<img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
				</Thumbnail>
				<Details theme={theme}>
					<h1>Learn More</h1>
					<p>
						<ol>
							<li>
								<a href="#">Link to educational workshop recordings</a>
							</li>
							<li>Summary of 2021 budget fight</li>
						</ol>
					</p>
				</Details>
			</SkillsWrapper>
		</Wrapper>
	);
};
