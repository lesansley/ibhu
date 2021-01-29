import React from 'react';
import expressionsMenuStyles from '../components/expressions-menu.module.scss';
import pinkMenuStyles from '../components/pink-menu.module.scss';

const PinkMenu = () => {
	return (
		<div className={`${expressionsMenuStyles.container} ${pinkMenuStyles.container}`}></div>
	)
}

export default PinkMenu
