import React, { useState } from "react";
import Signup from "./Components/Signup";
import Admin from "./Pages/Admin";
import HomePage from "./Components/HomePage";

export default function DashBoard() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [loginType, setLoginType] = useState("");
	const handleSignup = (data) => {
		fetch(
			"https://mobile.Orbitsys.com/OrbitsysSmbApiDemo/Login/GetLoginInfoV2",
			{
				method: "POST",
				headers: {
					ApplicationMode: "ONLINE",
					EnvironmentType: "DEMO",
					BrandCode: "UC",
					CountryCode: "IN",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		)
			.then((response) => response.json())
			.then((response) => {
				if (response.success) {
					setLoggedIn(true);
					setLoginType(data.loginType);
				} else {
					// Handle error response
					console.error(response.error);
				}
			})
			.catch((error) => {
				// Handle fetch error
				console.error(error);
			});
	};

	return <div>{}</div>;
}
