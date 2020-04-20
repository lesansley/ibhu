import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Carousel from '../components/carousel';

import '../styles/index.scss';

const Home = () => {
	return (
		<Layout banner={<Carousel />}>
			<SEO title="Home page" />
			<h1>Hi from the Home page</h1>
			<p>Welcome to home page</p>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	)
}

export default Home
