import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import Divider from '../components/divider';
import stockistsStyles from './stockists.module.scss';
import Distributors from '../components/distributors';

const Stockists = () => {
	const data = useStaticQuery(graphql`
		query {
			retailers: allContentfulRetailers {
				nodes {
					latlng {
						lat
						lon
					}
					name
					province
					tel
					url
					email
					contact
				}
			}
			distributors: allContentfulDistributors {
				nodes {
					name
					country
					contact
					email
					tel
					url
				}
			}
			online: allContentfulOnline {
				nodes {
					name
					url
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO title="Stockists page" />
			<h1>Retailers</h1>
			<div className={stockistsStyles.mapContainer}>
				<Map data={data}/>
			</div>
			<Divider />
			<h2>Online retailers</h2>
			<div>
				<ul className={stockistsStyles.list}>
					{data.online.nodes.map( node	 => {
						return (
							<li key={uuidv4()}>
								<div><a href={node.url} target='_blank' rel='noopener noreferrer'>{node.name}</a></div>
							</li>
						)
					})}
				</ul>
			</div>
			<h2>Distributors</h2>
			<Distributors data={data.distributors.nodes} />
		</Layout>
	)
}

export default Stockists
