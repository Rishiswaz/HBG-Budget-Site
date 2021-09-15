import React from 'react';
import { Layout, Seo } from 'components/common';
import {
	Intro,
	Skills,
	Contact,
	Projects,
	GetInvolved,
} from 'components/landing';

const Home = () => (
	<Layout>
		<Seo />
		<Intro />
		<Projects />
		<Skills />
		<Contact />
		<GetInvolved />
	</Layout>
);

export default Home;
