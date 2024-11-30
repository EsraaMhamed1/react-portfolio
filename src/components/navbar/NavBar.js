import './Navbar.css';
import Logo from '../../assets/Logo.png';
import { useState, useRef } from 'react';
import menu_open from '../../assets/menu_open.svg';
import close from '../../assets/close.svg';

const Navbar = () => {
	const [menu, setMenu] = useState('home');
	const menuRef = useRef();

	const openMenu = () => {
		menuRef.current.style.right = '0';
	};
	const closeMenu = () => {
		menuRef.current.style.right = '-350px';
	};

	return (
		<div className='navbar'>
			<h2>Israa Mohamed</h2>
			<img src={menu_open} onClick={openMenu} alt='' className='nav-mob-open' />

			<ul ref={menuRef} className='nav-menue'>
				<img src={close} onClick={closeMenu} alt='' className='nav-mob-close' />
				<li>
					<a className='anchor-link' href='#home'>
						<p
							onClick={() => {
								setMenu('home');
							}}>
							Home
						</p>{' '}
					</a>
					{menu === 'home' ? <img src={Logo} alt='' /> : <></>}
				</li>
				<li>
					<a className='anchor-link' offset={50} href='#about'>
						<p
							onClick={() => {
								setMenu('about');
							}}>
							About Me
						</p>
					</a>
					{menu === 'about' ? <img src={Logo} alt='' /> : <></>}
				</li>
				<li>
					<a className='anchor-link' offset={50} href='#services'>
						<p
							onClick={() => {
								setMenu('services');
							}}>
							Services
						</p>
					</a>
					{menu === 'services' ? <img src={Logo} alt='' /> : <></>}
				</li>
				<li>
					<a className='anchor-link' offset={50} href='#work'>
						<p
							onClick={() => {
								setMenu('work');
							}}>
							Portofilio
						</p>
					</a>
					{menu === 'work' ? <img src={Logo} alt='' /> : <></>}
				</li>
				<li>
					<a className='anchor-link' offset={50} href='#contact'>
						<p
							onClick={() => {
								setMenu('contact');
							}}>
							Contact
						</p>
					</a>
					{menu === 'contact' ? <img src={Logo} alt='' /> : <></>}
				</li>
			</ul>
			<div className='nav-contact'>
				{' '}
				<a className='anchor-link' offset={50} href='#contact'>
					<p
						onClick={() => {
							setMenu('contact');
						}}>
						Contact With Me
					</p>
				</a>
			</div>
		</div>
	);
};

export default Navbar;
