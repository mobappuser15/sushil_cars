import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactLoading from "react-loading";
import PageScrollTop from "./PageScrollTop";
import ErrorPage from "./ErrorPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";

const Contact = ({ detailspage, setDetailspage }) => {
	const handleHomeClick = () => {
		setDetailspage(false);
	};
	return (
		<div>
			<Navbar onHomeClick={handleHomeClick} /> <PageScrollTop />
			<SocalMedia />
			<>
				{/* Re-render Contact component */}
				<PageScrollTop />
				<div className='m-contacts'>
					<section className='b-pageHeader'>
						<div className='container'>
							<h1 className='  '>Contact Us</h1>
						</div>
					</section>

					<div className='b-breadCumbs s-shadow  '>
						<div className='container'>
							<Link to='/' className='b-breadCumbs__page'>
								Home
							</Link>
							<span className='fa fa-angle-right'></span>
							<Link
								href='contacts.html'
								className='b-breadCumbs__page m-active'>
								Contact Us
							</Link>
						</div>
					</div>

					<section className='b-contacts s-shadow'>
						<div className='container'>
							<div className='row'>
								<div className='col-md-7'>
									<div className='b-contacts__address'>
										<div className='b-contacts__address-info'>
											<h2 className='s-titleDet con_txh'>Contact Us</h2>
											<address className='b-contacts__address-info-main  '>
												<div className='b-contacts__address-info-main-item'>
													<span className='fa fa-home'></span>
													ADDRESS-1
													<p style={{ color: "black" }}>
														Plot No, 5 Block A1 Sector 11 DLF Faridabad ,11-12
														Dividing Road Pincode 121006
													</p>{" "}
													<span
														className='fa fa-home'
														style={{ marginTop: "10px" }}></span>
													ADDRESS-2
													<p style={{ color: "black" }}>
														Spaze Boulevard, Sector-47, Gurugram
													</p>
												</div>
												<div className='b-contacts__address-info-main-item'>
													<div className=''>
														<span className='fa fa-phone'></span>
														PHONE
													</div>
													<div className=''>
														<p style={{ color: "black" }}>
															+91 92509 22333 / +91 98114 36332
														</p>
													</div>
												</div>
												<div className='b-contacts__address-info-main-item'></div>
												<div className='b-contacts__address-info-main-item'>
													<div className=''>
														<span className='fa fa-envelope'></span>
														EMAIL
													</div>
													<div className=''>
														<p style={{ color: "black" }}>
															sushilcarbazar@gmail.com
														</p>
													</div>
												</div>
											</address>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>

					<div className='b-map  '>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.260289159302!2d77.31289557530695!3d28.381205295449664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdd7af5cf47bd%3A0x46d511fe688ab78c!2sSUSHIL%20CAR%20BAZAR!5e0!3m2!1sen!2sin!4v1681724827680!5m2!1sen!2sin'
							width='100%'
							height='450'
							style={{ border: "0" }}
							allowfullscreen=''
							loading='lazy'
							referrerpolicy='no-referrer-when-downgrade'></iframe>
					</div>
				</div>
			</>
			<Footer />
		</div>
	);
};

export default Contact;
