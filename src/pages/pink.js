import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Pink = () => {
	return (
		<Layout>
			<SEO title="Pink Indlovu Gin page" />
			<h1>Hi from the Pink page</h1>
			<p>Welcome to pink page</p>
			<Link to="/">Go back to the homepage</Link>
		</Layout>
	)
}

export default Pink
