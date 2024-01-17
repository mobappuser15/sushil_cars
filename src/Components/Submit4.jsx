// // import React from "react";

// // class Submit4 extends React.Component {
// // 	constructure(props) {
// // 		// super(props);
// // 		this.state = {
// // 			data: [],
// // 		};
// // 	}
// // 	componentDidMount() {
// // 		fetch("https://dummyjson.com/products/1")
// // 			.then((res) => res.json())
// // 			.then((json) => console.log(json));
// // 		// fetch(
// // 		// 	"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster"
// // 		// )
// // 		// 	.then((res) => res.json())
// // 		// 	.then((result) => {
// // 		// 		this.setState({ data: result });
// // 		// 	});
// // 	}

// // 	render() {
// // 		return (
// // 			<>
// // 				<h1>check api data</h1>
// // 			</>
// // 		);
// // 	}
// // }

// // export default Submit4;

// import React, { useState } from "react";

// const NumberAddCaptcha = () => {
// 	const [num1, setNum1] = useState("");
// 	const [num2, setNum2] = useState("");
// 	const [captcha, setCaptcha] = useState("");
// 	const [result, setResult] = useState("");
// 	const [errorMessage, setErrorMessage] = useState("");

// 	const generateCaptcha = () => {
// 		const number1 = Math.floor(Math.random() * 10) + 1;
// 		const number2 = Math.floor(Math.random() * 10) + 1;
// 		setNum1(number1);
// 		setNum2(number2);
// 		setResult("");
// 		setErrorMessage("");
// 	};

// 	const handleChange = (event) => {
// 		setCaptcha(event.target.value);
// 	};

// 	const handleSubmit = (event) => {
// 		event.preventDefault();
// 		if (parseInt(captcha, 10) === num1 + num2) {
// 			setResult("Correct!");
// 		} else {
// 			setResult("Incorrect!");
// 		}
// 		setCaptcha("");
// 	};

// 	return (
// 		<div>
// 			<p>Captcha</p>
// 			<p>
// 				{num1} + {num2} = ?
// 			</p>
// 			<form onSubmit={handleSubmit}>
// 				<input
// 					type='text'
// 					value={captcha}
// 					onChange={handleChange}
// 					placeholder='Enter the result'
// 				/>
// 				<button type='submit'>Submit</button>
// 			</form>
// 			<button onClick={generateCaptcha}>Generate New CAPTCHA</button>
// 			<p>{errorMessage}</p>
// 			<p>{result}</p>
// 		</div>
// 	);
// };

// export default NumberAddCaptcha;

import React, { useState } from "react";
import axios from "axios";

