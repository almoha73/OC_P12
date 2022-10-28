import React from "react";
import { ResponsiveContainer, Pie, PieChart } from "recharts";

const OneLevelPieChart = ({ dataMainData }) => {
	return (
		<div style={{ minWidth: "258px", height: "253px", backgroundColor: "#FBFBFB" }}>
			<ResponsiveContainer>
				<PieChart width={50} height={50} backgroundColor="white">
					

					<Pie
						data={dataMainData}
						dataKey="scorePourcent"
						cx="50%"
						cy="50%"
						startAngle={170}
						endAngle={170 - (dataMainData[0].scorePourcent * 360) / 100}
						innerRadius={80}
						outerRadius={90}
						fill="#FF0000"
						cornerRadius={5}
					></Pie>
					<Pie
						data={dataMainData}
						dataKey={"scorePourcent"}
						cx="50%"
						cy="50%"
						startAngle={170}
						endAngle={-190}
						innerRadius={0}
						outerRadius={80}
						fill="white"
						
					></Pie>
					<text x={20} y={50}>
						Score
					</text>
					<text x="40%" y="50%" fontSize="24px" fontWeight={900}>
						{`${dataMainData[0].scorePourcent} %`}{" "}
						<tspan x="40%" y="50%" dy={20} fontWeight={500} fontSize="16px">
							de votre
						</tspan>
						<tspan x="40%" y="50%" dy={40} fontSize="16px" fontWeight={500}>
							objectif
						</tspan>
					</text>
				</PieChart>
			</ResponsiveContainer>
		</div>
	);
};

export default OneLevelPieChart;
