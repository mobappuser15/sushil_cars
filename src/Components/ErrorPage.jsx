import React from "react";
import ReactLoading from "react-loading";
import "./detail.css";
function ErrorPage() {
	return (
		<div>
			<div ClassName='data'>
				<ReactLoading type='bars' color='#f76d2b' height={300} width={200} />
			</div>
		</div>
	);
}

export default ErrorPage;