const StepOne = ({ formData, setFormData, nextStep }) => {
	const handleChange = (event) => {
		setFormData(
			{ ...formData, mobile: event.target.value },
			{ ...formData, surname: event.target.value },
			{ ...formData, email: event.target.value },
			{ ...formData, regno: event.target.value }
		);
	};

	return (
		<div>
			<h2> Contact Details</h2>
			<form
				className='s-submit clearfix'
				// onSubmit={(event) => handleFormSubmit(event, "form1")}
			>
				<div className='row'>
					<div className='col-md-6 col-xs-12'>
						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Mobil Number <span>*</span>
							</label>
							<input
								placeholder='Mobile Number'
								type='text'
								value={formData.mobile}
								onChange={handleChange}
							/>
						</div>

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Email Id <span>*</span>
							</label>
							<input
								placeholder='Email id'
								type='text'
								name='email'
								value={formData.email}
								onChange={handleChange}
							/>
						</div>

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Year of Mf. <span>*</span>
							</label>
							<div className='s-relative'>
								<select
									className='m-select'
									name='MF_YEAR'
									// value={form1Data.MF_YEAR}
									// onChange={(event) => handleInputChange(event, "form1")}
								>
									<option value='option1'>2003 </option>
									<option value='option2'>2004</option>
									<option value='option3'>2005</option>
									{/* {Yearofmanuf.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))} */}
								</select>
								<span className='fa fa-caret-down'></span>
							</div>
						</div>

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Month of Mf.<span>*</span>
							</label>
							<div className='s-relative'>
								<select
									className='m-select'
									name='MONTH'
									// value={form1Data.MONTH}
									// onChange={(event) => handleInputChange(event, "form1")}
								>
									{/* {Manufmonth.map((month) => (
															<option value='' key={month}>
																{month.label}
															</option>
														))} */}

									<option>june</option>
									<option>feb</option>
									<option>jan</option>
								</select>
								<span className='fa fa-caret-down'></span>
							</div>
						</div>

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Fuel Type <span>*</span>
							</label>
							<div className='s-relative'>
								<select
									className='m-select'
									name='FUEL'
									// value={form1Data.FUEL}
									// onChange={(event) => handleInputChange(event, "form1")}
								>
									<option value='option1'>skoda 1</option>
									<option value='option2'>zip 2</option>
									<option value='option3'>Option 3</option>
									{/* {FuelType.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))} */}
								</select>
								<span className='fa fa-caret-down'></span>
							</div>
						</div>
						{/* 
											<div
												className='b-submit__main-element wow zoomInUp'
												data-wow-delay='0.5s'>
												<label style={{ color: "black" }}>
													Transmission <span>*</span>
												</label>
												<div className='s-relative'>
													<select
														className='m-select'
														name='TRANSMISSION'
														value={form1Data.TRANSMISSION}
														onChange={(event) =>
															handleInputChange(event, "form1")
														}>
														{Transmission.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))}
													</select>
													<span className='fa fa-caret-down'></span>
												</div>
											</div> */}

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								KMs Driven <span>*</span>
							</label>

							<input
								placeholder='Enter Kms'
								type='text'
								name='kmno'
								// value={form1Data.kmno}
								// onChange={(event) => handleInputChange(event, "form1")}
							/>
						</div>
					</div>
					<div className='col-md-6 col-xs-12'>
						<div
							className='b-submit__main-element wow zoomInUp '
							data-wow-delay='0.5s'>
							{/* <div className='s-relative' style={{ marginLeft: "-20px" }}>
													<select
														className='m-select text-center fa fa-caret-down'
														name='sarname'
														value={form1Data.sarname}
														onChange={(event) =>
															handleInputChange(event, "form1")
														}
														placeholder='Brig.'>
														<option>Brig.</option>
														<option>Dr.</option>
														<option>Col.</option>
														<option>Mr.</option>
														<option>Mrs.</option>
													</select>
												</div> */}
							<label style={{ color: "black" }}>
								Name<span>*</span>
							</label>
							<input
								placeholder='Name'
								type='text'
								// name='name'
								value={formData.surname}
								onChange={handleChange}
							/>
						</div>

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Registration Number <span>*</span>
							</label>
							<input
								placeholder='Registration No'
								type='text'
								name='regno'
								value={formData.regno}
								onChange={handleChange}
							/>
						</div>
						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Model <span>*</span>
							</label>
							<div className='s-relative'>
								<select
									className='m-select'
									name='Model'
									// value={form1Data.Model}
									// onChange={(event) => handleInputChange(event, "form1")}
								>
									<option value='option1'>skoda 1</option>
									<option value='option2'>zip 2</option>
									<option value='option3'>Option 3</option>
									{/* {ModelList.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))} */}
								</select>
								<span className='fa fa-caret-down'></span>
							</div>
						</div>

						<div
							className='b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<label style={{ color: "black" }}>
								Source <span>*</span>
							</label>
							<div className='s-relative'>
								<select
									className='m-select'
									name='SOURCE'
									// value={form1Data.SOURCE}
									// onChange={(event) => handleInputChange(event, "form1")}
								>
									<option value='option1'>skoda 1</option>
									<option value='option2'>zip 2</option>
									<option value='option3'>Option 3</option>
									{/* {Source.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))} */}
								</select>
								<span className='fa fa-caret-down'></span>
							</div>
						</div>

						{/* <div
												className='b-submit__main-element wow zoomInUp'
												data-wow-delay='0.5s'>
												<label style={{ color: "black" }}>
													Type <span>*</span>
												</label>
												<div className='s-relative'>
													<select
														className='m-select'
														name='LEAD_TYPE'
														value={form1Data.LEAD_TYPE}
														onChange={(event) =>
															handleInputChange(event, "form1")
														}>
														{LeadType.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))}
													</select>
													<span className='fa fa-caret-down'></span>
												</div>
											</div> */}
						{/* 
											<div
												className='b-submit__main-element wow zoomInUp'
												data-wow-delay='0.5s'>
												<label style={{ color: "black" }}>
													Make <span>*</span>
												</label>
												<div className='s-relative'>
													<select
														className='m-select'
														name='MAKE'
														value={form1Data.MAKE}
														onChange={(event) =>
															handleInputChange(event, "form1")
														}>
														{Make.map((year) => (
															<option value='' key={year}>
																{year.label}
															</option>
														))}
													</select>
													<span className='fa fa-caret-down'></span>
												</div>
											</div> */}
					</div>
				</div>
				{/*  captcha code */}

				<div>
					<label style={{ color: "black" }}>
						Fill Captcha <span>*</span>
					</label>

					<form onSubmit='{handleSubmit}'>
						<div
							className=' d-flex b-submit__main-element wow zoomInUp'
							data-wow-delay='0.5s'>
							<p>{/* {num1} + {num2} = */}</p>

							<input
								placeholder='Enter the result'
								type='text'
								// value={captcha}
								// onChange={handleChange}
							/>
						</div>
					</form>
					<button
						className='btn m-btn pull-right wow zoomInUp btn-danger'
						style={{ backgroundColor: "#f76d2b" }}
						// onClick={generateCaptcha}
					>
						Reset CAPTCHA
					</button>
					{/* <p>{errorMessage}</p>
					<p>{result}</p> */}
				</div>
				<br />
				<br />
				<br />
				<br />

				<button
					style={{ backgroundColor: "#f76d2b" }}
					// to='/submit2'
					type='submit'
					className='btn m-btn pull-right wow zoomInUp btn-danger'
					data-wow-delay='0.5s'>
					Save &amp; PROCEED to next step
					<span className='fa fa-angle-right'></span>
				</button>
			</form>
			<button onClick={nextStep}>Next</button>
		</div>
	);
};

