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
				<div className={givingStyles.imageContainer}>
					<div className={givingStyles.imageWrapper}>
						<Image filename='herd-logo.png' />
					</div>
				</div>
				<div>
					We feel that it is important to contribute to wildlife conservation.
					So 15% of the profits from the sale of Indlovu gin is donated to <a className={givingStyles.link} href='https://herd.org.za/' target='_blank' rel='noopener noreferrer'>HERD 
					(Hoedspruit Elephant Rehabilitation and Development Trust)</a> to
					support their work in setting up and running South Africa's first elephant orphanage.
					<div className={givingStyles.donateButton}>
						<button href='https://herd.org.za/product/donate/' target='_blank' rel='noopener noreferrer'>Donate Now</button>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Giving
