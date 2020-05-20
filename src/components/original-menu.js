import React from 'react';
import originalMenuStyles from '../components/original-menu.module.scss';

const OriginalMenu = () => {
	return (
		<div className={originalMenuStyles.container}>
			<ul className={originalMenuStyles.list}>
				<li className={`${originalMenuStyles.listItem} ${originalMenuStyles.large}`}><a href='#original'>Original</a></li>
				<li className={`${originalMenuStyles.listItem} ${originalMenuStyles.small}`}><a href='#original'>Home</a></li>
				<li className={originalMenuStyles.listItem}><a href='#provenance'>Provenance</a></li>
				<li className={`${originalMenuStyles.listItem} ${originalMenuStyles.large}`}><a href='#tasting-notes'>Tasting notes</a></li>
				<li className={`${originalMenuStyles.listItem} ${originalMenuStyles.small}`}><a href='#tasting-notes'>Notes</a></li>
				<li className={`${originalMenuStyles.listItem} ${originalMenuStyles.large}`}><a href='#recommendations'>Recommendations</a></li>
				<li className={`${originalMenuStyles.listItem} ${originalMenuStyles.large}`}><a href='#testamonials'>Testamonials</a></li>
				<li className={originalMenuStyles.listItem}><a href='#faq'>Faq</a></li>
			</ul>
		</div>
	)
}

export default OriginalMenu
