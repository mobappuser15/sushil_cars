import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import Details from "./Details";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Slider from "react-slider";
import "./prizerange.css";
import ScrollTop from "./ScrollTop";
import { Typography, makeStyles, TablePagination } from "@material-ui/core";

const Stockdetails = () => {
	const [stockdata, setStockdata] = useState([]);
	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarVehStockDetail";
			const headers = {
				ApplicationMode: "ONLINE",
				EnvironmentType: "DEMO",
				BrandCode: "UC",
				CountryCode: "IN",
				"Content-Type": "application/json",
			};
			const data = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "SUSHIL",
				budgetFrom: 0,
				budgetTo: 0,
				vehBrandCode: "",
				vehModelCode: "",
				vehFuel: "",
				loginCompanyID: "ORBIT",
				loginUserId: "SULTAN",
				loginIpAddress: "192.168.10.32",
			};

			try {
				const response = await fetch(url, {
					method: "POST",
					headers: headers,
					body: JSON.stringify(data),
				});

				if (response.ok) {
					const responseData = await response.json();

					setStockdata(responseData?.UsedCarVehStockDetail);
					console.log(stockdata, "data stcok");
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);
	return (
		<div>
			{showdata === false ? (
				<>
					{/* normal Stock */}
					<div className='col-xs-12 col-md-12  col-lg-9 col-xl-9 '>
						<div className='b-items'>
							<div className='container'>
								<div className='b-auto__main'></div>
								<Row xs={12} md={3} id=''>
									{stockdata?.map((item) => {
										const frontImage = item?.modelImages.find(
											(image) => image?.imageName === "Front"
										);
										if (frontImage) {
											return (
												<div key={frontImage.uri}>
													<Col>
														<div
															onClick={() =>
																singleProducthandle(item.uniqueSerial)
															}
															className=' card2 b-auto__main-item '>
															{/* {console.log(item.modelImages, "data image url")} */}
															<img
																style={{
																	aspectRatio: "2/2",
																	width: "100%",
																}}
																className=' img-responsive center-block'
																src={frontImage.uri}
																alt='nissan'
															/>

															<div
																className=' d-flex b-items__cars-one-info-title'
																style={{
																	fontSize: "16px",
																	marginLeft: "20px",
																	marginTop: "10px",
																}}>
																{" "}
																<div>{item.vehManufactureYear} </div>
																<div style={{ marginLeft: "5px" }}>
																	{" "}
																	{item.vehBrandCode}
																</div>{" "}
																<div style={{ marginLeft: "5px" }}>
																	{item.vehModelCode}{" "}
																</div>
															</div>

															<div class='rate_ts_mn'>
																<ul>
																	<li>{item.vehOdometer} KMS</li>
																	<li>{item.exteriorColor}</li>
																	<li>{item.vehFuelCode}</li>
																	<li>{item.transmissionDesc}</li>
																</ul>
															</div>
															<span
																style={{
																	marginLeft: "19px",
																}}
																className='d-flex ml-6'>
																<i className=''></i>{" "}
																<div
																	className='b-items__cars-one-info-title'
																	style={{ fontSize: "18px" }}>
																	Rs {item.vehSellPriceRecommended}
																</div>
															</span>
														</div>
													</Col>
												</div>
											);
										}
									})}
								</Row>
							</div>
						</div>
					</div>

					{/* Apply pagination */}

					{/* phone View */}
				</>
			) : (
				/* Search Data   */
				<>
					<>
						{/* web view */}
						<div className=' col-xs-12 col-md-12  col-lg-9 col-xl-9 '>
							<div className='b-items'>
								<div className='container'>
									<div className='b-auto__main'></div>
									<Row xs={12} md={3} id=''>
										{demo.length === 0 ? (
											<div className='notdatafound'>
												<p>vehicle Not Available</p>
												<img
													src='https://img.freepik.com/free-vector/no-data-concept-illustration_114360-616.jpg?size=626&ext=jpg'
													alt='imph'
												/>
											</div>
										) : (
											<>
												{demo?.map((item) => (
													<div key={item.uniqueSerial}>
														{console.log(demo, "check demo search data")}

														<>
															<Col>
																<div
																	onClick={() =>
																		singleProducthandle(item.uniqueSerial)
																	}
																	className='card2 b-auto__main-item '>
																	<div className=''>
																		<div className=''>
																			<img
																				style={{
																					aspectRatio: "2/2",
																					width: "100%",
																				}}
																				// id='pic_hit1'
																				className=''
																				src={
																					item?.modelImages.length > 0 &&
																					item?.modelImages[0].uri
																				}
																				alt='jeep'
																			/>
																		</div>

																		<div
																			className=' d-flex b-items__cars-one-info-title'
																			style={{
																				fontSize: "16px",
																				marginLeft: "20px",
																			}}>
																			{" "}
																			<div>{item.vehManufactureYear} </div>
																			<div style={{ marginLeft: "5px" }}>
																				{" "}
																				{item.vehBrandCode}
																			</div>{" "}
																			<div style={{ marginLeft: "5px" }}>
																				{item.vehModelCode}{" "}
																			</div>
																		</div>

																		<div class='rate_ts_mn'>
																			<ul>
																				<li>{item.vehOdometer} KMS</li>
																				<li>{item.exteriorColor}</li>
																				<li>{item.vehFuelCode}</li>
																				<li>{item.transmissionDesc}</li>
																			</ul>
																		</div>
																		<span
																			style={{
																				marginLeft: "19px",
																			}}
																			className='d-flex ml-6'>
																			<i className=''></i>{" "}
																			<div
																				className='b-items__cars-one-info-title'
																				style={{ fontSize: "18px" }}>
																				Rs {item.vehSellPriceRecommended}
																			</div>
																		</span>
																	</div>
																</div>
															</Col>
														</>
													</div>
												))}
											</>
										)}
									</Row>
								</div>
							</div>
						</div>
						{/* phone View */}
					</>
				</>
			)}
		</div>
	);
};

export default Stockdetails;
