import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Esraa from './components/esraa/Esraa';
import Footer from './components/footer/Footer';
import MyWorks from './components/myworks/MyWorks';
import Navbar from './components/navbar/NavBar';
import ScrollToTopButton from './components/scrollbutton/ScrollToTopButton';
import Services from './components/services/Services';

function App() {
	return (
		<div className='App'>
			<div className='nv'>
				<Navbar />
			</div>
			<Esraa />
			<About />
			<Services />
			<MyWorks />
			<Contact />
			<Footer />
			<ScrollToTopButton />
		</div>
	);
}

export default App;
