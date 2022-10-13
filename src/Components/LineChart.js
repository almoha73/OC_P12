import React, { useEffect, useRef, useState } from "react";
import * as d3 from "d3";

const LineChart = ({ averageSessions, sessionDay }) => {
  const [data] = useState(averageSessions);
  //const [day] = useState(sessionDay);
  console.log(averageSessions, sessionDay);
  const svgRef = useRef();

  useEffect(() => {
    //setting up svg
    const w = 258;
    const h = 263;
    const svg = d3
      .select(svgRef.current)
      .attr("width", w)
      .attr("height", h)
      .style("background", "#FF0000")
    //   .style("margin-top", 500)
    //   .style("margin-left", 126)
      .attr("radius", 5);
    //setting the scalng
    const xScale = d3
      .scaleLinear()
      .domain([0, data.length - 1])
      .range([0, w]);
    const yScale = d3.scaleLinear().domain([0, h]).range([h, 0]);
    const generateScaledLine = d3
      .line()
      .x((d, i) => xScale(i))
      .y(yScale)
      .curve(d3.curveCardinal);
    //setting up the data for the svg
    svg
      .selectAll(".line")
      .data([data])
      .join("path")
      .attr("d", (d) => generateScaledLine(d))
      .attr("fill", "none")
      .attr("stroke", "black");
  }, [data]);

  return (
    <div className="lineChart">
      <svg ref={svgRef}></svg>
      <p className="lineChart-title">Durée moyenne des sessions</p>
    </div>
  );
};

export default LineChart;
