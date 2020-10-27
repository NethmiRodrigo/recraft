import React from "react";

const Success = (props) => {
	return (
		<div
			className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-5"
			role="alert"
		>
			<strong className="font-bold">Success!</strong>
			<div> {props.message} </div>
		</div>
	);
};

export default Success;
