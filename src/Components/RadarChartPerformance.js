import React from "react";

import {
	ResponsiveContainer,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	RadarChart,
} from "recharts";

/**
 * Component that displays the radarChart called in the dashboard page
 * @component
 * @param {Array<Object>} dataPerformance
 *
 */

const RadarChartPerformance = ({ dataPerformance }) => {
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
						tickSize={15} // écarte les ticks
						dy={5}
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
