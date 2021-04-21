import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Map from '../components/map';
import Divider from '../components/divider';
import stockistsStyles from './stockists.module.scss';
import Distributors from '../components/distributors';
import OnlineRetailers from '../components/online-retailers';

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
					location
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
			onlineInt: allContentfulOnlineInt {
				nodes {
					name
					location
					contact
					email
					tel
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
			<OnlineRetailers data={data.online.nodes} />
			<h2>International online retailers</h2>
			<Distributors data={data.onlineInt.nodes}/>
			<h2>Distributors</h2>
			<Distributors data={data.distributors.nodes} />
		</Layout>
	)
}

export default Stockists
