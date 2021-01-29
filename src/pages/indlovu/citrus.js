import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import CitrusMenu from '../../components/citrus-menu';
import FAQ from '../../components/faq';
import Divider from '../../components/divider';
import Recommendations from '../../components/recommendations';
import TastingNotes from '../../components/tasting-notes';
import Testamonials from '../../components/testamonials';
import Provenance from '../../components/provenance';
import OriginalIntro from '../../components/original-intro';
import expressionsStyles from './expressions.module.scss';


const Citrus = () => {
	return (
		<Layout>
			<SEO title='Indlovu Citrus Orange and Marula Gin' />
			<div className={expressionsStyles.menuContainer} >
				<div className={expressionsStyles.menu}>
					<CitrusMenu />
				</div>
			</div>
			<div id='citrus' className={expressionsStyles.hyperJump}>
				<h1 className={`${expressionsStyles.h1} all-caps`}>Indlovu Citrus <span className={expressionsStyles.large}>Gin</span></h1>
				<OriginalIntro />
			</div>
			<div className={expressionsStyles.large}>
				<Divider />
			</div>
			<div id='provenance' className={expressionsStyles.hyperJump}>
				<h2   className='all-caps'>Provenance</h2>
				<Provenance />
			</div>
			<Divider />	
			<div id='tasting-notes' className={expressionsStyles.hyperJump}>
				<h2 className='all-caps'>Tasting Notes</h2>
				<TastingNotes gin='original' />
			</div>
			<div className={expressionsStyles.large}>
				<Divider />
			</div>
			<div id='recommendations' className={expressionsStyles.hyperJump}>
				<h2  className='all-caps'>Recommendations</h2>
				<Recommendations gin='original' />
			</div>
			<div className={expressionsStyles.large}>
				<Divider />
			</div>
			<div id='testamonials' className={expressionsStyles.hyperJump}>
				<h2  className='all-caps'>Testamonials</h2>
				<Testamonials />
			</div>
		</Layout>
	)
}

export default Citrus
