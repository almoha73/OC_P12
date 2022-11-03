import React from "react";
import calorieIcon from "../assets/calories-icon.svg";
import proteinIcon from "../assets/protein-icon.svg";
import carbsIcon from "../assets/carbs-icon.svg";
import lipidIcon from "../assets/fat-icon.svg";

/**
 * Component that displays the nuttriments called in the dashboard page
 * @component
 * @param {number} calorie
 * @param {number} protein
 * @param {number} carbo
 * @param {number} lipid
 */

const Nutriments = ({ calorie, protein, carbo, lipid }) => {
    function pointReplace(decimal) {
        const number = parseFloat(decimal / 1000).toFixed(3)
        return number
    }
    const numb = pointReplace(calorie)
    const coma = numb.replace(".", ",")

	return (

		<>
			{calorie && (
				<div className="nutriments">
					<img src={calorieIcon} alt="calories" />
					<div className="nutriment-legend">
						<span>{coma} kCal</span>
						<span>Calories</span>
					</div>
				</div>
			)}

			{protein && (
				<div className="nutriments">
					<img src={proteinIcon} alt="protéines" />
					<div className="nutriment-legend">
						<span>{protein} g</span>
						<span>Protéines</span>
					</div>
				</div>
			)}

			{carbo && (
				<div className="nutriments">
					<img src={carbsIcon} alt="glucides" />
					<div className="nutriment-legend">
						<span>{carbo} g</span>
						<span>Glucides</span>
					</div>
				</div>
			)}

			{lipid && (
				<div className="nutriments">
					<img src={lipidIcon} alt="lipides" />
					<div className="nutriment-legend">
						<span>{lipid} g</span>
						<span>Lipides</span>
					</div>
				</div>
			)}
		</>
	);
};

export default Nutriments;
