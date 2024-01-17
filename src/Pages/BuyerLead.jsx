import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const BuyerLead = ({
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

	const currentDate = new Date();

	const formattedCurrentDate = `${currentDate.getFullYear()}-${String(
		currentDate.getMonth() + 1
	).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
		2,
		"0"
	)}T${String(currentDate.getHours()).padStart(2, "0")}:${String(
		currentDate.getMinutes()
	).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;

	useEffect(() => {
		const url =
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetUsedCarBuyerLeads";
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
			vehMake: "ALL_BRANDS",
			vehModels: "ALL_MODELS",
			prospectStatus: "ACTIVE_PROSPECT",
			dateFrom: "2001-01-01T00:00:00",
			dateTo: formattedCurrentDate,
			loginCompanyId: "SUSHIL",
			loginCompanyAccessProfile: "DEALER_RETAIL",
			loginEmpHierarchialGroup: "L0",
			loginEmpCode: "E20004",
			loginJobTypeCode: "MGT",
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
				const generalList = jsonData?.UsedCarBuyerLeads;
				setdataapi(generalList);
			})
			.catch((error) => {
				console.error(error);
			});
	},[]);

	// console.log(dataapi, "respo data list lead status api dele");
	const navigate = useNavigate();

	useEffect(() => {
		// Define the URL, headers, and parameters
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

		// Create an array of URLSearchParams from the queryParams object
		const searchParams = new URLSearchParams(queryParams);

		// Construct the final URL by appending the query parameters
		const finalUrl = `${apiUrl}?${searchParams.toString()}`;

		// Make the API call using fetch
		fetch(finalUrl, {
			method: "GET",
			headers: headers,
		})
			.then((response) => response.json())
			.then((data) => {
				// Add default values to handle missing properties
				// const { yourExpectedProperty = defaultValue } = data;
				setuploaddata(data.UsedCarDocSubModules);
				// setSelectedProduct(data.UniqueSerial);
			})
			.catch((error) => console.error("Error:", error));
	}, []);

	// console.log(dataapi, "buyer lead sdfh");

	const singleProducthandle = (uniqueSerial) => {
		const product = dataapi.find(
			(itemdata) => itemdata.uniqueSerial === uniqueSerial
		);
		setSelectedProduct(product);
		setuploaddata(product.uniqueSerial);
		console.log(product.uniqueSerial, "asdfbkjl;");
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
							Buyer Leads
						</span>
					</Link>{" "}
					<span
						id='booking-count'
						className=' text-left text-right '
						style={{ color: "white" }}>
						Total Buyer Leads: {totalItems}{" "}
						<ReactHTMLTableToExcel
							id='test-table-xls-button'
							className='export btn '
							table='table-to-xls2'
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
							<table id='table-to-xls2'>
								<thead>
									<tr>
										<th style={{ width: "143px" }}>Lead Id</th>

										<th style={{ width: "174px" }}>Branch</th>

										<th style={{ width: "243px" }}> Phone No.</th>

										<th style={{ width: "300px" }}> Name</th>

										<th style={{ width: "269px" }}> Brand</th>

										<th style={{ width: "269px" }}> Model</th>
										<th style={{ width: "269px" }}> Variant</th>

										<th style={{ width: "234px" }}> Created Date</th>

										<th style={{ width: "214px", border: "none" }}>
											Close Date
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
													<td style={{ width: "7%" }}>{itemdata.prospectNo}</td>

													<td style={{ width: "9%" }}>
														{itemdata.prospectLocation}
													</td>

													<td style={{ width: "11.5%" }}>
														{itemdata.mobileNo}
													</td>

													<td style={{ width: "   14%" }}>
														{itemdata.custFirstName}
													</td>

													<td style={{ width: "12.5%" }}>
														{itemdata.vehMake.description}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "12.5%" }}>
														{itemdata.vehModel ? itemdata.vehModel.code : ""}
													</td>

													<td
														onClick={() =>
															singleProducthandle(itemdata.uniqueSerial)
														}
														style={{ width: "13%" }}>
														{itemdata.vehVariant
															? itemdata.vehVariant.code
															: ""}
													</td>

													<td style={{ width: "11.5%" }}>
														{itemdata.openedOn && formatDate(itemdata.openedOn)}
													</td>

													<td style={{ width: "214px" }}>
														{itemdata.projectedClosureDate &&
															formatDate(itemdata.projectedClosureDate)}
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

export default BuyerLead;
