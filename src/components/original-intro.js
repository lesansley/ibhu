import React from 'react';
import Image from '../components/image';
import originalIntroStyles from './provenance.module.scss';

const OriginalIntro = () => {
	return (
		<div className={originalIntroStyles.container}>
			<div className={`${originalIntroStyles.image} ${originalIntroStyles.pic1}`}>
				<Image filename='bottle-on-mobibar.jpg' alt='Indlovu gin bottle on mobile bar' />
			</div>
			<div className={originalIntroStyles.para1}>
				<p>An innovative premium gin for the adventurous spirit and the discerning gin collector.</p>
				<p>The only gin designed by the African elephant from foraged botanicals, uncover the true taste of Africa in every glass.</p>
				<p>The gin is smooth, complex with earthy flavours and so good all you need is a glass and ice.</p>
			</div>
			<div className={`${originalIntroStyles.image} ${originalIntroStyles.pic2}`}>
				<Image filename='bottle-by-fire.jpg' alt='Indlovu gin bottle next to fire'/>
			</div>
			<div className={originalIntroStyles.para2}>
				<p>This is an exclusive gin for the person who loves the spirit of Africa – the freedom, the sunsets, the textures and the flavours of the African bush.</p>
				<p>The Ibhu brand is founded in the spirit of innovation, and Indlovu is our gin under that brand. Indlovu gin is made using multiple flavouring runs.</p>
				<p>The essential ingredients in Indlovu gin are derived from elephant dung that is washed and dried. The extracted botanicals are then infused into the gin, which provides unique African flavours.</p>
			</div>
		</div>
	)
}

export default OriginalIntro
