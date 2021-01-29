import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const Divider = () => {
	const data = useStaticQuery(graphql`
		query {
			file(name: {eq: "repeat-pattern-black"}) {
				publicURL
				name
			}
		}
	`)
	
	return (
		<div>
			<img src={data.file.publicURL} alt={data.file.name} />
		</div>
	)
}

export default Divider

/*
query {
	allFile(filter: {relativeDirectory: {eq: "pattern"}}) {
    edges {
      node {
        publicURL
				name
      }
    }
  }
}
*/
