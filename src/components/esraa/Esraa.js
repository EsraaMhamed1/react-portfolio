import './Esraa.css';
import MyImage from '../../assets/me_3.jpeg';

const Esraa = () => {
	return (
		<div id={'home'} className='esraa'>
			<img src={MyImage} alt='' />
			<h1>
				<span>I'm Esraa Mohamed,</span> Data Analyst passionate about turning
				raw data into actionable business insights.
			</h1>
			<p>
				Computer Science graduate & ITI Alumna, specialized in Data Analysis,
				SQL, Python, R, Tableau, and Power BI. Combining technical expertise
				with a passion for driving business growth.
			</p>
			<div className='esraa-action'>
				<div className='esraa-connect'>
					<a
						className='anchor-link'
						href='https://www.linkedin.com/in/esraa-mohamed-b25308386/'
					>
						Linked In
					</a>
				</div>
				<div className='esraa-resume'>
					<a
						className='anchor-link'
						href='https://drive.google.com/file/d/16cNHiq2tDysTnE-rS2PDZeuk-cl9X8DQ/view?usp=sharing'
					>
						{' '}
						My resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Esraa;