const StepTwo = ({ formData, setFormData, prevStep, nextStep, submitForm }) => {
	const handleChange = (event) => {
		setFormData({ ...formData, emailid1: event.target.value });
	};

	return (
		<div>
			<h2>Vehchile Details</h2>
			<input
				type='text'
				name='emailid'
				value={formData.emailid}
				onChange={handleChange}
				placeholder='Enter your email'
			/>

			<select value={formData.country} onChange={handleChange}>
				<option value=''>Select your country</option>
				<option value='USA'>USA</option>
				<option value='Canada'>Canada</option>
				<option value='UK'>UK</option>
			</select>
			<button onClick={prevStep}>Previous</button>
			<button onClick={submitForm}>Final Submition</button>
		</div>
	);
};

const StepperForm = () => {
	const [step, setStep] = useState(1);
	const [formData, setFormData] = useState({
		mobile: "",
		name: "",
		email: "",
		regno: "",
		country: "",
		kmno: "",
	});

	const nextStep = () => {
		setStep(step + 1);
	};

	const prevStep = () => {
		setStep(step - 1);
	};

	const submitForm = () => {
		// Send form data to the backend API
		axios
			.post("/api/GetGeneralMaster", formData)

			.then((response) => {
				console.log(response.data, "chack detal");
				// Handle success
			})
			.catch((error) => {
				console.error(error);
				// Handle error
			});
	};

	return (
		<div>
			{step === 1 && (
				<StepOne
					formData={formData}
					setFormData={setFormData}
					nextStep={nextStep}
				/>
			)}
			{step === 2 && (
				<StepTwo
					formData={formData}
					setFormData={setFormData}
					prevStep={prevStep}
					submitForm={submitForm}
				/>
			)}
		</div>
	);
};

export default StepperForm;
