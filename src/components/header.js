import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Menu from './menu.js'
import Image from './image'

import headerStyles from './header.module.scss'

const Header = () => {

	return (
		<header className={headerStyles.container}>
			<div className={headerStyles.content}>
				<div className={headerStyles.logoContainer}>
					<Link
						to='/'
						className={headerStyles.link}
					>
						<div className={headerStyles.logo}>
							<Image filename='ibhu-logo-white.png' />
						</div>
					</Link>
				</div>
				<Menu />
			</div>
		</header>
	)
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
