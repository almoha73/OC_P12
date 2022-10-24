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

const LineChartSessions = ({ dataSessions }) => {
	return (
    <div style={{ width: '100%', height: 300 }}>
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
				{/* <CartesianGrid strokeDasharray="3 3" /> */}
				<XAxis dataKey="dayLetter" dy={10} tickLine={false} axisLine={false} fill="white" tick={{fill: "white"}}/>
				<YAxis
					dataKey="sessionLength"
					domain={["dataMin - 10", "dataMax"]}
					hide
				/>
				<Tooltip />
				<Line
					type="natural"
					dataKey="sessionLength"
					strokeWidth={2}
          dot={false}
					activeDot={{ r: 8, stroke: 'white' }}
          stroke="white"
          
				/>
				<Legend fontWeight={500} verticalAlign="top" align="left" content={<p style={{color: "white", marginBottom: "40px", width: "150px"}}>Durée moyenne des sessions</p>} />
			</LineChart>
		</ResponsiveContainer>
    </div>
		
	);
};

export default LineChartSessions;

// background: linear-gradient(270deg, #FFFFFF 1.19%, rgba(255, 255, 255, 0.403191) 81.27%);
