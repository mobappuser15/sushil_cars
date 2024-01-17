import React, { useState, useEffect } from "react";
import CarLoan from "./CarLoan";
import Gellery from "./Gellery";
import { Link, useNavigate } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import Navbar from "./Navbar";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./detail.css";
import PageScrollTop from "./PageScrollTop";
import toast from "react-hot-toast";
import ReactLoading from "react-loading";
import { useLocation } from "react-router-dom";
import Details from "./Details";
import { styled } from "@mui/material/styles";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Footer from "./Footer";
import SocalMedia from "./SocalMedia";

const breakPoints = [
	{ width: 2, itemsToShow: 2 },
	{ width: 550, itemsToShow: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 991, itemsToShow: 3 },
	{ width: 1200, itemsToShow: 4 },
];

const breakPoints2 = [
	{ width: 2, itemsToShow: 2 },
	{ width: 550, itemsToShow: 2, itemsToScroll: 2 },
	{ width: 768, itemsToShow: 2 },
	{ width: 1200, itemsToShow: 2 },
];

export default function HomePage() {
	const [detailspage, setDetailspage] = useState(false);
	const [stockdata, setStockdata] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
	const [demo, setDemo] = useState([]);
	const [data, setData] = useState([]);
	const [model, setModel] = useState([]);
	const [source, setSource] = useState([]);
	const [typedata, setDatatype] = useState([]);
	const [varient, setVarient] = useState([]);
	const [vyear, setVechileYear] = useState([]);
	const [vmonth, setVechileMonth] = useState([]);
	const [extirecolor, setExtirearColor] = useState([]);
	const [fueldata, setFuelData] = useState([]);
	const [transmission, setTransmission] = useState([]);
	const [selectedItem, setSelectedItem] = useState("");
	const [resourcedata, setResoucedata] = useState("");
	const [selecttype, setSelecttype] = useState("");
	const [selectmodel, setSelectmodel] = useState("");
	const [selectfuel, setSelectFuel] = useState("");
	const [selecttransmission, setSelecttransmission] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [minRange, setMinRange] = useState("");
	const [maxRange, setMaxRange] = useState("");
	const [selectedMake, setSelectedMake] = useState("");
	const [selectedModel, setSelectedModel] = useState("");
	const [selectedVariant, setSelectedVariant] = useState("");
	const [showdata, setShowdata] = useState(false);
	const [methu, setMethu] = useState([]);
	var [homepage, setHomepage] = useState(false);
	const handleHomeClick = () => {
		setDetailspage(false);
	};

	// make list
	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MAKE",
			loginUserId: "ANKIT",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setData(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// model list

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster";
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
			calledBy: "MODEL",
			vehMake: codemodel,

			loginUserId: "ANKIT",
			loginIpAddress: "180.151.78.50",
		};

		fetch(url, {
			method: "POST",
			headers: headers,
			body: JSON.stringify(data),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`
					);
				}
			})
			.then((jsonData) => {
				const generalList = jsonData?.generalMasterList[0].generalList;
				setModel(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);

	console.log("detailspage == ", detailspage);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemodel(event.target.value);
		setcodemake(event.target.value);
	};

	const handleSelectChangeminprize = (event) => {
		setMinRange(event.target.value);
	};

	const handleSelectChangemaxnprize = (event) => {
		setMaxRange(event.target.value);
	};

	const navigate = useNavigate();

	// stock details

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
				loginCompanyID: "SUSHIL",
				loginUserId: "ANKIT",
				loginIpAddress: "180.151.78.50",
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
					setMethu(responseData?.UsedCarVehStockDetail);

					// setDemo(responseData?.UsedCarVehStockDetail);
				} else {
					throw new Error(
						`Request failed with status code: ${response.status}`()
					);
				}
			} catch (error) {
				console.error("Error:", error);
			}
		};

		fetchData();
	}, []);
	console.log(detailspage, "asdfbkjl;");
	const singleProducthandle = (uniqueSerial) => {
		const product = stockdata.find(
			(item) => item.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setDetailspage((product) => !product);
	};

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
			budgetFrom: minRange,
			budgetTo: maxRange,
			vehBrandCode: selectedItem,
			vehModelCode: selectmodel,
			vehFuel: "",
			loginCompanyID: "SUSHIL",
			loginUserId: "ANKIT",
			loginIpAddress: "180.151.78.50",
		};

		try {
			const response = await fetch(url, {
				method: "POST",
				headers: headers,
				body: JSON.stringify(data),
			});

			if (response.ok) {
				const responseData = await response.json();
				setSearchResults(responseData?.UsedCarVehStockDetail);
				setDemo(responseData?.UsedCarVehStockDetail);

				setShowdata(responseData?.UsedCarVehStockDetail);
			} else {
				throw new Error(`Request failed with status code: ${response.status}`);
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const filterDataCars = (e) => {
		e.preventDefault();
		fetchData();
		searchResults.map((item) => console.log(item.uniqueSerial, "uniqueserial"));
	};

	const reSet = () => {
		setDemo(stockdata);
	};

	const reloadPage = () => {
		window.location.reload(false);
	};

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			navigate("/");
		}
	}, []);

	const Amountdatamax = [
		{
			id: 100000,
			img: " 1 Lac",
		},
		{
			id: 500000,
			img: " 5 Lac",
		},
		{
			id: 1000000,
			img: " 10 Lac",
		},
		{
			id: 1100000,
			img: " 11 Lac",
		},

		{
			id: 1500000,
			img: "15 Lac",
		},

		{
			id: 2000000,
			img: " 20 Lac",
		},

		{
			id: 2500000,
			img: "25 Lac",
		},

		{
			id: 3000000,
			img: "30 Lac",
		},
		{
			id: 4000000,
			img: "40  Lac",
		},

		{
			id: 5000000,
			img: "50 Lac",
		},

		{
			id: 6000000,
			img: "60  Lac",
		},
		{
			id: 7000000,
			img: "70 Lac",
		},
	];
	const Amountdatamin = [
		{
			id: 100000,
			img: " 1 Lac",
		},
		{
			id: 500000,
			img: " 5 Lac",
		},
		{
			id: 1000000,
			img: " 10 Lac",
		},
		{
			id: 1100000,
			img: " 11 Lac",
		},

		{
			id: 1500000,
			img: "15 Lac",
		},

		{
			id: 2000000,
			img: " 20 Lac",
		},

		{
			id: 2500000,
			img: "25 Lac",
		},

		{
			id: 3000000,
			img: "30 Lac",
		},
		{
			id: 4000000,
			img: "40  Lac",
		},

		{
			id: 5000000,
			img: "50 Lac",
		},

		{
			id: 6000000,
			img: "60  Lac",
		},
		{
			id: 7000000,
			img: "70 Lac",
		},
	];
	const reset = () => {
		setShowdata(false);
		setSelectedItem("");
		setSelectmodel("");
		setMinRange("");
		setMaxRange("");
		setStockdata(methu);
		console.log("clear filtering data....");
	};

	return (
		<div className=''>
			<Navbar onHomeClick={handleHomeClick} />
			<SocalMedia />
			<PageScrollTop />
			{detailspage === false ? (
				<>
					<div>
						<div
							className='m-home'
							data-scrolling-animations='true'
							data-equal-height='.b-auto__main-item'>
							<section className='b-slider1 hidden-xs'>
								<div
									id='carouselExampleFade'
									className='carousel slide carousel-fade'
									data-bs-ride='carousel'>
									<div className='carousel-inner'>
										<div className='carousel-item active slid_logo'>
											<img
												style={{ marginTop: "0px" }}
												src='media/main-slider/sushil-cars2.png'
												className='d-block w-100 sld_log_mob'
												alt='...'
											/>
										</div>
									</div>
								</div>
							</section>

							<section className='b-slider1 visible-xs'>
								<div
									id='carouselExampleFade'
									className='carousel slide carousel-fade'
									data-bs-ride='carousel'>
									<div className='carousel-inner'>
										<div className='carousel-item active'>
											<img
												style={{ marginTop: "39px" }}
												src='media/main-slider/sushil-cars2.png'
												className='d-block w-100 sld_log_mob'
												alt='...'
											/>
										</div>
									</div>
								</div>
							</section>

							{/* filter form search bar */}
							<section className='b-search' id='ser_hit1'>
								<div className='container'>
									<div className='row'>
										<div
											className='b-search__main'
											style={{
												marginTop: "-70px",
												borderRadius: "30px",
												backgroundColor: "white",
											}}>
											<h4 onClick={reloadPage}>Search Your Dream Car</h4>
											<form
												id='form1'
												className='b-search__main-form'
												onSubmit={filterDataCars}>
												<div className='row'>
													<div className=' col-md-12 col-xs-12'>
														<div>
															<div
																className='col-xs-12 col-md-3 col-lg-3'
																id='searchdata'>
																<Select
																	className='selectdataf'
																	value={selectedItem}
																	onChange={handleSelectChange}
																	displayEmpty>
																	<MenuItem value='' className='selectoption'>
																		Select Make
																	</MenuItem>
																	{data.map((item, index) => (
																		<MenuItem
																			className='selectoption'
																			key={index}
																			value={item.code}>
																			{item.description}
																		</MenuItem>
																	))}
																</Select>

																<div class='col-xs-12 col-md-3 col-lg-3'></div>
															</div>
															<div
																className='col-xs-12 col-md-3 col-lg-3'
																id='searchdata'>
																<Select
																	className='selectdataf'
																	value={selectmodel}
																	onChange={handleSelectChange3}
																	displayEmpty
																	inputProps={{
																		"aria-label": "Without label",
																	}}>
																	<MenuItem value='' className='selectoption'>
																		Select Model
																	</MenuItem>
																	{model.map((item, index) => (
																		<MenuItem
																			className='selectoption'
																			key={index}
																			value={item.code}>
																			{item.description}
																		</MenuItem>
																	))}
																</Select>
															</div>

															<div
																className='col-xs-12 col-md-3 col-lg-3 '
																id='searchdata'>
																<Select
																	className='selectdataf'
																	value={minRange}
																	onChange={handleSelectChangeminprize}
																	displayEmpty
																	inputProps={{
																		"aria-label": "Without label",
																	}}>
																	<MenuItem value='' className='selectoption'>
																		Select Min Price
																	</MenuItem>
																	{Amountdatamin.map((item, index) => (
																		<MenuItem
																			className='selectoption'
																			key={index}
																			value={item.id}>
																			{item.img}
																		</MenuItem>
																	))}
																</Select>
															</div>

															<div
																className='col-xs-12 col-md-3 col-lg-3'
																id='searchdata'>
																<Select
																	className='selectdataf'
																	value={maxRange}
																	onChange={handleSelectChangemaxnprize}
																	displayEmpty
																	inputProps={{
																		"aria-label": "Without label",
																	}}>
																	<MenuItem value='' className='selectoption'>
																		Select Max Price
																	</MenuItem>
																	{Amountdatamax.map((item, index) => (
																		<MenuItem
																			className='selectoption'
																			key={index}
																			value={item.id}>
																			{item.img}
																		</MenuItem>
																	))}
																</Select>
															</div>
														</div>
													</div>
													<div className='col-md-12 col-xs-12'>
														<div className='b-search__main-form-submit '>
															<button
																style={{
																	backgroundColor: "#f76d2b",
																	textAlign: "center",
																}}
																type='submit'
																id='searcgbtn'
																className='  btn btn-lg'>
																<span
																	style={{
																		backgroundColor: "#f76d2b",
																	}}>
																	Search
																</span>
															</button>

															<button
																style={{
																	marginLeft: "40px",
																	backgroundColor: "#555555",
																	textAlign: "start",
																	color: "white",
																}}
																id='searcgbtn'
																onClick={reset}
																type='reset'
																className='btn    btn-lg'>
																<span>Reset</span>
															</button>
														</div>
													</div>
												</div>
											</form>
										</div>
									</div>
								</div>
							</section>

							{/* Render the list of products */}

							{showdata === false ? (
								<>
									{/* vechile Stock home data on sale section */}

									<section
										className='b-homeAuto  hidden-xs  '
										style={{ marginTop: "-69px" }}>
										<div className='container'>
											<div className='col-xs-12   visible-xs-horizental-scroll'>
												<div className='b-homeAuto__latest'>
													<h5
														className='s-titleBg '
														style={{ fontFamily: "Segoe UI" }}>
														GIVING OUR CUSTOMERS BEST DEALS
													</h5>
													<br />

													<h2
														className='s-title mb_view'
														// '0.9s'
														style={{ fontFamily: "Segoe UI" }}>
														LATEST VEHICLES SUGGESTED FOR YOU
													</h2>

													<div className='bag_clr1' id='cardrow'>
														<Row xs={12} md={4} id='cardrow'>
															{stockdata.length === 0 ? (
																<>
																	<div
																		className='loader hidden-xs'
																		style={{ marginLeft: "600px" }}>
																		<PageScrollTop />
																		<ReactLoading
																			type='spin'
																			color='#f76d2b'
																			height={200}
																			width={100}
																		/>
																	</div>

																	<div className='loader visible-xs'>
																		<ReactLoading
																			style={{ marginLeft: "-300px" }}
																			type='spin'
																			color='#f76d2b'
																			height={200}
																			width={50}
																		/>
																	</div>
																</>
															) : (
																<>
																	{stockdata
																		?.filter(
																			(item) =>
																				item.programCode ===
																				"SHORT_LIST_WEBSITE_HOME_PAGE"
																		)

																		.map((item) => (
																			<div
																				class='cd_sul1'
																				key={item.uniqueSerial}
																				id='cardrow'>
																				<Col>
																					<div
																						onClick={() => {
																							singleProducthandle(
																								item.uniqueSerial
																							);
																							setHomepage(true);
																						}}
																						className=' card2 b-auto__main-item hidden-xs '>
																							<>

																							
																						{item?.modelImages.length === 0 ? (
																							<>
																								<img
																									className=' img-responsive center-block'
																									src='images/logo/defaulimag.png'
																									style={{
																										aspectRatio: "2/2",
																										width: "100%",
																									}}
																								/>
																							</>
																						) : (
																							<>
																								<img
																									style={{
																										aspectRatio: "2/2",
																										width: "100%",
																									}}
																									className=' img-responsive center-block'
																									src={
																										item?.modelImages.length >
																											0 &&
																										item?.modelImages[0].uri
																									}
																									alt='nissan'
																								/>
																							</>
																						)}
</>
																						<div
																							className=' d-flex b-items__cars-one-info-title'
																							style={{
																								fontSize: "16px",
																								marginLeft: "20px",
																								marginTop: "10px",
																							}}>
																							{" "}
																							<div>
																								{item.vehManufactureYear}{" "}
																							</div>
																							<div
																								style={{ marginLeft: "5px" }}>
																								{" "}
																								{item.vehBrandCode}
																							</div>{" "}
																							<div
																								style={{ marginLeft: "5px" }}>
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
																								marginLeft: "20px",
																							}}
																							className='d-flex ml-6'>
																							<i className=''></i>{" "}
																							<div
																								className='b-items__cars-one-info-title'
																								style={{ fontSize: "21px" }}>
																								<i class='fa-solid fa-indian-rupee-sign'></i>{" "}
																								{item.vehSellPriceRecommended}
																							</div>
																						</span>
																					</div>
																					{/* phone View */}

																					<div
																						style={{ borderRadius: "20px" }}
																						onClick={() =>
																							singleProducthandle(
																								item.uniqueSerial
																							)
																						}
																						className='  visible-xs'>
																						<div className=''>
																							<div className=''>
																								{item?.bookingFlag === "Y" ? (
																									<>
																										<h1>booked</h1>
																									</>
																								) : (
																									<></>
																								)}
																								<img
																									style={{
																										marginLeft: "10px",
																										height: "165px",
																										aspectRatio: " 2 / 2",
																										width: "70%",
																										borderRadius: "10px",
																									}}
																									className=' img-responsive center-block '
																									src={
																										item?.modelImages.length >
																											0 &&
																										item?.modelImages[0].uri
																									}
																									alt='nissan'
																								/>
																							</div>
																							<div className=''>
																								<div
																									className=' d-flex b-items__cars-one-info-title'
																									style={{
																										fontSize: "16px",
																										marginLeft: "20px",
																										marginTop: "5px",
																									}}>
																									{" "}
																									<div>
																										{item.vehManufactureYear}{" "}
																									</div>
																									<div
																										style={{
																											marginLeft: "5px",
																										}}>
																										{" "}
																										{item.vehBrandCode}
																									</div>{" "}
																									<div
																										style={{
																											marginLeft: "5px",
																										}}>
																										{item.vehModelCode}{" "}
																									</div>
																								</div>
																								<br />

																								<div
																									className='d-flex'
																									style={{
																										marginTop: "-20px",
																									}}>
																									<ul className='d-flex'>
																										<div className='b'>
																											{item.vehOdometer}
																										</div>

																										<div
																											className=''
																											style={{
																												marginLeft: "15px",
																											}}>
																											{item.exteriorColor}
																										</div>
																										<div
																											className=''
																											style={{
																												marginLeft: "15px",
																											}}>
																											{item.vehFuelCode}
																										</div>

																										<div
																											className=''
																											style={{
																												marginLeft: "15px",
																											}}>
																											{item.transmissionDesc}
																										</div>
																									</ul>
																								</div>

																								<span
																									style={{
																										marginLeft: "20px",
																										marginTop: "-5px",
																									}}
																									className='d-flex ml-6'>
																									<i className=''></i>{" "}
																									<div
																										className='b-items__cars-one-info-title'
																										style={{
																											fontSize: "15px",
																										}}>
																										Rs{" "}
																										{
																											item.vehSellPriceRecommended
																										}
																									</div>
																								</span>
																							</div>
																						</div>
																					</div>
																				</Col>
																			</div>
																		))}
																</>
															)}
														</Row>

														{/* testing details */}
													</div>
												</div>
											</div>
										</div>
										<div className='clearfix'></div>
									</section>
									{/* phone view */}
									<section
										className='b-homeAuto   visible-xs'
										style={{ marginTop: "-38px" }}>
										<div className='container'>
											<div className=''>
												<div className='b-homeAuto__latest'>
													<h5
														className='s-titleBg '
														style={{ fontFamily: "Segoe UI" }}>
														GIVING OUR CUSTOMERS BEST DEALS
													</h5>
													<br />

													<h2
														className='s-title'
														// '0.9s'
														style={{ fontFamily: "Segoe UI" }}>
														LATEST VEHICLES ON SALE
													</h2>

													<div className='row car_fll_pic' id='cardrow'>
														{/* testing details */}
														{stockdata
															?.filter(
																(item) =>
																	item.programCode ===
																	"SHORT_LIST_WEBSITE_HOME_PAGE"
															)

															.map((item) => (
																<div className='vehicles_mn'>
																	<div key={item.uniqueSerial}>
																		<div>
																			{item?.bookingFlag === "Y" ? (
																				<>
																					<h1>booked</h1>
																				</>
																			) : (
																				<></>
																			)}

																			<div
																				style={{ borderRadius: "20px" }}
																				onClick={() =>
																					singleProducthandle(item.uniqueSerial)
																				}
																				className='  visible-xs'>
																				<div className=''>
																					<div className='sld_mb_pic'>
																						{item?.modelImages.length === 0 ? (
																							<>
																								<img
																									className=' img-responsive center-block'
																									src='images/logo/defaulimag.png'
																									style={{
																										marginLeft: "1px",

																										aspectRatio: " 3/4",
																										width: "100%",
																										maxHeight: "230px",
																										objectFit: "cover",
																										borderRadius: "10px",
																									}}
																								/>
																							</>
																						) : (
																							<>
																								<img
																									style={{
																										marginLeft: "1px",

																										aspectRatio: " 3/4",
																										width: "100%",
																										maxHeight: "230px",
																										objectFit: "cover",
																										borderRadius: "10px",
																									}}
																									className=' img-responsive center-block '
																									src={
																										item?.modelImages.length >
																											0 &&
																										item?.modelImages[0].uri
																									}
																									alt='nissan'
																								/>
																							</>
																						)}
																					</div>
																					<div className=''>
																						<div
																							className=' d-flex b-items__cars-one-info-title'
																							style={{
																								fontSize: "16px",
																								marginLeft: "5px",
																								marginTop: "5px",
																							}}>
																							{" "}
																							<div>
																								{item.vehManufactureYear}{" "}
																							</div>
																							<div
																								style={{ marginLeft: "5px" }}>
																								{" "}
																								{item.vehBrandCode}
																							</div>{" "}
																							<div
																								style={{ marginLeft: "5px" }}>
																								{item.vehModelCode}{" "}
																							</div>
																						</div>
																						<br />

																						<div
																							className='d-flex'
																							style={{
																								marginTop: "-20px",
																								marginLeft: "0px",
																							}}>
																							<div className='mobl_tx_aln1'>
																								<ul className=''>
																									<li className='b'>
																										{item.vehOdometer}
																									</li>

																									<li
																										className=''
																										style={{
																											marginLeft: "5px",
																										}}>
																										{item.exteriorColor}
																									</li>
																									<li
																										className=''
																										style={{
																											marginLeft: "5px",
																										}}>
																										{item.vehFuelCode}
																									</li>

																									<li
																										className=''
																										style={{
																											marginLeft: "5px",
																										}}>
																										{item.transmissionDesc}
																									</li>
																								</ul>
																							</div>
																						</div>

																						<span
																							style={{
																								marginLeft: "10px",
																								marginTop: "-5px",
																							}}
																							className='d-flex ml-6'>
																							<i className=''></i>{" "}
																							<div
																								className='b-items__cars-one-info-title'
																								style={{ fontSize: "15px" }}>
																								<i class='fa fa-rupee'></i>{" "}
																								{item.vehSellPriceRecommended}
																							</div>
																						</span>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																</div>
															))}
													</div>
													<br />
												</div>
											</div>
										</div>
										<div className='clearfix'></div>
									</section>
								</>
							) : (
								<>
									{/* Search Stock data on sale section */}

									<section
										className='b-homeAuto hidden-xs'
										style={{ marginTop: "-38px" }}>
										<div className='container'>
											<div className='col-xs-12   visible-xs-horizental-scroll'>
												<div className='b-homeAuto__latest'>
													<h5
														className='s-titleBg  '
														style={{ fontFamily: "Segoe UI" }}>
														GIVING OUR CUSTOMERS BEST DEALS
													</h5>
													<br />

													<h2
														className='s-title  '
														style={{ fontFamily: "Segoe UI" }}>
														LATEST VEHICLES ON SALE Search
													</h2>

													<div className=' bag_clr1' id='cardrow'>
														<Row xs={12} md={4} id='cardrow'>
															{demo.length === 0 ? (
																<div className='notdatafound23'>
																	<h2>Vehicle Not Available</h2>
																</div>
															) : (
																<>
																	{demo?.map((item) => (
																		<div
																			class='cd_sul1'
																			key={item.uniqueSerial}
																			id='cardrow'>
																			<Col>
																				{item?.bookingFlag === "Y" ? (
																					<>
																						<h1>booked</h1>
																					</>
																				) : (
																					<></>
																				)}
																				<div
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
																					}
																					className=' card2 b-auto__main-item '>
																					{item?.modelImages.length === 0 ? (
																						<>
																							<img
																								style={{ width: "100%" }}
																								className='  img-responsive center-block'
																								src='images/logo/defaulimag.png'
																								alt='nissan'
																							/>
																						</>
																					) : (
																						<>
																							<img
																								style={{ width: "100%" }}
																								className='  img-responsive center-block'
																								src={
																									item?.modelImages.length >
																										0 &&
																									item?.modelImages[0].uri
																								}
																								alt='nissan'
																							/>
																						</>
																					)}

																					<div
																						className=' d-flex b-items__cars-one-info-title'
																						style={{
																							fontSize: "16px",
																							marginLeft: "20px",
																						}}>
																						{" "}
																						<div>
																							{item.vehManufactureYear}{" "}
																						</div>
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
																							marginLeft: "20px",
																						}}
																						className='d-flex ml-6'>
																						<i className=''></i>{" "}
																						<div
																							className='b-items__cars-one-info-title'
																							style={{ fontSize: "18px" }}>
																							<i class='fa fa-rupee'></i>{" "}
																							{item.vehSellPriceRecommended}
																						</div>
																					</span>
																				</div>
																			</Col>
																		</div>
																	))}
																</>
															)}
														</Row>

														{/* testing details */}
													</div>
												</div>
											</div>
										</div>
										<div className='clearfix'></div>
									</section>

									{/* phone View */}

									<section
										className='b-homeAuto   visible-xs'
										style={{ marginTop: "-38px" }}>
										<div className='container'>
											<div className=''>
												<div className='b-homeAuto__latest'>
													<h5
														className='s-titleBg '
														style={{ fontFamily: "Segoe UI" }}>
														GIVING OUR CUSTOMERS BEST DEALS
													</h5>
													<br />

													<h2
														className='s-title'
														// '0.9s'
														style={{ fontFamily: "Segoe UI" }}>
														LATEST VEHICLES ON SALE
													</h2>

													<div className='row car_fll_pic' id='cardrow'>
														{demo.length === 0 ? (
															<div className='notdatafound23'>
																<h2>vehicle Not Available</h2>
															</div>
														) : (
															<>
																{demo?.map((item) => (
																	<div
																		className=' bag_clr2'
																		style={{
																			width: "70%",
																			borderRadius: "15px",
																			marginLeft: "15px",
																			height: "70%",
																			padding: "2px",
																			border: "1px solid black",
																		}}>
																		<div key={item.uniqueSerial}>
																			<div>
																				{/* phone View */}

																				<div
																					style={{ borderRadius: "20px" }}
																					onClick={() =>
																						singleProducthandle(
																							item.uniqueSerial
																						)
																					}
																					className='  visible-xs'>
																					<div className=''>
																						<div className=''>
																							{item?.modelImages.length ===
																							0 ? (
																								<>
																									<img
																										style={{
																											marginLeft: "1px",

																											aspectRatio: " 3/4",
																											width: "100%",
																											maxHeight: "230px",
																											objectFit: "cover",
																											borderRadius: "10px",
																										}}
																										className=' img-responsive center-block '
																										src='images/logo/defaulimag.png'
																										alt='nissan'
																									/>
																								</>
																							) : (
																								<>
																									<img
																										style={{
																											marginLeft: "1px",

																											aspectRatio: " 3/4",
																											width: "100%",
																											maxHeight: "230px",
																											objectFit: "cover",
																											borderRadius: "10px",
																										}}
																										className=' img-responsive center-block '
																										src={
																											item?.modelImages.length >
																												0 &&
																											item?.modelImages[0].uri
																										}
																										alt='nissan'
																									/>
																								</>
																							)}
																						</div>
																						<div className=''>
																							<div
																								className=' d-flex b-items__cars-one-info-title'
																								style={{
																									fontSize: "16px",
																									marginLeft: "5px",
																									marginTop: "5px",
																								}}>
																								{" "}
																								<div>
																									{item.vehManufactureYear}{" "}
																								</div>
																								<div
																									style={{ marginLeft: "5px" }}>
																									{" "}
																									{item.vehBrandCode}
																								</div>{" "}
																								<div
																									style={{ marginLeft: "5px" }}>
																									{item.vehModelCode}{" "}
																								</div>
																							</div>
																							<br />

																							<div
																								className='d-flex'
																								style={{
																									marginTop: "-20px",
																									marginLeft: "-16px",
																								}}>
																								<div class='rate_ts_mn'>
																									<ul className='d-flex'>
																										<li className='b'>
																											{item.vehOdometer}
																										</li>

																										<li
																											className=''
																											style={{
																												marginLeft: "5px",
																											}}>
																											{item.exteriorColor}
																										</li>
																										<li
																											className=''
																											style={{
																												marginLeft: "5px",
																											}}>
																											{item.vehFuelCode}
																										</li>

																										<li
																											className=''
																											style={{
																												marginLeft: "5px",
																											}}>
																											{item.transmissionDesc}
																										</li>
																									</ul>
																								</div>
																							</div>

																							<span
																								style={{
																									marginLeft: "10px",
																									marginTop: "-5px",
																								}}
																								className='d-flex ml-6'>
																								<i className=''></i>{" "}
																								<div
																									className='b-items__cars-one-info-title'
																									style={{ fontSize: "15px" }}>
																									<i class='fa fa-rupee'></i>{" "}
																									{item.vehSellPriceRecommended}
																								</div>
																							</span>
																						</div>
																					</div>
																				</div>
																			</div>
																		</div>
																	</div>
																))}
															</>
														)}
													</div>
													<br />
												</div>
											</div>
										</div>
										<div className='clearfix'></div>
									</section>
								</>
							)}

							<div class='service_sec_mn'>
								<div class='container'>
									<div class='row'>
										<div class='col-md-3 col-sm-6'>
											<div class='serviceBox'>
												<a href='#/carloans'>
													<div class='service-icon'></div>
												</a>
												<h3 class='title'>Auto Loans</h3>
												<p class='description'>Low rates and fast approvals</p>
											</div>
										</div>

										<div class='col-md-3 col-sm-6'>
											<div class='serviceBox purple'>
												<a href='#/insurence'>
													<div class='service-icon'></div>
												</a>
												<h3 class='title'>Insurance</h3>
												<p class='description'>
													Get the right car insurance for the right price
												</p>
											</div>
										</div>

										<div class='col-md-3 col-sm-6'>
											<div class='serviceBox green'>
												<div class='service-icon'></div>
												<h3 class='title'>Customer Requirements</h3>
												<p class='description'>
													We listen to your needs and provide custom solutions
												</p>
											</div>
										</div>

										<div class='col-md-3 col-sm-6'>
											<div class='serviceBox red'>
												<a href='#/emical'>
													{" "}
													<div class='service-icon'></div>
												</a>
												<h3 class='title'>EMI calculator</h3>
												<p class='description'>Low rates and fast approvals</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* Exclusive offers slider */}
							<section className='b-featured hidden-xs'>
								<div className='container-fluid'>
									<h2 className='s-title ex_tx'>Exclusive Offers</h2>

									<div className='carousel-wrapper'>
										<Carousel breakPoints={breakPoints}>
											{stockdata
												?.filter(
													(item) =>
														item.programCode ===
														"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
												)
												.map((item) => (
													<div key={item.uniqueSerial}>
														<div>
															<div
																onClick={() =>
																	singleProducthandle(item.uniqueSerial)
																}
																className=' card3 b-auto__main-item1 '>
																{item?.modelImages.length === 0 ? (
																	<>
																		{" "}
																		<img
																			src='images/logo/defaulimag.png'
																			style={{
																				aspectRatio: "/2",
																				width: "100%",
																			}}
																		/>
																	</>
																) : (
																	<>
																		<img
																			style={{
																				aspectRatio: "/2",
																				width: "100%",
																			}}
																			// className='hidden-xs '
																			src={
																				item?.modelImages.length > 0 &&
																				item?.modelImages[0].uri
																			}
																			alt='nissan'
																		/>
																	</>
																)}
																<div
																	className=' d-flex b-items__cars-one-info-title  hidden-xs '
																	style={{
																		fontSize: "16px",
																		marginLeft: "20px",
																		color: "white",
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
																<div
																	id=''
																	className='d-flex  hidden-xs tex_rep'
																	style={{
																		marginTop: "-4px",
																		color: "white",
																	}}>
																	<div className='tx_lii1'>
																		<ul className='' style={{ fontSize: "" }}>
																			<li className='b'>
																				{item.vehOdometer} kms
																			</li>

																			<li
																				className=''
																				style={{ marginLeft: "0px" }}>
																				{item.exteriorColor}
																			</li>
																			<li
																				className=''
																				style={{ marginLeft: "0px" }}>
																				{item.vehFuelCode}
																			</li>

																			<li
																				className=''
																				style={{ marginLeft: "0px" }}>
																				{item.transmissionDesc}
																			</li>
																		</ul>
																	</div>
																</div>
																<span
																	style={{
																		marginLeft: "20px",
																		color: "white",
																	}}
																	className='d-flex ml-6  hidden-xs'>
																	<i className=''></i>{" "}
																	<div
																		className='b-items__cars-one-info-title'
																		style={{
																			fontSize: "21px",
																			color: "white",
																		}}>
																		<i class='fa fa-rupee'></i>{" "}
																		{item.vehSellPriceRecommended}
																	</div>
																</span>
																<div
																	className='visible-xs'
																	style={{ marginLeft: "5px", color: "white" }}>
																	{" "}
																	{item.vehBrandCode}
																</div>{" "}
															</div>
														</div>
													</div>
												))}
										</Carousel>
									</div>

									{/* slide checking */}
								</div>
							</section>

							{/* phone View Show */}
							<section className='b-featured visible-xs'>
								<div className='container-fluid'>
									<h2 className='s-title '>Exclusive Offers qwert</h2>

									<div>
										<div className='row' id='cardrow'>
											{/* testing details */}
											{stockdata
												?.filter(
													(item) =>
														item.programCode ===
														"SHORT_LIST_WEBSITE_EXCLUSIVE_OFFERS"
												)

												.map((item) => (
													<div key={item.uniqueSerial}>
														{/* phone View */}
														<div
															style={{ borderRadius: "20px" }}
															onClick={() =>
																singleProducthandle(item.uniqueSerial)
															}
															className='  visible-xs clr_mol1 slider-car-mobile'>
															<div className=''>
																<div className=''>
																	{item?.modelImages.length === 0 ? (
																		<>
																			<img
																				style={{
																					marginLeft: "1px",

																					aspectRatio: " 3/4",
																					width: "100%",
																					maxHeight: "250px",
																					objectFit: "cover",
																					borderRadius: "10px",
																				}}
																				className=' img-responsive center-block '
																				src='images/logo/defaulimag.png'
																				alt='nissan'
																			/>
																		</>
																	) : (
																		<>
																			<img
																				style={{
																					marginLeft: "1px",

																					aspectRatio: " 3/4",
																					width: "100%",
																					maxHeight: "260px",
																					objectFit: "cover",
																					borderRadius: "10px",
																				}}
																				className=' img-responsive center-block sli_pic'
																				src={
																					item?.modelImages.length > 0 &&
																					item?.modelImages[0].uri
																				}
																				alt='nissan'
																			/>
																		</>
																	)}
																</div>
																<div className='p-3'>
																	<div
																		className=' d-flex b-items__cars-one-info-title'
																		style={{
																			fontSize: "16px",
																			marginLeft: "5px",
																			marginTop: "5px",
																			color: "white",
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
																	<br />

																	<div
																		className='d-flex'
																		style={{
																			marginTop: "-20px",
																			marginLeft: "0px",
																			color: "white",
																		}}>
																		<div className='excul_mob'>
																			<ul className=''>
																				<li className='b'>
																					{item.vehOdometer}
																				</li>

																				<li
																					className=''
																					style={{
																						marginLeft: "0px",
																					}}>
																					{item.exteriorColor}
																				</li>
																				<li
																					className=''
																					style={{
																						marginLeft: "0px",
																					}}>
																					{item.vehFuelCode}
																				</li>

																				<li
																					className=''
																					style={{
																						marginLeft: "0px",
																					}}>
																					{item.transmissionDesc}
																				</li>
																			</ul>
																		</div>
																	</div>

																	<span
																		style={{
																			marginLeft: "10px",
																			marginTop: "-5px",
																		}}
																		className='d-flex ml-6'>
																		<i className=''></i>{" "}
																		<div
																			className='b-items__cars-one-info-title'
																			style={{
																				fontSize: "15px",
																				color: "white",
																			}}>
																			<i class='fa fa-rupee'></i>{" "}
																			{item.vehSellPriceRecommended}
																		</div>
																	</span>
																</div>
															</div>
														</div>
													</div>
												))}
										</div>
									</div>

									{/* slide checking */}
								</div>
							</section>

							{/* 


WELCOME TO SUSHIL CARS  section */}

							{/* switch to go mobile */}
							<section className='b-count sms-sec'>
								<div className='container'>
									<div className='row'>
										<div
											className='col-md-6 col-xs-12 percent-blocks sms-main'
											data-waypoint-scroll='true'>
											<div className='row'>
												<div className='col-md-10'>
													<div className='sms-sec__item'>
														<div
															className='getng_t_text wow  '
															style={{
																visibility: "visible",

																animationDelay: "0s",
															}}>
															<p className=''>
																Switch to the fast lane. <br />
																Go mobile switch to the fast lane.
															</p>

															<p className=''></p>

															<span>
																Download our app and let your mobile assistence
																do all the hard work
															</span>
														</div>

														<div
															className='getng_btns wow hidden-xs  '
															style={{
																visibility: "visible",

																animationDelay: "0.3s",
															}}>
															<a target='_blank' className='apkbtn'>
																<img
																	className='lazy'
																	alt='apk btn 1'
																	src='assets/app-logo/google-play-logo.png'
																	style={{ display: "inline-block" }}
																/>
															</a>

															<a target='_blank' className='apkbtn'>
																<img
																	className='lazy'
																	alt='apk btn 2'
																	src='assets/app-logo/apple-app-store-logo.png'
																	style={{ display: "inline-block" }}
																/>
															</a>
														</div>

														<div
															className='getng_btns wow  visible-xs  row'
															style={{
																visibility: "visible",

																animationDelay: "0.3s",
															}}>
															<a target='_blank' className='apkbtn '>
																<img
																	className='lazy'
																	alt='apk btn 1'
																	src='assets/app-logo/google-play-logo.png'
																	style={{ display: "inline-block" }}
																/>
															</a>

															<a
																style={{
																	marginLeft: "180px",

																	marginTop: "-30px",
																}}
																target='_blank'
																className='apkbtn'>
																<img
																	style={{ marginTop: "-96px" }}
																	className='lazy'
																	alt='apk btn 2'
																	src='assets/app-logo/apple-app-store-logo.png'
																/>
															</a>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className='b-asks'>
								<div className='container'>
									<div className='row'>
										<div className='col-md-6 col-sm-10 col-sm-offset-1 col-md-offset-0 col-xs-12'>
											<div className='b-asks__first wow '>
												<div className='b-asks__first-circle'>
													<span className='fa fa-search'></span>
												</div>
												<Link to='/detailsdata' className='b-asks__first-info'>
													<h2>ARE YOU LOOKING FOR A CAR?</h2>{" "}
													<p>
														Search Our Inventory With Thousands Of Cars And More
														Cars Are Adding On Daily Basis
													</p>
												</Link>
												<div className='b-asks__first-arrow'>
													<Link to='/detailsdata'>
														<span className='fa fa-angle-right'></span>
													</Link>
												</div>
											</div>
										</div>
										<div className='col-md-6 col-sm-10 col-sm-offset-1 col-xs-12 col-md-offset-0'>
											<div className='b-asks__first m-second wow '>
												<div className='b-asks__first-circle'>
													<span className='fa fa-rupee'></span>
												</div>
												<Link to='/salecar' className='b-asks__first-info'>
													<h2 style={{ color: "white" }}>
														DO YOU WANT TO SELL A CAR?
													</h2>
													<p>
														Search Our Inventory With Thousands Of Cars And More
														Cars Are Adding On Daily Basis
													</p>
												</Link>
												<div className='b-asks__first-arrow'>
													<Link to='/salecar'>
														<span className='fa fa-angle-right'></span>
													</Link>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className='b-count'>
								<div className='container'>
									<div className='row'>
										<div
											className='col-md-11 col-xs-12 percent-blocks m-main'
											data-waypoint-scroll='true'>
											<div className='row'>
												<div className='col-sm-4 col-xs-6'>
													<div className='b-count__item'>
														<div className='b-count__item-circle'>
															<Link to='/detailsdata'>
																<span className='fa fa-car'></span>
															</Link>
														</div>
														<div className='chart' data-percent='5000'>
															<h2 className='percent'>200</h2>
														</div>
														<h5>vehicles in stock</h5>
													</div>
												</div>
												<div className='col-sm-4 col-xs-6'>
													<div className='b-count__item'>
														<div className='b-count__item-circle'>
															<span className='fa fa-users'></span>
														</div>
														<div className='chart' data-percent='3100'>
															<h2 className='percent'>3100</h2>
														</div>
														<h5>HAPPY CUSTOMER REVIEWS</h5>
													</div>
												</div>
												<div className='col-sm-4 col-xs-6'>
													<div className='b-count__item'>
														<div className='b-count__item-circle'>
															<span className='fa fa-building-o'></span>
														</div>
														<div className='chart' data-percent='500'>
															<h2 className='percent'>2</h2>
														</div>
														<h5>DEALER BRANCHES</h5>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
							<section className='b-brands s-shadow'>
								<div className='container'>
									<h5 className='s-titleBg wow zoomInUp'>FIND OUT MORE</h5>
									<br />
									<h2 className='s-title wow zoomInUp brd_padg'>
										BRANDS WE OFFER
									</h2>

									<div className=''>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/bmw.jpg' alt='brand' />
										</div>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/kia.png' alt='brand' />
										</div>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/volvo.png' alt='brand' />
										</div>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/merc.jpg' alt='brand' />
										</div>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/audi.jpg' alt='brand' />
										</div>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/hunda.jpg' alt='brand' />
										</div>
										<div className='b-brands__brand wow rotateIn'>
											<img src='images/logo/mg.jpg' alt='brand' />
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</>
			) : (
				<>
					{selectedProduct ? (
						<Details selectedProduct={selectedProduct} />
					) : (
						<div></div>
					)}
				</>
			)}
			<Footer />
		</div>
	);
}
