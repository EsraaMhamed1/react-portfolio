import './Contact.css';
import { useState } from 'react';
import gmail from '../../assets/gmial.svg';
import phone from '../../assets/phone.svg';
import location from '../../assets/location.svg';
import Logo from '../../assets/Logo.png';
const Contact = () => {
	const [result, setResult] = useState('');
	const onSubmit = async (event) => {
		event.preventDefault();
		setResult('');
		const formData = new FormData(event.target);

		formData.append('access_key', 'fefb490f-de08-4362-87e2-c528f15f9576');

		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();

		if (data.success) {
			console.log(alert('send successfully 🎉'));
		} else {
			console.log('Error', data);
			setResult(data.message);
		}
	};

	return (
		<div id='contact' className='contact'>
			<div className='contact-title'>
				<h1>Get in touch</h1>
				<img src={Logo} alt='' />
			</div>
			<div className='contact-section'>
				<div className='contact-left'>
					<h1>Let's talk</h1>
					<p></p>
					<div className='contact-details'>
						<div className='contact-detail'>
							<img src={gmail} alt='' />
							<p>esraaeltehawy@gmail.com</p>
						</div>
						<div className='contact-detail'>
							<img src={phone} alt='' /> <p>01206787064</p>
						</div>
						<div className='contact-detail'>
							<img src={location} alt='' />
							<p>Egypt, Assuit </p>
						</div>
					</div>
				</div>
				<form onSubmit={onSubmit} className='contact-right'>
					<label htmlFor=''>Yor Name</label>
					<input type='text' placeholder='Enter your name' name='name' />
					<label htmlFor=''>Your Email</label>
					<input type='email' placeholder='Enter your email' />
					<label htmlFor=''>Write your message here</label>
					<textarea
						name='message'
						rows='8'
						placeholder='Enter your message'></textarea>
					<button type='submit' className='contact-submit'>
						{' '}
						Submit now
					</button>
				</form>
			</div>
			<spa>{result}</spa>
		</div>
	);
};
export default Contact;