import './App.css';
import { motion } from 'framer-motion';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Esraa from './components/esraa/Esraa';
import Footer from './components/footer/Footer';
import MyWorks from './components/myworks/MyWorks';
import Navbar from './components/navbar/NavBar';
import ScrollToTopButton from './components/scrollbutton/ScrollToTopButton';
import Services from './components/services/Services';

const AnimatedSection = ({ children }) => (
	<motion.div
		initial={{ opacity: 0, y: 50 }}
		whileInView={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.8, ease: 'easeInOut' }}
		viewport={{ once: false, amount: 0.3 }}>
		{children}
	</motion.div>
);

function App() {
	return (
		<div className='App'>
			<div className='nv'>
				<Navbar />
			</div>

			<AnimatedSection>
				<Esraa />
			</AnimatedSection>

			<AnimatedSection>
				<About />
			</AnimatedSection>

			<AnimatedSection>
				<Services />
			</AnimatedSection>

			<AnimatedSection>
				<MyWorks />
			</AnimatedSection>

			<AnimatedSection>
				<Contact />
			</AnimatedSection>

			<Footer />
			<ScrollToTopButton />
		</div>
	);
}

export default App;
