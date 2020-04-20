import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import ResponsiveMenu from 'react-responsive-navbar';

import menuStyles from './menu.module.scss';
import { MdMenu, MdClose } from 'react-icons/md';

const Menu = () => {
	const data = useStaticQuery(graphql`
    query SiteMenuQuery {
      site {
        siteMetadata {
					menuLinks {
						name
						link
					}
        }
      }
    }
  `)
	
	return (
		<div className={menuStyles.container}>
			<ResponsiveMenu
				menuOpenButton={<MdMenu size={30} className={menuStyles.menuButton} />}
				menuCloseButton={<MdClose size={30} className={menuStyles.menuButton} />}
        changeMenuOn="500px"
				largeMenuClassName={menuStyles.largeMenu}
        smallMenuClassName={menuStyles.smallMenu}
        menu={
					<ul className={menuStyles.navList}>
            {data.site.siteMetadata.menuLinks.map(link => (
							<li key={link.name} className={menuStyles.listItem}>
								<Link
									to={link.link}
									className={menuStyles.linkItem}
									activeClassName={menuStyles.activeLinkItem}
								>
									{link.name}
								</Link>
							</li>
						))}
          </ul>
        }
      />
		</div>
	)
}

export default Menu;
