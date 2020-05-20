import React from 'react';
import Image from '../components/image';
import provenanceStyles from './provenance.module.scss';

const Provenance = () => {
	return (
		<div className={provenanceStyles.container}>
			<div className={`${provenanceStyles.image} ${provenanceStyles.pic1}`}>
				<Image filename='botlierskop-lodge.jpg' alt='Botlierskop Game Reserve' />
			</div>
			<div className={provenanceStyles.para1}>
				<p>With help from the elephants of Botlierskop Game Reserve, we produced our first batch of Africa’s Original Elephant Dung Gin – Indlovu Gin.</p>
				<p>Being able to trace provenance is important because Indlovu gin will have vintages (similar to wine). Depending on the locale where and season during which the dung is collected the botanicals will vary, which will infuse different flavours.</p>
			</div>
			<div className={`${provenanceStyles.image} ${provenanceStyles.pic2}`}>
				<Image filename='dung-collecting-les.jpg' alt='Collecting elephant dung'/>
			</div>
			<div className={provenanceStyles.para2}>
				<p>The provenance of each bottle of our gin can be traced and is printed, in two parts, on the back of the bottle.
				The first part is the coordinates of the game reserve where the dung was collected
				e.g. <span className={provenanceStyles.bold}>34.03S 22.14E</span>, which is Botlierskop Game Reserve. The second part is the date on
				which the dung collected e.g. <span className={provenanceStyles.bold}>260618</span>, which is 2018-06-26.</p>
			</div>
		</div>
	)
}

export default Provenance
