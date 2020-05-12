import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby'
import { MdEmail, MdLocalPhone } from 'react-icons/md';
import { v4 as uuidv4 } from 'uuid';
import Img from 'gatsby-image';
import h from '../helpers';
import contactBarLayout from './contact-bar.module.scss';

class ContactBar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	}

	linkHref(socials, name) {
		for (let i = 0; i < socials.length; i++) {
			if (socials[i].name === name) {
				return socials[i].url
			}
		}
	}

	render() {
		return (
			<StaticQuery
				query={graphql`
					query {
						site {
							siteMetadata {
								contact
								email
								name
								tel
								social {
									handle
									name
									url
								}
							}
						}
						allFile(filter: {relativeDirectory: {eq: "social"}}) {
							edges {
								node {
									name
									childImageSharp {
										fixed(width: 50) {
											...GatsbyImageSharpFixed
										}
									}
								}
							}
						}
					}
				`}	

				render={ data => {
					return (
						<div className={contactBarLayout.container}>
							<div>
								<ul className={contactBarLayout.list}>
									<li className={contactBarLayout.listItem} key={uuidv4()}>
										<MdEmail />&nbsp;<a href={`mailto:${data.site.siteMetadata.email}`}>{data.site.siteMetadata.email}</a>
									</li>
									<li className={contactBarLayout.listItem} key={uuidv4()}>
										<MdLocalPhone />&nbsp;<a href={`tel:${h.removeBlanks(data.site.siteMetadata.tel)}`}>{data.site.siteMetadata.tel}</a>
									</li>
								</ul>
							</div>
							<div>
								<div className={contactBarLayout.iconList}>
									{data.allFile.edges.map(edge => {
										return (
											<div className={contactBarLayout.iconItem} key={uuidv4()}>
												<a href={this.linkHref(data.site.siteMetadata.social, edge.node.name)} target='_blank' rel='noopener noreferrer'>
													<Img fixed={edge.node.childImageSharp.fixed} />
												</a>
											</div>
										)
									})}
								</div>
							</div>
						</div>
					)
				}
				}
			/>
		)
	}
}

export default ContactBar
