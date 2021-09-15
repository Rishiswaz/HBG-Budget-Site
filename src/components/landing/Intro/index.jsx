import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import pie_chart from 'assets/illustrations/pie_chart.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
	const { theme } = useContext(ThemeContext);

	return (
		<Wrapper>
			<IntroWrapper as={Container}>
				<Details theme={theme}>
					<h1>Harrisburg Budget Data</h1>
					<h4>Purpose Statement</h4>
					<p>
						Budgets are a representation of our values as a community. For far
						too long the people in power have decided on these budgets with
						little to no public input. Now is the time to demand a People’s
						Budget that is made for the people of Harrisburg, by the people of
						Harrisburg.
					</p>
					<h4> Summary of our Philosophy</h4>
					<p>
						We believe that budgets are moral contracts between our government
						and our communities. They are the deciding factors on where we place
						our values as a community. When budgets are made in the dark without
						proper input from our residents they reflect the best interests of
						the politicians, insiders, and wealthy donors, not the people.
						<br /> The City of Harrisburg is receiving an unprecedented amount
						of money from the Federal government in the form of ARP funds
						between 2021 and 2022. To date there is still no plan on how to best
						allocate those funds, on how to gauge residents’ needs, or how they
						want the money spent. In a year where we are still reeling from the
						effects of a global pandemic, there has never been a better time for
						our City to aggressively spend to build a better future for ALL OF
						US. This is a once in a lifetime opportunity for our community to
						come together and work towards a bold new future.
					</p>
				</Details>
				<Thumbnail>
					<img src={pie_chart} alt="Pie Chart" />
				</Thumbnail>
			</IntroWrapper>
		</Wrapper>
	);
};
