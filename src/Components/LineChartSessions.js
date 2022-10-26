import React from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	Tooltip,
	ResponsiveContainer,
	Legend,
} from "recharts";

const renderLegend = () => {
	return (
		<p style={{ width: "120px", color: "white" }}>Durée moyenne des sessions</p>
	);
};

const CustomTooltipSessions = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div
				style={{
					color: "black",
					backgroundColor: "white",
					lineHeight: "25px",
					textAlign: "center",
					width: "39px",
					height: "25px",
					fontSize: "8px",
					marginLeft: "7px",
				}}
				className="custom-tooltip-sessions"
			>
				<p className="label">{`${payload[0].value} min`}</p>
			</div>
		);
	}

	return null;
};

const LineChartSessions = ({ dataSessions }) => {
	return (
		<div style={{ minWidth: "258px", height: "263px" }}>
			<ResponsiveContainer>
				<LineChart
					width={300}
					height={300}
					data={dataSessions}
					style={{ backgroundColor: "red" }}
					margin={{
						top: 80,
						right: 30,
						left: 20,
						bottom: 10,
					}}
				>
					
					<XAxis
						dataKey="dayLetter"
						dy={10}
						tickLine={false}
						axisLine={false}
						fill="white"
						tick={{ fill: "white" }}
					/>
					<YAxis
						dataKey="sessionLength"
						domain={["dataMin - 10", "dataMax"]}
						hide
					/>
					<Tooltip
						labelStyle={{ color: "black", fontSize: 8 }}
						contentStyle={{ border: "none", width: "39px", height: "25px" }}
						content={<CustomTooltipSessions />}
					/>
					<Line
						type="natural"
						dataKey="sessionLength"
						strokeWidth={2}
						dot={false}
						activeDot={{ r: 8, stroke: "white" }}
						stroke="white"
					/>
					<Legend
						wrapperStyle={{
							margin: "-3rem 1rem",
						}}
						fontWeight={500}
						verticalAlign="top"
						align="left"
						content={renderLegend}
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default LineChartSessions;

// background: linear-gradient(270deg, #FFFFFF 1.19%, rgba(255, 255, 255, 0.403191) 81.27%);
