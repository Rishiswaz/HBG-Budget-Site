import React from 'react';
import { Container } from 'components/common';
import election_day from 'assets/illustrations/election_day.svg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const GetInvolved = () => (
	<Wrapper as={Container} id="getinvolved">
		<Details>
			<h2>Get Involved</h2>
			<div>
				<h4>Events</h4>
				<ul>
					<li>Events Coming Soon</li>
				</ul>
			</div>
			<h4>Sign Up For Updates</h4>
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
