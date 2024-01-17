import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./detail.css";
import styled from "./Item";
import toast from "react-hot-toast";
import "./about.css";
import ReactLoading from "react-loading";
import PageScrollTop from "./PageScrollTop";
import Details from "./Details";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";

function About({ detailspage, setDetailspage }) {
	const handleHomeClick = () => {
		setDetailspage(false);
	};
	return (
		<div className=''>
			<Navbar onHomeClick={handleHomeClick} /> <PageScrollTop />
			<SocalMedia />
			<>
				<div className='m-about'>
					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className=' '>About Us</h1>
						</div>
					</section>
					<div className='b-breadCumbs s-shadow'>
						<div className='container'>
							<Link to='/' className='b-breadCumbs__page '>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<Link className='b-breadCumbs__page m-active'>About Us</Link>
						</div>
					</div>
					<section className='b-best'>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-6 col-xs-12'>
									<div className='b-best__info'>
										<div className='s-lineDownLeft b-best__info-head'>
											<h2 className=' '>
												The Best &amp; the Largest Auto Dealer
											</h2>
										</div>

										<p className=' '>
											Established in the year 2002, Sushil Car Bazar is one of
											the top & most trusted dealership for preowned luxury
											car.In over 17 years of business history we have always
											had a customer oriented approach & total customer
											satisfaction has been our motive.
											<br />
											We tend to deliver the very best quality vehicle at the
											foremost competitive cost. Sushil Car bazar is a one stop
											solution to sell yourPremium/ Luxury car at best price.
											<br />
										</p>
									</div>
								</div>
								<div className='col-sm-6 col-xs-12'>
									<img
										id='aboutlogo_img'
										className='img-responsive center-block  '
										alt='best'
										src='images/about/shushil.jpeg'></img>

									<span className='m-price   hidden-xs'>
										Mr. Sushil Bansal MD
									</span>

									<span
										className='m-price visible-xs'
										style={{
											textAlign: "center",
											fontWeight: "bold",
											color: "",
											marginLeft: "70px",
											fontSize: "20px",

											// backgroundColor: "#f76d2b",
										}}>
										Mr. Sushil Bansal MD
									</span>
								</div>
							</div>
						</div>
					</section>

					<div className='abc'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-4 col-sm-6'>
									<div className='box'>
										<div className='box-heading'>
											<h3 className='title'>WE OFFER</h3>
											<p>Low Prices, No Haggling</p>
										</div>
										<div className='boxContent'>
											<p className='description'>
												At our company, we believe in providing our customers
												with the best value for their money. That's why we offer
												low prices and a no-haggling policy. We understand that
												price is an important factor when making purchasing
												decisions, aimport Navbar from './Navbar'; nd we want to
												ensure that import Footer from './Footer'; our products
												and services are accessible to everyone.
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-sm-6'>
									<div className='box'>
										<div className='box-heading'>
											<h3 className='title'>WE ARE THE</h3>
											<p>Largest Car Dealership</p>
											<p></p>
										</div>
										<div className='boxContent'>
											<p className='description'>
												Welcome to our dealership, where we proudly hold the
												title of being the largest car dealership in the area.
												With an extensive inventory and a commitment to
												exceptional customer service, we strive to provide an
												unmatched car buying experience for our valued
												customers.
											</p>
										</div>
									</div>
								</div>
								<div className='col-md-4 col-sm-6 '>
									<div className='box'>
										<div className='box-heading'>
											<h3 className='title'>OUR CUSTOMERS GET</h3>
											<p>Multipoint Safety Check</p>
										</div>
										a
										<div className='boxContent'>
											<p className='description'>
												Our rigorous safety protocols cover every aspect of the
												vehicle, from the engine to the brakes, ensuring that
												each car undergoes thorough inspections before it
												reaches our customers. We leave no stone unturned when
												it comes to guaranteeing that our cars are in optimal
												condition and meet the highest safety standards.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<section className='b-more'>
						<div className='container'>
							<div className='row'>
								<div className='col-sm-6 col-xs-12'>
									<div className='b-more__why  '>
										<h2 className='s-title'>WHY SUSHIL CARS</h2>
										<p>
											Sushil Cars is one of the pre-owned cars suppliers in the
											geography who recommends and supplies cars as per your
											requirement and budget. We don’t sell cars only; we always
											try to give appropriate cars as per customers’ need.{" "}
										</p>
									</div>
								</div>

								<div className='col-sm-6 col-xs-12'>
									<div className='b-more__info  '>
										<h2 className='s-title'>MORE INFO</h2>
										<div className='b-more__info-block'>
											<div className='b-more__info-block-title'>
												Fair Price for Everyone
												<a className=''>
													<span className='fa fa-angle-left'></span>
												</a>
											</div>
											<div className='b-more__info-block-inside j-inside'>
												<p>
													We understand the value of your hard earned money and
													that’s why we keep pricing fair. Everything which is
													related to money is crystal clear and no hidden
													charges.{" "}
												</p>
											</div>
										</div>
										<div className='b-more__info-block'>
											<div className='b-more__info-block-title'>
												Large Number of Vehicles
												<a className='j-more'>
													<span className='fa fa-angle-left'></span>
												</a>
											</div>
											<div className='b-more__info-block-inside j-inside'>
												<p>
													CWe have large numbers of cars with us, whether you
													consider the make, brands, fuel, structure, segments,
													seating capacity & others.{" "}
												</p>
											</div>
										</div>
										<div className='b-more__info-block'>
											<div className='b-more__info-block-title'>
												Auto Loan Available
												<a className='j-more'>
													<span className='fa fa-angle-left'></span>
												</a>
											</div>
											<div className='b-more__info-block-inside j-inside'>
												<p>
													As your pre-owned cars partner we understand the value
													of your finances and that’s why we have all the
													possible loan options for you.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className='b-features'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-12'>
									<ul className='b-features__items itm_cen'>
										<li className=' '>Low Prices, No Haggling</li>
										<li className=' '>Largest Car Dealership</li>
										<li className=' '>Multipoint Safety Check</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</>
			<Footer />
		</div>
	);
}

export default About;
