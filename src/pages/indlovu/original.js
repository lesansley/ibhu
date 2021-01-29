import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import OriginalMenu from '../../components/original-menu';
import FAQ from '../../components/faq';
import Divider from '../../components/divider';
import Recommendations from '../../components/recommendations';
import TastingNotes from '../../components/tasting-notes';
import Testamonials from '../../components/testamonials';
import Provenance from '../../components/provenance';
import OriginalIntro from '../../components/original-intro';
import expressionsStyles from './expressions.module.scss';


const Original = () => {
	return (
		<Layout>
			<SEO title='Indlovu Original Elephant Dung Gin' />
			<div className={expressionsStyles.menuContainer} >
				<div className={expressionsStyles.menu}>
					<OriginalMenu />
				</div>
			</div>
			<div id='original' className={expressionsStyles.hyperJump}>
				<h1 className={`${expressionsStyles.h1} all-caps`}>Indlovu Original <span className={expressionsStyles.large}>Gin</span></h1>
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
			<Divider />
			<div id='faq' className={expressionsStyles.hyperJump}>
				<h2  className='all-caps'>
					<span className={expressionsStyles.small}>FAQs</span>
					<span className={expressionsStyles.large}>Frequently Asked Questions</span></h2>
				<FAQ />
			</div>
		</Layout>
	)
}

export default Original
