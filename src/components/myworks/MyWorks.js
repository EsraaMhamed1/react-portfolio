import './MyWorks.css';
import { useState } from 'react';
import Logo from '../../assets/Logo.png';
import Projects from '../../assets/Projects';
import arraw from '../../assets/arrow.svg';

const MyWorks = () => {
	const [visibleProjects, setVisibleProjects] = useState(3);

	const showMoreProjects = () => {
		setVisibleProjects((prevVisible) => prevVisible + 3);
	};

	return (
		<div id='work' className='mywork'>
			<div className='mywork-title'>
				<h1>My Latest Works</h1>
				<img className='title-img' src={Logo} alt='' />
			</div>
			<div className='mywork-container'>
				{Projects.slice(0, visibleProjects).map((project) => {
					return (
						<div className='project-card'>
							<img
								className='project-img'
								key={project.id}
								src={project.imageUrl}
								alt=''
							/>
							<div className='link-btn'>
								<button
									className='demo'
									onClick={() => {
										window.open(project.demoUrl, '_blank');
									}}>
									Open{' '}
								</button>
								<button
									className='githup'
									onClick={() => {
										window.open(project.githubUrl, '_blank');
									}}>
									{' '}
									Source code
								</button>
							</div>
						</div>
					);
				})}
			</div>
			{visibleProjects < Projects.length && (
				<button className='mywork-showmore' onClick={showMoreProjects}>
					<p>show more</p>
					<img src={arraw} alt='' />
				</button>
			)}
		</div>
	);
};

export default MyWorks;
