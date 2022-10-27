import React from "react";

import {
	ResponsiveContainer,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	RadarChart,
} from "recharts";

const RadarChartPerformance = ({ dataPerformance }) => {
	console.log(dataPerformance);
	return (
		<div className="radarChart" style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<RadarChart
					cx="50%"
					cy="50%"
					outerRadius={80}
					data={dataPerformance}
					style={{ backgroundColor: "#282D30", borderRadius: "5px" }}
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="type"
						tick={{ fill: "white", fontSize: "12px" }}
					/>

					<Radar
						dataKey="value"
						stroke="##FF0000"
						fill="#FF0000"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default RadarChartPerformance;
