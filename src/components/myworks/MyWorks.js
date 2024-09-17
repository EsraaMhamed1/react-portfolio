import './MyWorks.css';
import projects from '../../assets/Projects';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
const MyWorks = () => {
	const [currentProject, setCurrentProject] = useState(0);

	const handlePrev = () => {
		const prevIndex = (currentProject - 3 + projects.length) % projects.length;
		setCurrentProject(prevIndex);
	};

	const handleNext = () => {
		const nextIndex = (currentProject + 3) % projects.length;
		setCurrentProject(nextIndex);
	};

	return (
		<div className='projects-container'>
			<div className='mywork-title'>
				<h1>My Lateast Work </h1>
				<img src={Logo} alt='' />
			</div>
			<div className='projects-list'>
				<button className='arrow left-arrow' onClick={handlePrev}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='24px'
						viewBox='0 -960 960 960'
						width='24px'
						fill='#e8eaed'>
						<path d='M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z' />
					</svg>
				</button>

				<div className='project'>
					<img
						src={projects[currentProject].imageUrl}
						alt={projects[currentProject].title}
					/>
					<div className='btn'>
						{projects[currentProject].demoUrl && (
							<a
								href={projects[currentProject].demoUrl}
								className='button demo-button'
								target='_blank'
								rel='noopener noreferrer'>
								Demo
							</a>
						)}
						{projects[currentProject].githubUrl && (
							<a
								href={projects[currentProject].githubUrl}
								className='button github-button'
								target='_blank'
								rel='noopener noreferrer'>
								GitHub
							</a>
						)}
					</div>
				</div>

				<button className='arrow right-arrow' onClick={handleNext}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						height='24px'
						viewBox='0 -960 960 960'
						width='24px'
						fill='#e8eaed'>
						<path d='m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z' />
					</svg>
				</button>
			</div>
		</div>
	);
};
export default MyWorks;
