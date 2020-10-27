import React from "react";

const Error = () => {
	return (
		<div
			className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5"
			role="alert"
		>
			<strong className="font-bold">Holy smokes!</strong>
			<div className="block sm:inline"> Something went wrong </div>
		</div>
	);
};

export default Error;
