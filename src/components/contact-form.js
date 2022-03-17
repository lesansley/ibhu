import React, { Component } from 'react';
import PropTypes from 'prop-types';
import contactFormStyles from './contact-form.module.scss';

class ContactForm extends Component {
	constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
			status: '',
			name: '',
			email: '',
			subject: 'Website query',
			message: ''
    };
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
		const { status } = this.state;
		return (
			<div className={contactFormStyles.formContainer}>
				<form
					onSubmit={this.submitForm}
					action='https://formspree.io/f/xyybvpav'
					method='POST'
					className={contactFormStyles.form}
					autoComplete='off'
				>
					{status === "SUCCESS" ? <h3><span className={contactFormStyles.success}>Thanks for making contact. We will respond as soon as possible.</span></h3> :
						<div>
							<p className={contactFormStyles.p}>
								<label htmlFor='name' className={contactFormStyles.label}>Your Name (Required)</label>
								<input id='name' className={contactFormStyles.input} name='name' type='text' value={this.state.name} onChange={this.onNameChange.bind(this)} autoComplete='new-password' required />
							</p>
							<p className={contactFormStyles.p}>
								<label htmlFor='email' className={contactFormStyles.label}>Your Email (Required)</label>
								<input id='email' className={contactFormStyles.input} name='email' type='email' value={this.state.email} onChange={this.onEmailChange.bind(this)} autoComplete='new-password' required />
							</p>
							<p className={contactFormStyles.p}>
								<label htmlFor='subject' className={contactFormStyles.label}>Subject</label>
								<input id='subject' className={contactFormStyles.input} name='subject' type='text' value={this.state.subject} onChange={this.onSubjectChange.bind(this)} autoComplete='new-password' />
							</p>
							<p  className={contactFormStyles.p}>
								<label htmlFor='message' className={contactFormStyles.label}>Your Message</label>
								<textarea id='message' className={contactFormStyles.textArea} name='message' rows='7' value={this.state.message} onChange={this.onMessageChange.bind(this)} autoComplete='new-password' ></textarea>
							</p>
								<button className={contactFormStyles.button}>Send</button>
						</div>
					}
					{status === "ERROR" && <p><span className={contactFormStyles.error}>Ooops! There was an error with your submission. Please refresh the page and try again.</span></p>}
				</form>
			</div>
		)
	}

	submitForm(ev) {
    ev.preventDefault();
		const form = ev.target;
		let data = new FormData(form);
		const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
				this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}

ContactForm.propTypes = {
	formSubmit: PropTypes.func.isRequired
}

export default ContactForm
