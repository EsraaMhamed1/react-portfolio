import './Esraa.css';
import MyImage from '../../assets/MyImage.jpg';

const Esraa = () => {
	return (
		<div id={'home'} className='esraa'>
			<img src={MyImage} alt='' />
			<h1>
				<span>I'm Esraa Mohamed,</span> frontend developer with React Js & Data
				Analyst.
			</h1>
			<p>
				I am a frontend developer and react js from Egypt , with 2 years of
				experience in frontend development and Data science && Data Analysis,
				Assuit University.
			</p>
			<div className='esraa-action'>
				<div className='esraa-connect'>
					<a
						className='anchor-link'
						href='https://www.linkedin.com/in/esraa-mohamed-el-tehawy-25499b232/'>
						Linked In
					</a>
				</div>
				<div className='esraa-resume'>
					<a
						className='anchor-link'
						href='https://drive.google.com/file/d/1YcSIWkXdF0moErjjzxIIU2fWUrSsiy3-/view?usp=sharing'>
						My resume
					</a>
				</div>
			</div>
		</div>
	);
};

export default Esraa;
