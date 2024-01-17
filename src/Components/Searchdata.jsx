// // import React, { useState } from "react";
// // import axios from "axios";

// // const MyComponent = () => {
// // 	const [searchTerm, setSearchTerm] = useState("");
// // 	const [searchResults, setSearchResults] = useState([]);

// // 	const handleSearch = async () => {
// // 		try {
// // 			const response = await axios.post(
// // 				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/SearchVehicle",
// // 				{
// // 					brandCode: "UC",
// // 					countryCode: "IN",
// // 					searchValue: "9999999999",
// // 					searchKey: "M",
// // 					dlrCompanyId: "SUSHIL",
// // 					loginUserId: "MAMTA",
// // 					loginIpAddress: "180.151.78.50",
// // 				},
// // 				{
// // 					headers: {
// // 						ApplicationMode: "ONLINE",
// // 						brandCode: "UC",
// // 						countryCode: "IN",
// // 						EnvironmentType: "DEMO",
// // 					},
// // 				}
// // 			);
// // 			setSearchResults(response.data);
// // 			console.log(response.data, "response");
// // 		} catch (error) {
// // 			console.error(error);
// // 		}
// // 	};

// // 	return (
// // 		<div>
// // 			<h2>Search</h2>
// // 			<input
// // 				type='text'
// // 				value={searchTerm}
// // 				onChange={(e) => setSearchTerm(e.target.value)}
// // 			/>
// // 			<button onClick={handleSearch}>Search</button>

// // 			<h2>Search Results</h2>
// // 			<ul>
// // 				{Array.isArray(searchResults) ? (
// // 					searchResults.map((result) => (
// // 						<li key={result.id}>{result.searchValue}</li>
// // 					))
// // 				) : (
// // 					<li>No results found</li>
// // 				)}
// // 			</ul>
// // 		</div>
// // 	);
// // };

// // export default MyComponent;

// import React, { useState } from "react";
// import axios from "axios";

// const MyComponent = () => {
// 	const [selectedValue, setSelectedValue] = useState("");
// 	const [responseMessage, setResponseMessage] = useState("");

// 	const handleDropdownChange = (event) => {
// 		setSelectedValue(event.target.value);
// 	};

// 	const handleFormSubmit = (event) => {
// 		event.preventDefault();
// 		// Make API call with selectedValue in the request payload
// 		axios
// 			.post(
// 				"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster/",
// 				{ value: selectedValue }
// 			)
// 			.then((response) => {
// 				// Handle the API response
// 				setResponseMessage(response.data.message);
// 				console.log(setResponseMessage, "check data");
// 			})
// 			.catch((error) => {
// 				// Handle the API error
// 				console.error(error);
// 			});
// 	};

// 	return (
// 		<form onSubmit={handleFormSubmit}>
// 			<select value={selectedValue} onChange={handleDropdownChange}>
// 				<option value='option1'>Option 1</option>
// 				<option value='option2'>Option 2</option>
// 				<option value='option3'>Option 3</option>
// 			</select>
// 			<button type='submit'>Submit</button>

// 			{responseMessage && <p>{responseMessage}</p>}
// 		</form>
// 	);
// };

// export default MyComponent;

import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
	const [data, setData] = useState(null);
	const [source, setSource] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post(
					"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster",
					{
						brandCode: "UC",
						countryCode: "IN",
						companyId: "SUSHIL",
						calledBy: "MAKE",
						loginUserId: "RAVI",
						loginIpAddress: "180.151.78.50",
					},
					{
						headers: {
							"Content-Type": "application/json",
							ApplicationMode: "ONLINE",
							EnvironmentType: "DEMO",
							BrandCode: "UC",
							CountryCode: "IN",
						},
					}
				);

				setData(response.data);
				console.log(response.data, "check ");
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await axios.post(
					"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/UsedCar/GetGeneralMaster",
					{
						brandCode: "UC",
						countryCode: "IN",
						companyId: "SUSHIL",
						calledBy: "SOURCE",
						loginUserId: "RAVI",
						loginIpAddress: "180.151.78.50",
					},
					{
						headers: {
							"Content-Type": "application/json",
							ApplicationMode: "ONLINE",
							EnvironmentType: "DEMO",
							BrandCode: "UC",
							CountryCode: "IN",
						},
					}
				);

				setSource(response.data);
				console.log(response.data, "check Source ");
			} catch (error) {
				setError(error);
			}
		};

		fetchData();
	}, []);

	if (error) {
		return <p>Error occurred: {error.message}</p>;
	}

	return (
		<div>
			<h2>Data from API</h2>
			{/* {data !== null ? (
				data.map((item) => <p key={item.id}>{item.name}</p>)
			) : (
				<p>Loading data...</p>
			)} */}
		</div>
	);
};

export default MyComponent;
