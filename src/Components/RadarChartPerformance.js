import React from "react";

import {
	ResponsiveContainer,
	PolarGrid,
	PolarAngleAxis,
	Radar,
	RadarChart,

} from "recharts";

const RadarChartPerformance = ({dataPerformance}) => {
	console.log(dataPerformance);
	return (
		<div className="radarChart" style={{ width: "33%", height: "100%" }}>
            <ResponsiveContainer>
				<RadarChart  cx="50%" cy="50%" outerRadius={100} data={dataPerformance} style={{backgroundColor: "#282D30"}} >
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis dataKey="type" tick={{fill: "white", fontSize: "12px"}}  />
					
					<Radar
                    name='Mike'
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
