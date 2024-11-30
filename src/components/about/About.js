import './About.css';
import Logo from '../../assets/Logo.png';
import profile from '../../assets/profile.png';

const About = () => {
	const disableContextMenu = (event) => {
		event.preventDefault();
	};
	return (
		<div id='about' className='about'>
			<div className='about-title'>
				<h1>About Me</h1>
				<img src={Logo} alt='' />
			</div>

			<div className='about-sections'>
				<div className='about-left'>
					<img
						src={profile}
						alt=''
						onContextMenu={disableContextMenu}
						draggable='false'
					/>
				</div>
				<div className='about-right'>
					<div className='about-p'>
						<p>
							Graduated from factually of computers and information technology,
							Assuit University ( FCI ), with grade verey good.
						</p>
						<p>I am Data analyst with R programming && paython. </p>
					</div>

					<div className='about-skills'>
						<div className='about-skill'>
							<p>HTML&CSS</p>
							<hr style={{ width: '90%' }} />
						</div>
						<div className='about-skill'>
							<p>JavaScript </p>
							<hr style={{ width: '67%' }} />
						</div>
						<div className='about-skill'>
							<p>React JS </p>
							<hr style={{ width: '80%' }} />
						</div>
						<div className='about-skill'>
							<p>Next JS </p>
							<hr style={{ width: '65%' }} />
						</div>
	<div className='about-skill'>
							<p>Tailwind CSS</p> <hr style={{ width: '95%' }} />
						</div>
						<div className='about-skill'>
							<p>Materila Ui</p> <hr style={{ width: '75%' }} />
						</div>
	<div className='about-skill'>
							<p>R Studio</p> <hr style={{ width: '65%' }} />
						</div>
	<div className='about-skill'>
							<p>Python</p> <hr style={{ width: '55%' }} />
						</div>
					</div>
				</div>
			</div>

			<div className='about-achievments'>
				<div className='about-achievement'>
					<h1>+2</h1>
					<p>YEARS OF EXPERIENCE</p>
				</div>
				<hr style={{ marginRight: '3px', marginLeft: '3px' }} />
				<div className='about-achievement'>
					<h1>+10</h1>
					<p>COMPLETED PROJECTS</p>
				</div>
				<hr style={{ marginRight: '10px', marginLeft: '3px' }} />
				<div className='about-achievement'>
					<h1>+2</h1>
					<p>JOINED COMPANIES</p>
				</div>
			</div>
		</div>
	);
};

export default About;
