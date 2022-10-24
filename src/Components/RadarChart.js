import React from "react";

import {
	ResponsiveContainer,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	PolarRadiusAxis,
} from "recharts";

const RadarChart = ({dataPerformance}) => {
	
	return (
		<div className="radarChart">
            <ResponsiveContainer width='100%' height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="70%" data={dataPerformance}  margin={{ top: 30, right: 30, bottom: 30, left: 30 }} style={{backgroundColor: "#282D30"}}>
					<PolarGrid />
					<PolarAngleAxis dataKey="type" />
					<PolarRadiusAxis />
					<Radar
                    name='Mike'
						dataKey="value"
						stroke="#8884d8"
						fill="#8884d8"
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
        </div>
			
		
	);
};

export default RadarChart;
