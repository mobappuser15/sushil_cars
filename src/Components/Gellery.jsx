import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Gellery = () => {
	const [stockdata, setStockdata] = useState("");
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
				budgetTo: 2000000,
				vehBrandCode: "ALL",
				vehModelCode: "HECTOR",
				vehFuel: "PETROL",
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
					console.log("Response Data:", responseData);
					setStockdata(responseData);
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
			<h1 style={{ color: "red", backgroundColor: "red" }}>hello</h1>
		</div>
	);
};

export default Gellery;
