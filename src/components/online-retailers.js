import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import OnlineRetailersStyles from './online-retailers.module.scss';

const OnlineRetailers = ({ data }) => {
	return (
		<div className={OnlineRetailersStyles.container}>
			<ul className={OnlineRetailersStyles.list}>
				{data.map( d	 => {
					return (
						<li key={uuidv4()}>
							<div><a href={d.url} target='_blank' rel='noopener noreferrer'>{d.name}</a></div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

OnlineRetailers.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		url: PropTypes.string.isRequired
	})
}

export default OnlineRetailers
