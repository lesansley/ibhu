import React, { Component } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout'
import SEO from '../components/seo';
import ContactForm from '../components/contact-form';
import Divider from '../components/divider';
import ContactBar from '../components/contact-bar';
import ContactSubmit from '../components/contact-submit';
//import contactLayout from './contact.module.scss'
class Contact extends Component {
  constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: '',
			submitted: false
		}
  }

	formSubmit(data) {
		this.setState(state => ({ data }));
		this.setState({submitted: true});
	}

	pageDisplay() {

	}

	render() {
		const submitted = this.state.submitted;
		let display;
		if (!submitted) {
			display = <ContactForm formSubmit={this.formSubmit.bind(this)} />
		} else {
			display = <ContactSubmit />
		}

		return (
			<StaticQuery
				query={(graphql`
					query {
						site(siteMetadata: {}) {
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
					}
				`)}

				render={data => (
					<Layout>
						<SEO title='Contact' />
						<ContactBar />
						<Divider />
						<h1>Contact us</h1>
						{display}
					</Layout>
				)}
			/>
		);
	}
}

export default Contact;
