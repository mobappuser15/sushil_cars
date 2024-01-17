import React, { useState, useEffect } from "react";
import axios from "axios";
import Submit4 from "./Submit4";
import { Link, useNavigate } from "react-router-dom";
import Searchdata from "./Searchdata";
import ScrollTop from "./ScrollTop";
import PageScrollTop from "./PageScrollTop";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Footer from "./Footer";
import Navbar from "./Navbar";
import SocalMedia from "./SocalMedia";

const Submit1 = ({ detailspage, setDetailspage }) => {
	const [num1, setNum1] = useState(1);
	const [num2, setNum2] = useState(3);
	const [odometr, setodometr] = useState("");
	const [captcha, setCaptcha] = useState("");
	const [result, setResult] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [makedatarequest, setMake] = useState([]);
	const [inputvalue, setInputvalue] = useState("");
	const [selectedValue, setSelectedValue] = useState(null);
	const [searchResults, setSearchResults] = useState([]);
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
	const [selectextirecolor, setSelectextirecolor] = useState("");
	const [selectmfy, setSelectmfy] = useState("");
	const [selectmfm, setSelectmfm] = useState("");
	const [selectverient, setSelectverient] = useState("");
	const [codemodel, setcodemodel] = useState("");
	const [codemake, setcodemake] = useState("");
	const [codevarient, setvarientdata] = useState([]);
	const [errors, setErrors] = useState({
		selectedItem: false,
		selectverient: false,
		selectmfy: false,
		selectfuel: false,
		selecttransmission: false,
		selectmodel: false,
		selectextirecolor: false,
		selecttype: false,
		selectmfm: false,
	});

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
				console.log(generalList, "checkmakelist");
				console.log(jsonData, "jsondata");
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
				console.log(generalList, "MODELLIST");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel]);
	// Lead Type list
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
			calledBy: "LEAD_TYPE",
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
				setDatatype(generalList);
				console.log(generalList, "LEAD LIST");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// varient list
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

			calledBy: "VARIANT",
			vehMake: codemodel,
			vehModel: codemake,

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
				setVarient(generalList);
				console.log(generalList, "varient list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemake, codemodel]);
	// year list
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
			calledBy: "MF_YEAR",
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
				setVechileYear(generalList);
				// // console.log(generalList, "year list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// month list
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
			calledBy: "MONTH",
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
				setVechileMonth(generalList);
				// // console.log(generalList, "month list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// fuel list
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
			calledBy: "FUEL",
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
				setFuelData(generalList);
				// // console.log(generalList, "fuel list data");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	//  TRANSMISSION list
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
			calledBy: "TRANSMISSION",
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
				setTransmission(generalList);
				// // console.log(generalList, "transmission list");
			})
			.catch((error) => {
				console.error(error);
			});
	}, []);
	// extier color list

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
			calledBy: "EXT_COLOR",

			vehMake: codemodel,
			vehModel: codemake,
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
				setExtirearColor(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	}, [codemodel, codemake]);

	const handleSelectChange = (event) => {
		setSelectedItem(event.target.value);
		setcodemodel(event.target.value);
	};

	const handleSelectChange2 = (event) => {
		setSelecttype(event.target.value);
	};
	const handleSelectChange3 = (event) => {
		setSelectmodel(event.target.value);
		setcodemake(event.target.value);
	};
	const handleSelectChange4 = (event) => {
		setSelectFuel(event.target.value);
	};
	const handleSelectChange5 = (event) => {
		setSelecttransmission(event.target.value);
	};
	const handleSelectChange6 = (event) => {
		setSelectextirecolor(event.target.value);
	};
	const handleSelectChange7 = (event) => {
		setSelectmfy(event.target.value);
	};
	const handleSelectChange8 = (event) => {
		setSelectmfm(event.target.value);
	};
	const handleSelectChange9 = (event) => {
		setSelectverient(event.target.value);
	};
	const navigate = useNavigate();

	const handleSaveData = (e) => {
		e.preventDefault();
		const isValid = isFormValid();

		if (isValid) {
			const AllData = {
				mfdMonth: selectmfm,
				source: "26",
				brand: selectedItem,
				model: selectmodel,
				exteriorColor: selectextirecolor,
				variantCode: selectverient,
				regnFormat: selecttransmission,
				regn1: selecttype,
				mfdYear: selectmfy,
				fuel: selectfuel,
			};

			localStorage.setItem("data", JSON.stringify(AllData));
			navigate("/submit2");

			console.log(AllData, "Form is valid. Proceed to the next step.");
		} else {
			console.log("Please fill all required fields.");
		}
	};

	function isFormValid() {
		const isValid =
			selectedItem.trim() !== "" &&
			selectmfy.trim() !== "" &&
			selectfuel.trim() !== "" &&
			selecttransmission.trim() !== "" &&
			selectmodel.trim() !== "" &&
			selectextirecolor.trim() !== "" &&
			selectmfm.trim() !== "";

		setErrors({
			selectedItem: selectedItem.trim() === "",

			selectmfy: selectmfy.trim() === "",
			selectfuel: selectfuel.trim() === "",
			selecttransmission: selecttransmission.trim() === "",
			selectmodel: selectmodel.trim() === "",
			selectextirecolor: selectextirecolor.trim() === "",

			selectmfm: selectmfm.trim() === "",
		});

		return isValid;
	}

	const handleHomeClick = () => {
		setDetailspage(false);
	};

	return (
		<>
			<Navbar onHomeClick={handleHomeClick} /> <PageScrollTop />
			<SocalMedia />
			<div style={{ margingTop: "40px" }}>
				<PageScrollTop />
				<div class='m-submit1' data-scrolling-animations='true'>
					<section class='b-pageHeader'>
						<div class='container'>
							<h1 class=''>Submit Your Vehicle</h1>
						</div>
					</section>

					<div class='b-breadCumbs s-shadow'>
						<div class='container  '>
							<Link to='/' className='b-breadCumbs__page'>
								Home
							</Link>
							<span class='fa fa-angle-right'></span>
							<a class='b-breadCumbs__page m-active'> Sell Car</a>
						</div>
					</div>
				</div>

				{/* body section */}

				<div class='b-submit'>
					<div class='container'>
						<div class='form_clr'>
							<div class='row'>
								<div class='col-lg-3 col-md-4 col-sm-5 col-xs-6'>
									<aside class='b-submit__aside'>
										<div class='b-submit__aside-step m-active  '>
											<h3>Step 1</h3>
											<div class='b-submit__aside-step-inner m-active clearfix'>
												<div class='b-submit__aside-step-inner-icon'>
													<span class='fa fa-car'></span>
												</div>
												<div class='b-submit__aside-step-inner-info'>
													<h4>Add YOUR Vehicle</h4>
													<p>Select your vehicle &amp; add info</p>
													<div class='b-submit__aside-step-inner-info-triangle'></div>
												</div>
											</div>
										</div>
										<div class='b-submit__aside-step  '>
											<h3>Step 2</h3>
											<div class='b-submit__aside-step-inner clearfix'>
												<div class='b-submit__aside-step-inner-icon'>
													<span class='fa fa-user'></span>
												</div>
												<div class='b-submit__aside-step-inner-info'>
													<h4>Contact details</h4>
													<p>Update your contact details</p>
												</div>
											</div>
										</div>
									</aside>
								</div>

								<div class='col-lg-9 col-md-8 col-sm-7 col-xs-6'>
									<div class='b-submit__main'>
										<div class='s-headerSubmit s-lineDownLeft  '>
											<h2 class=''>Add Your Vehicle Details</h2>
										</div>
										{/*  form section */}

										<form class='s-submit clearfix' onSubmit={handleSaveData}>
											<div class='row'>
												<div class='col-md-6'>
													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Make <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectedItem}
																onChange={handleSelectChange}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
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
															{errors.selectedItem && (
																<span style={{ color: "red" }}>
																	Please Select Make
																</span>
															)}
														</div>
													</div>
													<div class='b-submit__main-element  visible-xs '>
														<label style={{ color: "black" }}>
															Model <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectmodel}
																onChange={handleSelectChange3}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
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
															{errors.selectmodel && (
																<span style={{ color: "red" }}>
																	Please Select Model
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Variant <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectverient}
																onChange={handleSelectChange9}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Variant{" "}
																</MenuItem>
																{varient.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectverient && (
																<span style={{ color: "red" }}>
																	Please Select Variant
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Year of MF. <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectmfy}
																onChange={handleSelectChange7}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Year{" "}
																</MenuItem>
																{vyear.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectmfy && (
																<span style={{ color: "red" }}>
																	Please Select Year
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Fuel <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectfuel}
																onChange={handleSelectChange4}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Fuel{" "}
																</MenuItem>
																{fueldata.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectfuel && (
																<span style={{ color: "red" }}>
																	Please Select Fuel
																</span>
															)}
														</div>
													</div>
												</div>
												<div class='col-md-6'>
													<div class='b-submit__main-element hidden-xs '>
														<label style={{ color: "black" }}>
															Model <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectmodel}
																onChange={handleSelectChange3}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Model{" "}
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
															{errors.selectmodel && (
																<span style={{ color: "red" }}>
																	Please Select Model
																</span>
															)}
														</div>
													</div>
													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Exterior Color <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selectextirecolor}
																onChange={handleSelectChange6}
																displayEmpty>
																<MenuItem value='' className='selectoption'>
																	Select Exterior Color{" "}
																</MenuItem>
																{extirecolor.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectextirecolor && (
																<span style={{ color: "red" }}>
																	Please Select Exterior Color
																</span>
															)}
														</div>
													</div>

													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Month of MF. <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																name='source'
																className='selectdataf1'
																value={selectmfm}
																onChange={handleSelectChange8}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Month{" "}
																</MenuItem>
																{vmonth.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>
															{errors.selectmfm && (
																<span style={{ color: "red" }}>
																	Please Select Month
																</span>
															)}
														</div>
													</div>
													<div class='b-submit__main-element  '>
														<label style={{ color: "black" }}>
															Transmission <span>*</span>
														</label>
														<div class='s-relative'>
															<Select
																className='selectdataf1'
																value={selecttransmission}
																onChange={handleSelectChange5}
																displayEmpty>
																<MenuItem className='selectoption' value=''>
																	Select Month{" "}
																</MenuItem>
																{transmission.map((item, index) => (
																	<MenuItem
																		className='selectoption'
																		key={index}
																		value={item.code}>
																		{item.description}
																	</MenuItem>
																))}
															</Select>

															{errors.selecttransmission && (
																<span style={{ color: "red" }}>
																	Please Select Transmission
																</span>
															)}
														</div>
													</div>

													<button
														id='procedbtn'
														type='submit'
														class='btn m-btn  '>
														PROCEED to next step
														<span
															id='arrowiconbtn'
															class='fa fa-check'
															aria-hidden='true'></span>
													</button>
												</div>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Submit1;
