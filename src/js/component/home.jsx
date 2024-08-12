import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-regular-svg-icons';
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({seconds}) => {


	let digitos = String(seconds).split("").reverse()
	console.log(digitos[3])
	return (
	<div>
		<div className="container bg-dark px-5 py-3">
			<div className="d-flex row gap-2">
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1  style={{fontSize:"6rem"}}><FontAwesomeIcon icon={faClock} /></h1>
				</div>
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1 style={{fontSize:"6rem"}}>{digitos[5] === undefined ? "0" : digitos[5]}</h1>
				</div>
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1 style={{fontSize:"6rem"}}>{digitos[4] === undefined ? "0" : digitos[4]}</h1>
				</div>
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1 style={{fontSize:"6rem"}}>{digitos[3] === undefined ? "0" : digitos[3]}</h1>
				</div>
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1 style={{fontSize:"6rem"}}>{digitos[2] === undefined ? "0" : digitos[2]}</h1>
				</div>
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1 style={{fontSize:"6rem"}}>{digitos[1] === undefined ? "0" : digitos[1]}</h1>
				</div>
				<div className="col text-white border border-light d-flex justify-content-center align-items-center rounded-3">
					<h1 style={{fontSize:"6rem"}}>{digitos[0] === undefined ? "0" : digitos[0]}</h1>
				</div>
				
			</div>
		</div>
	</div>
		
		
	);
};

export default Home;
