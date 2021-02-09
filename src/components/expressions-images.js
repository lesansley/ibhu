import React from 'react';
import { Link } from 'gatsby';
import { v4 as uuidv4 } from 'uuid';
import Image from './image';
import expressionsImagesStyles from './expressions-images.module.scss';

const ExpressionsImages = ({ data }) => {
	return (
		<div className={expressionsImagesStyles.imageContainer}>
			{data.map(expression => {
				return (
					<div className={expressionsImagesStyles.image} key={uuidv4()}>
						<Link className={expressionsImagesStyles.link} to={expression.page}>
							<Image filename={expression.imageName} alt={expression.ImageAlt} />
							<h2
								className={`${expressionsImagesStyles.p} ${expressionsImagesStyles.allCaps} ${expression.color}-text`}
							>{expression.htmlText}</h2>
						</Link>
					</div>
				)
			})}
		</div>
	)
}

export default ExpressionsImages
