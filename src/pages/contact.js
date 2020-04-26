import React, { Component } from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo';
import contactLayout from './contact.module.scss'

class Contact extends Component {
  constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
  }

render() {
	return (
		<Layout>
			<SEO title='Contact' />
			<div className={contactLayout.contain}>
				<div className={contactLayout.wrapper}>
					<form className={contactLayout.form} onSubmit={this.handleSubmit.bind(this)} method='POST'>
					<p className={contactLayout.p}>
						<label for="" className={contactLayout.label}>Your Name (Required)</label>
							<input className={contactLayout.input} type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} />
					</p>
					<p className={contactLayout.p}>
						<label for="" className={contactLayout.label}>Your Email (Required)</label>
						<input className={contactLayout.input} type="text" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
					</p>
					<p className={contactLayout.p}>
						<label for="" className={contactLayout.label}>Subject</label>
						<input className={contactLayout.input} type="text" value={this.state.subject} onChange={this.onSubjectChange.bind(this)} />
					</p>
					<p  className={contactLayout.p}>
						<label for="" className={contactLayout.label}>Your Message</label>
						<textarea className={contactLayout.textArea} name="" id="" cols="30" rows='7' value={this.state.message} onChange={this.onMessageChange.bind(this)} ></textarea>
					</p>
					<p>
						<button className={contactLayout.button}>Send</button>
					</p>
					</form>
					<div className={contactLayout.details}>
						<div>Our contact details</div>
						<ul>
							<li>San Joe St.</li>
							<li>00-1212121-11</li>
							<li>mail@mail.com</li>
						</ul>
					</div>
				</div>
			</div>	
		</Layout>
	);
}

  onNameChange(event) {
	this.setState({name: event.target.value})
  }

  onEmailChange(event) {
	this.setState({email: event.target.value})
	}
	
	onSubjectChange(event) {
		this.setState({subject: event.target.value})
		}

  onMessageChange(event) {
	this.setState({message: event.target.value})
  }

handleSubmit(event) {
}
}

export default Contact;
