import React from 'react'
import Image from '../components/image'
import Layout from '../components/layout'
import SEO from '../components/seo'

import givingStyles from './giving.module.scss'

const Giving = () => {
	return (
		<Layout>
			<SEO title='Giving Back page' />
			<h1>Giving Back</h1>
			<div className={givingStyles.container}>
				<div className={givingStyles.givingAfPic}>
					<Image filename='africa-foundation.jpg' />
				</div>
				<div className={`${givingStyles.image} ${givingStyles.givingBathosPic}`}>
					<Image filename='bathos.jpg' />
				</div>
				<div className={`${givingStyles.image} ${givingStyles.givingAfInfo}`}>
					We felt that it was important that the brand is underpinned by a strong conservation message.
					So 15% of the profits from the sale of Indlovu gin will be donated to the Africa Foundation to
					support their work in wildlife conservation at Phinda Game Reserve.
					<div className={givingStyles.donateButton}>
						<a href="//widgets.justgiving.com/Button/Redirect?p=eyJJZCI6ImE3MDg4N2JlLTk2YTctNDExMi1hYmMwLWNkMTI1ZTJlNzMzMyIsIkNoYXJpdHlJZCI6MTQzMTAzLCJTaXplIjoibCIsIlJlZmVyZW5jZSI6ImliaHUiLCJUeXBlIjoiRG9uYXRlIn0=">
							<img src="//widgets.justgiving.com/Button?p=eyJJZCI6ImE3MDg4N2JlLTk2YTctNDExMi1hYmMwLWNkMTI1ZTJlNzMzMyIsIkNoYXJpdHlJZCI6MTQzMTAzLCJTaXplIjoibCIsIlJlZmVyZW5jZSI6ImliaHUiLCJUeXBlIjoiRG9uYXRlIn0=" alt={`just giving logo`}/>
						</a>
					</div>
				</div>
				<div className={givingStyles.givingBathosInfo}>
					Ibhu provides the cooking gas to Langrug Soup Kitchen at Batho’s Place, Franschhoek, which
					provides the children on the informal settlement with a nutritious meal every weekend.
				</div>
			</div>
		</Layout>
	)
}

export default Giving
