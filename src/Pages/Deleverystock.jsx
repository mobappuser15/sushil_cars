import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Chip, Stack } from "@mui/material";
import "./admin.css";
import "./table.css";
import ReactLoading from "react-loading";
import Table from "react-bootstrap/Table";
import DataUpload from "./DataUpload";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
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
	const [currentpage, setCurrentPage] = useState(0);

	const itemsperpage = 15;
	const totalItems = dataapi.length;
	const totalPage = Math.ceil(totalItems / itemsperpage);

	const onPageChange = (page) => {
		setCurrentPage(page);
	};

	const Startindex = (currentpage - 1) * itemsperpage;
	const EndIndex = Startindex + itemsperpage;
	var currentData = dataapi.slice(Startindex, EndIndex);

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
				dataType: "VEH_DELIVERY",
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

	console.log(dataapi, "respo data list lead status api dele");
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

		navigate(`/deleveryform?uniqueSerial=${product.uniqueSerial}`);
		console.log(product.uniqueSerial, "asdfbkjl;");
	};
	console.log(uniquekey, "delevery data form");

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
			<div>
				<div className=' col-xl-12 bg-dark' id='header'>
					<div className='row row-cols-md-2 m-2 p-4 row-cols-lg-2 row-cols-xl-2 font-weight-bold'>
						<Link style={{ color: "white", marginLeft: "-20px" }} to='/admin'>
							<ArrowBackIcon style={{ fontSize: "20px" }} />
							<span
								className=' text-left text-light '
								style={{ marginLeft: "10px" }}>
								Vehicle Delivery
							</span>
						</Link>{" "}
						<span
							id='booking-count'
							className=' text-left text-right '
							style={{ color: "white" }}>
							Total Delivery Stock No: {totalItems}{" "}
							<ReactHTMLTableToExcel
								id='test-table-xls-button'
								className='export btn '
								table='table-to-xls14'
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
			</div>

			<div className='wid_fixd'>
				<>
					<>
						<table id='table-to-xls14'>
							<thead>
								<tr>
									<th style={{ width: "126px" }}>Lead Id</th>

									<th style={{ width: "145px" }}>Branch</th>

									<th style={{ width: "184px" }}> Name</th>

									<th style={{ width: "104px" }}>Company</th>

									<th style={{ width: "169px" }}>Brand</th>

									<th style={{ width: "182px" }}>Model</th>
									<th style={{ width: "182px" }}>Variant</th>

									<th style={{ width: "114px" }}>Odometer</th>

									<th style={{ width: "91px" }}>MF. Year</th>

									<th style={{ width: "165px" }}>Phone No.</th>

									<th style={{ border: "none", width: "207px" }}>
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
												<td style={{ width: "126px" }}>
													<Link style={{ color: "#f76d2b" }}>
														{itemdata.uniqueSerial}
													</Link>
												</td>

												<td style={{ width: "145px" }}>
													{itemdata.branchName}
												</td>

												<td style={{ width: "184px" }}>
													{itemdata.vehOwnerName}
												</td>

												<td style={{ width: "104px" }}>
													{itemdata.dlrCompanyId}
												</td>

												<td style={{ width: "169px" }}>
													{itemdata.vehBrand.description}
												</td>

												<td style={{ width: "182px" }}>
													{itemdata.vehModel.description}
												</td>
												{/* <td style={{ width: "182px" }}>
													{itemdata.vehVariant.description}
												</td> */}

												<td style={{ width: "182px" }}>
													{itemdata.vehVariant ? itemdata.vehVariant.code : ""}
												</td>

												<td style={{ width: "114px" }}>
													{itemdata.vehOdometer}
												</td>

												<td style={{ width: "91px" }}>
													{itemdata.vehManufactureYear.description}
												</td>

												<td style={{ width: "165px" }}>
													{itemdata.vehOwnerMobile}
												</td>

												<td style={{ width: "207px" }}>
													{itemdata.createDate &&
														formatDate(itemdata.createDate)}
												</td>
											</tr>
										))}
									</>
								)}
							</tbody>
						</table>
					</>
				</>
			</div>
		</div>
	);
};

export default BookingStovk;
