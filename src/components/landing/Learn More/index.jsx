import React, { useContext } from 'react';
//import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';
import faq from './FAQ.pdf';
export const LearnMore = () => {
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
								<a href={faq} download>
									FAQ
								</a>
							</li>
							<li>
								<a href="https://www.youtube.com/playlist?list=PLkC2DAhbH7qL91gBbSLnLnauRXXG4CKTJ">
									Link to educational workshop recordings
								</a>
							</li>
							<li>
								<a href="http://harrisburgcitycontroller.com/wp-content/uploads/2015/02/2021-Approved-Budget.pdf">
									Harrisburg City 2021 Adopted Budget
								</a>
							</li>
							<li>
								<a href="http://harrisburgcitycontroller.com/budgets/">
									Harrisburg City Budgets Archive
								</a>
							</li>
						</ol>
					</p>
				</Details>
			</SkillsWrapper>
		</Wrapper>
	);
};
