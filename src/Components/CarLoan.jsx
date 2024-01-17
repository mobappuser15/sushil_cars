import React from "react";
import { Link } from "react-router-dom";
import ScrollTop from "./ScrollTop";
import PageScrollTop from "./PageScrollTop";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";

const CarLoan = ({ detailspage, setDetailspage }) => {
	const handleHomeClick = () => {
		setDetailspage(false);
	};
	return (
		<>
			<Navbar onHomeClick={handleHomeClick} /> <PageScrollTop />
			<SocalMedia />
			<PageScrollTop />
			<div
				className='m-detail'
				data-scrolling-animations='true'
				data-equal-height='.b-auto__main-item'>
				<div id='page-preloader'>
					<span className='spinner'></span>
				</div>

				<div className='switcher-wrapper'>
					<div className='form_holder'>
						<div className='row'></div>
					</div>
				</div>
			</div>
			<section className='b-modal'>
				<div
					className='modal fade'
					id='myModal'
					tabindex='-1'
					role='dialog'
					aria-labelledby='myModalLabel'
					aria-hidden='true'>
					<div className='modal-dialog'>
						<div className='modal-content'>
							<div className='modal-header'>
								<button
									type='button'
									className='close'
									data-dismiss='modal'
									aria-hidden='true'>
									&times;
								</button>
								<h4 className='modal-title' id='myModalLabel'>
									Video
								</h4>
							</div>
							<div className='modal-body'>
								<iframe
									width='560'
									height='315'
									src='https://www.youtube.com/embed/a_ugz7GoHwY'
									allowfullscreen></iframe>
							</div>
							<div className='modal-footer'>
								<button
									type='button'
									className='btn btn-default'
									data-dismiss='modal'>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='b-pageHeader'>
				<div className='container'>
					<h1 className='wow zoomInLeft' data-wow-delay='0.5s'>
						Car Loan
					</h1>
				</div>
			</section>
			<div className='b-breadCumbs s-shadow wow zoomInUp' data-wow-delay='0.5s'>
				<div className='container'>
					<Link to='/' className='b-breadCumbs__page'>
						Home
					</Link>
					<span className='fa fa-angle-right'></span>
					<a className='b-breadCumbs__page m-active'>Car Loan</a>
				</div>
			</div>
			{/* brand details */}
			<section class='b-brands s-shadow'>
				<div class='container'>
					<h5 class='s-titleBg wow zoomInUp' data-wow-delay='0.5s'>
						FIND OUT EASY CAR LOAN
					</h5>
					<br />
					<h2 class='s-title wow zoomInUp' data-wow-delay='0.5s'>
						With the respective banks
					</h2>
					<div class=''>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/hdfc-loan.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/icici.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bajaj-finance.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/citi-bank.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/kotak.png' alt='brand' />
						</div>
						<div class='b-brands__brand wow rotateIn' data-wow-delay='0.5s'>
							<img src='media/brands/bob.png' alt='brand' />
						</div>
					</div>
				</div>
			</section>
			{/* footer top section */}
			<div className='b-features'>
				<div className='container'>
					<div className='row'>
						<div className='col-md-12'>
							<ul className='b-features__items itm_cen'>
								<li
									className='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Low Prices, No Haggling
								</li>
								<li
									className='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Largest Car Dealership
								</li>
								<li
									className='wow zoomInUp'
									data-wow-delay='0.3s'
									data-wow-offset='100'>
									Multipoint Safety Check
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default CarLoan;
