import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';

export const Contact = () => (
	<Wrapper as={Container} id="survey">
		<Details>
			<h2>Survey</h2>
			<p>future survey emebed</p>
		</Details>
		<Thumbnail>
			<img src={contact} alt="I’m John and I’m a Backend & Devops engineer!" />
		</Thumbnail>
	</Wrapper>
);
