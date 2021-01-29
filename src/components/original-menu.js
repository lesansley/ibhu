import React from 'react';
import expressionsMenuStyles from '../components/expressions-menu.module.scss';
import originalMenuStyles from '../components/original-menu.module.scss';

const OriginalMenu = () => {
	return (
		<div className={`${expressionsMenuStyles.container} ${originalMenuStyles.container}`}>
			<ul className={`${expressionsMenuStyles.list} ${originalMenuStyles.list}`}>
				<li className={`${expressionsMenuStyles.listItem} ${expressionsMenuStyles.large} ${originalMenuStyles.listItem}`}><a href='#original'>Original</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${expressionsMenuStyles.small} ${originalMenuStyles.listItem}`}><a href='#original'>Home</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${originalMenuStyles.listItem}`}><a href='#provenance'>Provenance</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${expressionsMenuStyles.large} ${originalMenuStyles.listItem}`}><a href='#tasting-notes'>Tasting notes</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${expressionsMenuStyles.small} ${originalMenuStyles.listItem}`}><a href='#tasting-notes'>Notes</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${expressionsMenuStyles.large} ${originalMenuStyles.listItem}`}><a href='#recommendations'>Recommendations</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${expressionsMenuStyles.large} ${originalMenuStyles.listItem}`}><a href='#testamonials'>Testamonials</a></li>
				<li className={`${expressionsMenuStyles.listItem} ${originalMenuStyles.listItem}`}><a href='#faq'>Faq</a></li>
			</ul>
		</div>
	)
}

export default OriginalMenu
