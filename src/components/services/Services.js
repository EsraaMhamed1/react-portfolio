import './Services.css';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Services_Data from '../../assets/services_data';
import arraw from '../../assets/arrow.svg';

const Services = () => {
	const ReadMore = ({ text }) => {
		const [isReadMore, setIsReadMore] = useState(false);

		const toggleReadMore = () => {
			setIsReadMore(!isReadMore);
		};

		return (
			<div>
				<p>{isReadMore ? text : text.slice(0, 100) + '...'} </p>
				<button className='read-more' onClick={toggleReadMore}>
					{isReadMore ? 'Read less' : 'Read More'}
					<img src={arraw} alt=''></img>
				</button>
			</div>
		);
	};

	return (
		<div className='services'>
			<div id='services' className='services-title'>
				<h1>My Services</h1>
				<img src={Logo} alt='' />
			</div>
			<div className='services-container'>
				{Services_Data.map((service, index) => {
					return (
						<div key={index} className='service-format'>
							<h3>{service.s_no}</h3>
							<h2>{service.s_name}</h2>
							<div className='services-readmore'>
								<ReadMore text={service.s_description} />
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Services;
