import React, { useState, useEffect } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import UploadIcon from "@mui/icons-material/Upload";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const BookingStovk = ({
	detailspage,
	setDetailspage,
	company,
	username,
	uniquekey,
}) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);
	const [currentpage, setCurrentPage] = useState(1);

	const itemsperpage = 15;
	const totalItems = dataapi.length;
	const totalPage = Math.ceil(totalItems / itemsperpage);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const Startindex = (currentpage - 1) * itemsperpage;
	const EndIndex = Startindex + itemsperpage;
	var currentData = dataapi.slice(Startindex, EndIndex);
	console.log(totalItems, "currentData....");

	useEffect(() => {
		const fetchData = async () => {
			const url =
				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarLeadsByStatus";
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
				branchCode: "GGN01",
				dataGroup: "STOCK",
				dataType: "VEH_ORDER",
				dataPeriodType: "TODAY",
				dateFrom: "2023-09-19T00:00:00",
				dateTo: "2023-09-19T00:00:00",
				loginCompanyId: "SUSHIL",
				loginCompanyAccessProfile: "DEALER_RETAIL",
				loginEmpHierarchialGroup: "L0",
				loginEmpCode: "E20004",
				loginJobTypeCode: "MGT",
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
					setdataapi(responseData.usedCarLeads);
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

	console.log(dataapi, "booking  list");
	const navigate = useNavigate();

	useEffect(() => {
		const apiUrl =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarDocModule";
		const headers = {
			ApplicationMode: "ONLINE",
			EnvironmentType: "DEMO",
			BrandCode: "UC",
			CountryCode: "IN",
			loginCompanyId: "SUSHIL",
			loginUserId: "ANKIT",
			loginIpAddress: "180.151.78.50",
		};
		const queryParams = {
			uniqueSerial: uniquekey,
			docModule: "UC",
		};

		const searchParams = new URLSearchParams(queryParams);

		const finalUrl = `${apiUrl}?${searchParams.toString()}`;

		fetch(finalUrl, {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => {
				setuploaddata(data.UsedCarDocSubModules);
			})
			.catch((error) => console.error("Error:", error));
	}, []);

	console.log(dataapi, "uploadData module jfjfkkfk bookings");

	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setuploaddata(product.uniqueSerial);
		navigate(`/bookingform?uniqueSerial=${product.uniqueSerial}`);
		console.log(product.uniqueSerial, "asdfbkjl;");
	};

	const singleProducthandle1 = (uniqueSerial, vehOdometer) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial,
			(itemdata) => itemdata.vehOdometer === vehOdometer
		);
		setSelectedProduct(product);

		navigate(
			`/dataupload?uniquekey=${product.uniqueSerial}&vehOdometer=${product.vehOdometer}`
		);
		ImageuploadBack();
		console.log(product.vehOdometer, "odometer in;");
	};
	const ImageuploadBack = async (e) => {
		e.preventDefault();

		try {
			const priceData = {
				brandCode: "UC",
				countryCode: "IN",
				companyId: "SUSHIL",
				uniqueSerial: "uniqueSerial",
				priceSerial: 0,
				jobTypeCode: "",
				closureType: "I",
				closureContractType: "",
				vehEvaluatedTradeInPrice: "0",
				vehRefurbishmentCost: "0",
				vehLandedValueToUs: "0",
				vehCustomerExpectedPrice: "0",
				vehOurOfferToCustomer: "0",
				vehInsuValue: "0",
				vehChallanValue: "0",
				vehHypValue: "0",
				vehEstimateResaleValue: "0",
				vehReadyByDateTime: "",
				amountOem: "0",
				amountDealer: "price",
				closureReasonCode: "",
				closureTPAgency: "",
				closureComment: "",
				loginUserId: "ANKIT",
				loginCompanyID: "SUSHIL",
				loginIpAddress: "180.151.78.50",
			};

			const response = await fetch(
				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/SaveVehPriceData",
				{
					method: "POST",
					headers: {
						ApplicationMode: "ONLINE",
						EnvironmentType: "DEMO",
						BrandCode: "UC",
						CountryCode: "IN",
						"Content-Type": "application/json",
					},
					body: JSON.stringify(priceData),
				}
			);

			const dataResult = await response.json();

			if (response.ok) {
			} else {
			}
		} catch (error) {
			console.error("Error:", error);
		}
	};

	const formatDate = (inputDate) => {
		const monthNames = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const date = new Date(inputDate);
		const day = date.getDate();
		const monthIndex = date.getMonth();
		const year = date.getFullYear().toString().slice(-2);

		const formattedDay = day < 10 ? `0${day}` : day;

		const formattedMonth = monthNames[monthIndex];

		return `${formattedDay}-${formattedMonth}-${year}`;
	};

	return (
		<div className='hedr_mb_wo'>
			<div className=' col-xl-12 bg-dark' id='header'>
				<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<Link style={{ color: "white", marginLeft: "-20px" }} to='/admin'>
						<ArrowBackIcon style={{ fontSize: "20px" }} />
						<span
							className=' text-left text-light '
							style={{ marginLeft: "10px" }}>
							Vehicle Booking
						</span>
					</Link>{" "}
					<span
						id='booking-count'
						className=' text-left text-right '
						style={{ color: "white" }}>
						Total Booking Stock No: {totalItems}{" "}
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className='export btn '
							table='table-to-xls1'
							filename='tablexls'
							sheet='tablexls'
							buttonText={
								<>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='25'
										height='25'
										fill='green'
										class='bi bi-arrow-down-circle-fill'
										viewBox='0 0 16 16'>
										<path d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z' />
									</svg>
								</>
							}
						/>{" "}
					</span>
				</div>
			</div>

			<div className='wid_fixd'>
				<>
					<>
						<div>
							<table id='table-to-xls1'>
								<thead>
									<tr>
										<th style={{ width: "150px" }}>Lead Id</th>

										<th style={{ width: "125px" }}> Customer Name</th>

										<th style={{ width: " 167px" }}>Brand</th>
										<th style={{ width: "163px" }}>Model</th>
										<th style={{ width: "169px" }}>Variant</th>

										<th style={{ width: "150px" }}>Odometer</th>
										<th style={{ width: "170px" }}>MF .Year</th>

										<th style={{ width: "300px" }}>Registration No.</th>
										<th style={{ width: "300px" }}>Insurance Date</th>

										<th style={{ width: "200px" }}>Created Date</th>

										<th style={{ width: "211px", border: "none" }}>
											Image Upload
										</th>
									</tr>
								</thead>

								<tbody>
									{dataapi.length === 0 ? (
										<>
											<div style={{ marginLeft: "600px", marginTop: "146px" }}>
												<p>No Data Found</p>
											</div>
										</>
									) : (
										<>
											{dataapi.map((itemdata) => (
												<tr key={itemdata.vehOwnerSerial}>
													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "150px" }}>
														<Link to='' style={{ color: "#f76d2b" }}>
															{itemdata.uniqueSerial}{" "}
														</Link>
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "150px" }}>
														{itemdata.vehOwnerName}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "150px" }}>
														{itemdata.vehBrand.description}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "150px" }}>
														{itemdata.vehModel ? itemdata.vehModel.code : ""}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "150px" }}>
														{itemdata.vehVariant
															? itemdata.vehVariant.code
															: ""}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "150px" }}>
														{itemdata.vehOdometer}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "170px" }}>
														{itemdata.vehManufactureYear.description}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "300px" }}>
														{itemdata.vehRegnNo}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "300px" }}>
														{itemdata.insuranceDatetime &&
															formatDate(itemdata.insuranceDatetime)}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "200px" }}>
														{itemdata.createDate &&
															formatDate(itemdata.createDate)}
													</td>

													<td style={{ width: "200px" }}>
														<button
															style={{
																border: "none",
																borderRadius: "10px",
																backgroundColor: "green",
															}}>
															<UploadIcon
																style={{
																	color: "white",
																}}
																onClick={() =>
																	singleProducthandle1(itemdata.uniqueSerial)
																}
															/>
														</button>
													</td>
												</tr>
											))}
										</>
									)}
								</tbody>
							</table>
						</div>
					</>
				</>
			</div>
		</div>
	);
};

export default BookingStovk;
