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

const BarchartActivity = ({dataActivity}) => {

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="custom-tooltip-label">{`${payload[0]?.value} kg`}</p>
					<p className="custom-tooltip-label">{`${payload[1]?.value} KCal`}</p>
				</div>
			);
		}
	
		return null;
	};

	return (
		<div className="barchart-activity-chart">
			<ResponsiveContainer width='100%' aspect={2.3}>
				<BarChart
					width={835}
					height={320}
					data={dataActivity}
					margin={{
						top: 80,
						right: 50,
						left: 45,
						bottom: 20,
					}}
					barGap={8}
					barCategoryGap={54}
				>
					<XAxis tickLine={false} dataKey="dayNum" tick={{ stroke: "#9B9EAC" }}  dy={10}/>
					<CartesianGrid vertical="" strokeDasharray="3 3" />
					<YAxis yAxisId="left" dataKey="calories" orientation="left" tick={true} hide tickCount={3}/>
					<YAxis
						yAxisId="right"
						dataKey="kilogram"
						orientation="right"
						stroke="#FFFFF"
						domain={["dataMin - 1", "dataMax"]}
						tickCount={3}
						
					/>
					<Tooltip content={<CustomTooltip />} />
					<Legend
						verticalAlign="top"
						align="right"
						iconSize={8}
						iconType={"circle"}
						width={277}
						height={25}
						wrapperStyle={{ top: 35, right: 26 }}
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
					/>
					<Bar
						yAxisId="left"
						dataKey="calories"
						name="Calories brûlées (kCal)"
						fill="#FF0000"
						barSize={7}
					/>
					<text
						className="barchart-activity-title"
						x="5%"
						y="15%"
						width={147}
						height={48}
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
