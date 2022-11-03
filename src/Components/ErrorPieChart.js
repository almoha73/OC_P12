import { ResponsiveContainer, PieChart, Pie } from "recharts";

/**
 * Component that displays the ErrorPieChart called in the error page
 * @component
 */

const data = [
	{ name: "Group A", value: 400 },
	{ name: "Group B", value: 300 },
	{ name: "Group C", value: 300 },
	{ name: "Group D", value: 200 },
];

const ErrorPieChart = () => {
	return (
		<div className="error-title">
			<span>4</span>
			<ResponsiveContainer>
				<PieChart>
					<Pie dataKey="value" data={data} fill="#FF0000" />
				</PieChart>
			</ResponsiveContainer>
			<span>4</span>
		</div>
	);
};

export default ErrorPieChart;
