import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import toast from "react-hot-toast";
import Homepage from "./HomePage";
import Details from "./Details";
import ReactLoading from "react-loading";
import ErrorPage from "./ErrorPage";

const Navbar = ({ onHomeClick }) => {
	const navRef = useRef();
	const [page, setPage] = useState(false);
	const [refreshContact, setRefreshContact] = useState(false);
	const [refreshKey, setRefreshKey] = useState(0);
	const [shouldRefreshContact, setShouldRefreshContact] = useState(false); // Fl
	const refreshContactComponent = () => {
		if (!shouldRefreshContact) {
			setShouldRefreshContact(true);
			setRefreshKey(refreshKey + 6);
		}
	};

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};
	const reloadPage = () => {
		window.location.reload(); // Set loading state to false after the timeout
	};

	const resreshdatastcock = () => {
		if (onHomeClick) {
			// Display loading message while page is reloading
			<ReactLoading type='spin' color='#f76d2b' height={200} width={100} />;
			// toast.success("data loading");
			// alert("data loading");
			// Simulate reloading by setting a timeout
			setTimeout(() => {
				setRefreshContact(false); // Set loading state to false after the timeout
			}, 6000); // Change this timeout value as needed
		} else {
			setRefreshContact(false); // If not reloading, set loading state to false
		}
	};

	// useEffect(() => {
	// 	if (onHomeClick) {
	// 		// Display loading message while page is reloading
	// 		console.log("Page reloading...");
	// 		toast.success("data loading");
	// 		// alert("data loading");
	// 		// Simulate reloading by setting a timeout
	// 		setTimeout(() => {
	// 			setRefreshContact(false); // Set loading state to false after the timeout
	// 		}, 6000); // Change this timeout value as needed
	// 	} else {
	// 		setRefreshContact(false); // If not reloading, set loading state to false
	// 	}
	// }, [reloadPage]);

	return (
		<header className=' fixed-top'>
			<Link
				to='/'
				onClick={() => {
					onHomeClick();
				}}>
				<img className='logo_tb' src='images/logo/logo-1.png' />
			</Link>
			<nav className='nv_rt' ref={navRef}>
				<Link
					href=''
					to='/'
					onClick={() => {
						showNavbar();
						onHomeClick();
					}}>
					<span>HOME</span>
				</Link>
				<Link
					to='/salecar'
					oonClick={() => {
						showNavbar();
					}}>
					SELL CAR
				</Link>
				<Link
					to='/detailsdata '
					onClick={() => {
						showNavbar();
						onHomeClick();
						resreshdatastcock();
					}}>
					<span>BUY CAR</span>
				</Link>
				<Link
					to='/about'
					onClick={() => {
						showNavbar();
					}}>
					ABOUT US
				</Link>
				<Link
					to='/contact'
					onClick={() => {
						showNavbar();
					}}>
					CONTACT US
				</Link>

				<button
					className='nav-btn nav-close-btn visible-xs'
					onClick={showNavbar}>
					<i class='fa-solid fa-xmark'></i>
				</button>
			</nav>
			<button className='nav-btn visible-xs' onClick={showNavbar}>
				<i class='fa-solid fa-bars'></i>
			</button>

			<div className='icon_rt'>
				<div className='b-topBarsocial-wrapper none'>
					<div className='b-topbar-social'>
						<ul>

						<li>
								<a
									href='https://api.whatsapp.com/send/?phone=9250922333&amp;text= Hello sushilcars +Team%2C+I+would+like+to+know+more&amp;type=phone_number&amp;app_absent=0'
									target='_blank'>
									<img src='images/logo/whatsapp_icon.png' alt='fb' />
								</a>
							</li>

							<li>
								<a
									href='https://www.facebook.com/profile.php?id=100077481055938'
									target='_blank'>
									<img src='images/logo/fb.png' alt='fb' />
								</a>
							</li>
							<li>
								<a
									href='https://www.instagram.com/sushilcarbazzar/'
									target='_blank'>
									<img src='images/logo/instra.png' alt='fb' />
								</a>
							</li>
							<li>
								<a
									href='https://www.youtube.com/@sushilcarbazzar5502'
									target='_blank'>
									<img src='images/logo/ytb.png' alt='fb' />
								</a>
							</li>

							<li>
								<a href='tel:+91 92509 22333' style={{ marginTop: "10px" }}>
									<span className='no_top1'>
										<i class='fa-sharp fa-solid fa-phone'></i> +91 92509 22333
									</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
