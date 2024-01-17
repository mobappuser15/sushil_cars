import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import ReactLoading from "react-loading";
import "./admin.css";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import styled from "./../Components/Item";
const StoreVechileTable = ({
	detailspage,
	setDetailspage,
	company,
	username,
}) => {
	const [dataapi, setdataapi] = useState([]);
	const [selectedProduct, setSelectedProduct] = useState(null);
	const [uploadData, setuploaddata] = useState(null);
	const [uniquekey, setUniquekey] = useState();
	const [selectkmsvalue, setselectkmsvalue] = useState();
	const [textBox1Value, setTextBox1Value] = useState("");
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

	// Handler for the first text box onChange event
	const handleTextBox1Change = (event) => {
		const value = event.target.value;
		setTextBox1Value(value);
	};

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
				dataType: "VEH_IMG_UPLOAD",
				dataPeriodType: "TODAY",
				dateFrom: "2023-09-14T00:00:00",
				dateTo: "2023-09-14T00:00:00",
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

	console.log(dataapi, "respo data list lead status api image upload ");
	const navigate = useNavigate();

	const singleProducthandle = (uniqueSerial, vehOdometer) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial,
			(itemdata) => itemdata.vehOdometer === vehOdometer
		);
		setSelectedProduct(product);
		setUniquekey(product.uniqueSerial);
		setuploaddata(product.uniqueSerial);
		setselectkmsvalue(product.vehOdometer);
		navigate(
			`/dataupload?uniquekey=${product.uniqueSerial}&vehOdometer=${product.vehOdometer}`
		);
		console.log(product.vehOdometer, "odometer in;");
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

		// Pad the day with a leading zero if needed
		const formattedDay = day < 10 ? `0${day}` : day;

		// Get the month name from the array
		const formattedMonth = monthNames[monthIndex];

		return `${formattedDay}-${formattedMonth}-${year}`;
	};

	return (
		<div className=' hedr_mb_wo'>
			<div className=' col-xl-12 bg-dark' id='header'>
				<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
					<Link style={{ color: "white", marginLeft: "-20px" }} to='/admin'>
						<span
							className=' text-left text-light '
							style={{ marginLeft: "10px" }}>
							Stock Dtails
						</span>
					</Link>{" "}
					<span
						id='booking-count'
						className=' text-left text-right '
						style={{ color: "white" }}>
						Total Stock No: {totalItems}{" "}
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className='export btn '
							table='table-to-xls5'
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
							<table id='table-to-xls5'>
								<thead>
									<tr>
										<th style={{ width: "94px" }}>Lead Id</th>

										<th style={{ width: "114px" }}>Branch</th>

										<th style={{ width: "155px" }}> Name</th>

										<th style={{ width: "104px" }}>Company</th>

										<th style={{ width: "149px" }}>Brand</th>
										<th style={{ width: "153px" }}>Model</th>

										<th style={{ width: "194px" }}>Email</th>

										<th style={{ width: "102px" }}>Odometer</th>

										<th style={{ width: "83px" }}>MF. Year</th>

										<th style={{ width: "151px" }}>Phone No.</th>

										<th style={{ border: "none", width: "171px" }}>
											Created Date
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
												<tr
													key={itemdata.vehOwnerSerial}
													onClick={() =>
														singleProducthandle(itemdata.uniqueSerial)
													}>
													<td style={{ width: "94px" }}>
														<Link to='' style={{ color: "#f76d2b" }}>
															{itemdata.uniqueSerial}{" "}
														</Link>
													</td>

													<td style={{ width: "114px" }}>
														{itemdata.branchName}
													</td>

													<td style={{ width: "155px" }}>
														{itemdata.vehOwnerName}
													</td>

													<td style={{ width: "104px" }}>
														{itemdata.dlrCompanyId}
													</td>

													<td style={{ width: "149px" }}>
														{itemdata.vehBrand.description}
													</td>

													<td style={{ width: "153px" }}>
														{itemdata.vehModel.description}
													</td>

													<td style={{ width: "194px" }}>
														{itemdata.vehOwnerEmail}
													</td>

													<td style={{ width: "102px" }}>
														{itemdata.vehOdometer}
													</td>

													<td style={{ width: "83px" }}>
														{itemdata.vehManufactureYear.description}
													</td>

													<td style={{ width: "151px" }}>
														{itemdata.vehOwnerMobile}
													</td>

													<td style={{ width: "171px" }}>
														{itemdata.createDate &&
															formatDate(itemdata.createDate)}
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

export default StoreVechileTable;
