import React from 'react'
import Image from './image'
import proudlysaStyles from './proudlysa.module.scss'

const ProudlySA = () => {
	return (
		<div className={proudlysaStyles.container}>
			<div className={proudlysaStyles.item}>
				<Image filename="proudlysa-logo.png" />
			</div>
			<div className={proudlysaStyles.item}>
				As part of our commitment to South Africa we are delighted to have Proudly
				South African status.
			</div>
		</div>
	)
}

export default ProudlySA
