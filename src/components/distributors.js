import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import h from '../helpers';
import distributorsStyles from './distributors.module.scss';

const Distributors = ({ data }) => {
	h.sortObjectArray(data, 'name');
	return (
		<div className={distributorsStyles.container}>
			<ul className={distributorsStyles.list}>
				{data.map( d	 => {
					return (
						<li key={uuidv4()}>
							{
								(d.url)
									? <div className={distributorsStyles.name}>
										<a href={d.url} target='_blank' rel='noopener noreferrer'>{d.name}</a></div>
									: <div className={distributorsStyles.name}>{d.name}</div>
							}
							{d.contact && <div>{d.contact}</div>}
							{d.email && <div>Email: <a href={`mailto:${d.email}`}>{d.email}</a></div>}
							{d.tel && d.tel > 0 && <div>Tel: <a href={`tel:${h.removeBlanks(d.tel)}`}>{d.tel}</a></div>}
							<div>Region: <span className={distributorsStyles.location}>{d.location.sort().join(', ')}</span></div>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

Distributors.propTypes = {
	data: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		contact: PropTypes.string,
		email: PropTypes.string,
		tel: PropTypes.string,
		url: PropTypes.string,
		location: PropTypes.array.isRequired
	})).isRequired
}

export default Distributors
