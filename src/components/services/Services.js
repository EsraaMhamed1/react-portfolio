import './Service.css';
import Logo from '../../assets/Logo.png';
import Services_Data from '../../assets/services_data';
import './Service.css';
const Services = () => {
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
							<p>{service.s_description}</p>
							<div className='services-readmore'></div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Services;
