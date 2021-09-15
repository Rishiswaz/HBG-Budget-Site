import React from 'react';
import { Container } from 'components/common';
import election_day from 'assets/illustrations/election_day.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const GetInvolved = () => (
	<Wrapper as={Container} id="getinvolved">
		<Details>
			<h2>Get Involved</h2>
			<p>Link to Google Form</p>
			<div>
				<h4>important dates</h4>
				<ul>
					<li>Date 1</li>
					<li>Date 2</li>
				</ul>
			</div>
			<ContactForm />
		</Details>
		<Thumbnail>
			<img
				src={election_day}
				alt="I’m John and I’m a Backend & Devops engineer!"
			/>
		</Thumbnail>
	</Wrapper>
);
