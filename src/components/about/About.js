import './About.css';
import Logo from '../../assets/Logo.png';

const About = () => {
	// const disableContextMenu = (event) => {
	// 	event.preventDefault();
	// };
	return (
		<div id='about' className='about'>
			<div className='about-title'>
				<h1>About Me</h1>
				<img src={Logo} alt='' />
			</div>

			<div className='about-sections'>
				{/* <div className='about-left'>
					<img
						src={profile}
						alt=''
						onContextMenu={disableContextMenu}
						draggable='false'
					/>
				</div> */}
				<div className='about-right'>
					<div className='about-p'>
						<p>
							Graduated from the Faculty of Computers and Information, Assiut
							University (FCI), with an overall grade of Very Good.
						</p>
						<p>
							Data Analyst skilled in R, Python, and SQL with Frontend
							expertise.{' '}
						</p>{' '}
					</div>

					<div className='about-skills'>
						<div style={{ marginBottom: '25px', width: '100%' }}>
							<h3
								className='hedr3'
								style={{
									fontSize: '1.2rem',
									fontWeight: 'bold',
									marginBottom: '12px',
									textAlign: 'left',
								}}
							>
								Data Analysis & Visualization
							</h3>
							<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
								{[
									'SQL (MySQL)',
									'R Programming',
									'Power BI',
									'Tableau',
									'Excel',
									'Python (Pandas, NumPy)',
								].map((skill, index) => (
									<span
										key={index}
										style={{
											padding: '6px 14px',
											backgroundColor: '#1e1e1e',
											color: '#f3f4f6',
											fontSize: '0.9rem',
											borderRadius: '20px',
											border: '1px solid #333',
											display: 'inline-block',
										}}
									>
										{skill}
									</span>
								))}
							</div>
						</div>

						{
							<div style={{ width: '100%' }}>
								<h3
									className='hedr3'
									style={{
										fontSize: '1.2rem',
										fontWeight: 'bold',
										marginBottom: '12px',
										textAlign: 'left',
									}}
								>
									Web Development (Frontend)
								</h3>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
									{[
										'HTML',
										'CSS',
										'JavaScript',
										'React JS',
										'Next JS',
										'Tailwind',
									].map((skill, index) => (
										<span
											key={index}
											style={{
												padding: '6px 14px',
												backgroundColor: '#1e1e1e',
												color: '#f3f4f6',
												fontSize: '0.9rem',
												borderRadius: '20px',
												border: '1px solid #333',
												display: 'inline-block',
											}}
										>
											{skill}
										</span>
									))}
								</div>
							</div>
						}
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
};;;;;

export default About;
