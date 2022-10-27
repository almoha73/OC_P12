import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="custom-tooltip-barchart">
				<p className="custom-tooltip-barchart-label">{`${payload[0]?.value} kg`}</p>
				<p className="custom-tooltip-barchart-label">{`${payload[1]?.value} KCal`}</p>
			</div>
		);
	}

	return null;
};

const BarchartActivity = ({ dataActivity }) => {
	console.log(dataActivity);
	return (
		<div className="barchart-activity-chart" style={{maxWidth: "835px", backgroundColor:"#FBFBFB", borderRadius: "5px"}}>
			<ResponsiveContainer  aspect={2.3} >
				<BarChart
					width={835}
					height={320}
					data={dataActivity}
					margin={{
						top: 80,
						right: 48,
						left: 48,
						bottom: 32,
					}}
					barGap={8}
					
				>
					<CartesianGrid vertical={false} strokeDasharray="3 3" />
					<XAxis
						tickLine={false}
						dataKey="dayNum"
						//tick={{ stroke: "9B9EAC" }}
						dy={10}
						stroke= "9B9EAC"
					/>
					
					<YAxis
						yAxisId="left"
						dataKey="calories"
						orientation="left"
						tick={true}
						hide
						tickCount={3}
						
					/>
					<YAxis
						yAxisId="right"
						dataKey="kilogram"
						orientation="right"
						tickLine={false}
						stroke="FFFFF"
						domain={["dataMin - 1", "dataMax"]}
						tickCount={3}
						tick={{ stroke: "9B9EAC" }}
						
					/>
					
					<Tooltip content={<CustomTooltip />} />

					<Legend
						verticalAlign="top"
						align="right"
						iconSize={8}
						iconType={"circle"}
						width={277}
						height={25}
						wrapperStyle={{ top: "10%", right: "5%" }}
						formatter={(value) => {
							return (
								<span
									style={{ color: "#74798C", fontSize: 14, fontWeight: 500 }}
								>
									{value}
								</span>
							);
						}}
					/>

					<Bar
						yAxisId="right"
						dataKey="kilogram"
						name="Poids (kg)"
						fill="#00000"
						barSize={7}
						radius={[5, 5, 0, 0]}
						
					/>
					<Bar
						yAxisId="left"
						dataKey="calories"
						name="Calories brûlées (kCal)"
						fill="#FF0000"
						barSize={7}
						radius={[5, 5, 0, 0]}
					/>
					<text
						className="barchart-activity-title"
						x="5%"
						y="10%"
						width={147}
						height={25}
						textAnchor="start"
						dominantBaseline="middle"
						fill="#20253A"
						style={{ fontWeight: 500 }}
					>
						Activité quotidienne
					</text>
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarchartActivity;
