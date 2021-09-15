import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, Item } from './styles';

export const Projects = () => {
	const { theme } = useContext(ThemeContext);
	return (
		<Wrapper as={Container} id="why">
			<Item theme={theme}>
				<h2>Why A People's Budget?</h2>
				<h4>
					<ol>
						<li>
							The "budget as a moral document"
							<ol>
								<li>
									Budgets reflect our values as a community. A dollar allocated
									for ____ could have been spent on children’s programs, blight
									amelioration, or investing in real public safety programs.
									Currently, the values of the City are decided almost entirely
									by the mayor and their team without resident input. As a
									result, the budget rarely reflects the values of residents.
									Instead, it reflects the values of just a small group of
									people in City Hall. In order to ensure the budget works for
									all residents and reflects resident values, we must first
									gauge what those priorities are. The People’s Budget program
									will educate City residents on the budget and how it works,
									get input from residents on their spending priorities,
									communicate findings back to residents and to decision makers,
									and will advocate for creating a municipal budget that lines
									up with resident’s priorities.
								</li>
							</ol>
						</li>
						<li>
							Reframing what "public safety" means
							<ol>
								<li>
									Despite increases to the police budget every year, residents
									in Harrisburg still do not feel safe. Deep distrust in the
									police as well as the inability of the police to tackle the
									root causes of crime make them ill suited to provide us real
									safety. In the past few years the City has spent significant
									amounts of money on CSAs and riot equipment under the public
									safety budget. Residents have been left perplexed as to how
									that translates to safer day to day for themselves and their
									family. If residents were able to directly communicate what
									public safety means for them, the City could better allocate
									funds to projects that deliver real public safety City
									programs that provide after school activities and enrichment
									to children, that fund rehabilitation and other mental health
									resources for struggling residents, and that tackle crumbling
									City infrastructure such as sidewalks, parks, roads, and
									neighborhood beautification projects outside of downtown and
									midtown, will provide real public safety.
								</li>
							</ol>
						</li>
					</ol>
				</h4>
			</Item>
		</Wrapper>
	);
};
