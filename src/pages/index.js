import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Media from '../components/media';
import Slider from '../components/slider';
import Divider from '../components/divider';

import '../styles/index.scss';

const Home = () => {
	return (
		<Layout banner={<Slider />}>
			<SEO title="Home page" />
			<Divider />
			<Media />
			<Divider />
		</Layout>
	)
}

export default Home
