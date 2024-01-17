import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div>
			<div class='b-info'>
				<div class='container'>
					<div class='row'>
						<div class='col-md-3 col-xs-12'>
							<aside class='b-info__aside  '>
								<article class='b-info__aside-article'>
									<h3>OPENING HOURS</h3>
									<div class='b-info__aside-article-item'>
										<h6>Sales Department</h6>
										<p>Mon-Sun : 10:00am - 7:00pm</p>
									</div>
								</article>
								<article class='b-info__aside-article'>
									<h3>About us</h3>
									<p>
										Established in the year 2002, Sushil Car Bazar is one of the
										top & most trusted dealership for preowned luxury car.In
										over 17 years of business history we have always had a
										customer oriented approach & total customer satisfaction has
										been our motive.
									</p>
								</article>
							</aside>
						</div>

						<div class='col-md-5 col-xs-12'>
							<address class='b-info__contacts  '>
								<p>contact us</p>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<ol>
										Plot No, 5 Block A1 Sector 11 DLF Faridabad, 11-12 Dividing
										Road Pincode 121006
									</ol>
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-map-marker'></span>
									<em>
										<ol>Spaze Boulevard, Sector-47, Gurugram</ol>
									</em>
								</div>
								<div class='b-info__contacts-item'>
									<span class='fa fa-phone'></span>
									<ol>
										+91 92509 22333 , +91 98114 36332
										
										
									</ol>
								</div>

								<div class='b-info__contacts-item'>
									<span class='fa fa-envelope'></span>
									<em>
										<ol>sushilcarbazar@gmail.com</ol>
									</em>
									<address class='b-info__map'>
										<Link
											style={{
												marginLeft: "-125px",
												marginTop: "-30px",

												textDecoration: "none",
											}}
											to='/contact'>
											Open Location Map
										</Link>
									</address>
								</div>
							</address>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
