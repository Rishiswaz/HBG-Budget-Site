import React from 'react';
import { Container } from 'components/common';
import contact from 'assets/illustrations/contact.svg';
import { Wrapper, Details, Thumbnail } from './styles';

export const Contact = () => (
	<>
		<Wrapper as={Container} id="survey">
			<Details>
				<h2>Survey</h2>
				<iframe
					width="1280px"
					height="720px"
					src="https://forms.office.com/Pages/ResponsePage.aspx?id=6LfeD0Dz20-PG2LbCRxarqEWEy8DKcRCteIMWA1kCe1UMUtYTzZDUzlRWjhVMTA0VTNINEpMRENSNy4u&embed=true"
					frameborder="0"
					marginwidth="0"
					marginheight="0"
					style={{ border: 'none', maxWidth: '100%', maxHeight: '100vh' }}
					allowfullscreen
					webkitallowfullscreen
					mozallowfullscreen
					msallowfullscreen
				>
					{' '}
				</iframe>
			</Details>
			<Thumbnail>
				<img
					src={contact}
					alt="I’m John and I’m a Backend & Devops engineer!"
				/>
			</Thumbnail>
		</Wrapper>
	</>
);
