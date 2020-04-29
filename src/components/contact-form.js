import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contactFormLayout from './contact-form.module.scss';

class ContactForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			email: '',
			subject: '',
			message: ''
		}
	}

	onNameChange(event) {
		this.setState({ name: event.target.value })
	}
	onEmailChange(event) {
		this.setState({ email: event.target.value })
	}
	onSubjectChange(event) {
		this.setState({ subject: event.target.value })
	}
	onMessageChange(event) {
		this.setState({ message: event.target.value })
	}
	handleSubmit(event) {
		event.preventDefault();
		console.log(event, this.state);
		this.props.formSubmit(this.state);
	}
	
	render() {
		return (
			<div className={contactFormLayout.formContainer}>
				<form className={contactFormLayout.form} onSubmit={this.handleSubmit.bind(this)} method='POST' autoComplete='off'>
					<p className={contactFormLayout.p}>
						<label htmlFor='name' className={contactFormLayout.label}>Your Name (Required)</label>
						<input id='name' className={contactFormLayout.input} type='text' value={this.state.name} onChange={this.onNameChange.bind(this)} autoComplete='new-password' required />
					</p>
					<p className={contactFormLayout.p}>
						<label htmlFor='email' className={contactFormLayout.label}>Your Email (Required)</label>
						<input id='email' className={contactFormLayout.input} type='email' value={this.state.email} onChange={this.onEmailChange.bind(this)} autoComplete='new-password' required />
					</p>
					<p className={contactFormLayout.p}>
						<label htmlFor='subject' className={contactFormLayout.label}>Subject</label>
						<input id='subject' className={contactFormLayout.input} type='text' value={this.state.subject} onChange={this.onSubjectChange.bind(this)} autoComplete='new-password' />
					</p>
					<p  className={contactFormLayout.p}>
						<label htmlFor='message' className={contactFormLayout.label}>Your Message</label>
						<textarea id='message' className={contactFormLayout.textArea} name='message' rows='7' value={this.state.message} onChange={this.onMessageChange.bind(this)} autoComplete='new-password' ></textarea>
					</p>
					<p>
						<button className={contactFormLayout.button}>Send</button>
					</p>
				</form>
			</div>
		)
	}
}

ContactForm.propTypes = {
	formSubmit: PropTypes.func.isRequired
}

export default ContactForm
