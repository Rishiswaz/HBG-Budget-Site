import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container } from 'components/common';
import pie_chart from 'assets/illustrations/pie_chart.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper>
			<Header />
			<IntroWrapper as={Container}>
				<Details theme={theme}>
					<h1>Harrisburg Budget Data</h1>
					<h4>
						<ol>
							<li>
								<AnchorLink href="#why">Why a People's Budget?</AnchorLink>
								<ol>
									<li>
										Brief Purpose Statement-
										<ol>
											Budgets are a representation of our values as a community.
											For far too long the people in power have decided on these
											budgets with little to no public input. Now is the time to
											demand a People’s Budget that is made for the people of
											Harrisburg, by the people of Harrisburg.
										</ol>
									</li>
									<li>
										Summary of our Philosophy
										<ol>
											<li>
												We believe that budgets are moral contracts between our
												government and our communities. They are the deciding
												factors on where we place our values as a community.
												When budgets are made in the dark without proper input
												from our residents they reflect the best interests of
												the politicians, insiders, and wealthy donors, not the
												people.
												<br /> The City of Harrisburg is receiving an
												unprecedented amount of money from the Federal
												government in the form of ARP funds between 2021 and
												2022. To date there is still no plan on how to best
												allocate those funds, on how to gauge residents’ needs,
												or how they want the money spent. In a year where we are
												still reeling from the effects of a global pandemic,
												there has never been a better time for our City to
												aggressively spend to build a better future for ALL OF
												US. This is a once in a lifetime opportunity for our
												community to come together and work towards a bold new
												future.
											</li>
										</ol>
									</li>
								</ol>
							</li>
							<li>
								<AnchorLink href="#learnmore">Learn More</AnchorLink>
								<ol>
									<li>
										<a href="#">Link to 2021 City Budget</a>
									</li>
									<li>Data/graphs/images</li>
								</ol>
							</li>
							<li>
								Get Involved (link to Get Involved page for more details)
								<ol>
									<li>Plug for community engagement</li>
									<li>Highlight next event date</li>
								</ol>
							</li>
							<li>Logos for partner orgs (so far just HAT and YPOC)</li>
						</ol>
					</h4>
				</Details>
				<Thumbnail>
					<img src={pie_chart} alt="Pie Chart" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	);
};
