import { Link } from 'gatsby'
import React from 'react'
import Image from './image'
import flagsStyles from './flags.module.scss' 

const Flags = () => {

	return (
		<div className={flagsStyles.container}>
			<div className={flagsStyles.flags}>
				<ul className={flagsStyles.list}>
					<li className={flagsStyles.listItem}>
						<Link to='/'>
							<Image
							filename='ZA.png'
							alt='South Africa'
							/>	
						</Link>
					</li>
					<li className={flagsStyles.listItem}>
						<Link to='/japan'>
							<Image
								filename='JP.png'
								alt='Japan'
							/>	
						</Link>
					</li>
					<li className={flagsStyles.listItem}>
						<Link to='/taiwan'>
							<Image
								filename='TW.png'
								alt='Taiwan'
							/>	
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Flags
