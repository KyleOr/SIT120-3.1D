<template>
  <div>
    <div class="title-section" style="margin-top: 200px;">
      <h1>Relationship Between Household Estimate and Combined Figures of Food Waste</h1>
      <p>This scatterplot visualizes the connection between two crucial metrics <br> 
        in the context of food waste. The x-axis represents the "Combined Figures (kg/capita/year)," <br>
        which quantifies the total food waste per capita, while the y-axis measures the "Household Estimate (kg/capita/year)," <br>
        focusing on food waste at the household level.
      </p>
    </div>

    <div class="filter-controls">
      <button id="reset-button">Reset Chart</button>
    </div>
  </div>


  <div class="visualization-container">
    <!-- Scatter Plot -->
    <div id="scatter-plot-container" class="chart-container"></div>
    <div id="scatter-tooltip"></div>
  </div>
</template>



<script>
/* global d3 */
export default {
  data() {
    return {
      data: [], 
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      d3.csv('/food_waste_data.csv', (error, data) => {
        if (error) {
          console.error('Error loading CSV:', error);
          return;
        }
        this.data = data; 
        this.createScatterPlot();
      });
    },

    createScatterPlot() {
      const svg = d3.select('#scatter-plot-container');


      // Define the width and height of the chart
      const width = svg.node().getBoundingClientRect().width;
      const height = svg.node().getBoundingClientRect().height; 


      // Define margins for better visualization
      const margin = { top: 20, right: 20, bottom: 50, left: 50 };

      // Create scales for the x-axis and y-axis
      const xScale = d3
        .scaleLinear()
        .domain([0, d3.max(this.data, d => +d['combined figures (kg/capita/year)'])])
        .nice()
        .range([margin.left, width - margin.right]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(this.data, d => +d['Household estimate (kg/capita/year)'])])
        .nice()
        .range([height - margin.bottom, margin.top]);

      // Create the SVG element for the chart
      const chart = svg
        .append('svg')
        .attr('width', width)
        .attr('height', height);

      chart
        .append('text')
        .attr('x', width / 2)
        .attr('y', margin.top)
        .attr('text-anchor', 'middle')
        .attr('class', 'chart-title')
        .text('Scatter Plot');

      // Create a clip path for the chart area
      chart
        .append('clipPath')
        .attr('id', 'scatter-clip')
        .append('rect')
        .attr('width', width - margin.left - margin.right)
        .attr('height', height - margin.top - margin.bottom);

      // Create a group for the scatter plot points
      const scatter = chart
        .append('g')
        .attr('class', 'scatter')
        .attr('transform', `translate(${margin.left}, ${margin.top})`)
        .attr('clip-path', 'url(#scatter-clip)');

      // Create circles for each data point
      scatter
        .selectAll('circle')
        .data(this.data)
        .enter()
        .append('circle')
        .attr('cx', d => xScale(+d['combined figures (kg/capita/year)']))
        .attr('cy', d => yScale(+d['Household estimate (kg/capita/year)']))
        .attr('r', 5) 
        .attr('fill', 'steelblue') 
        .style('opacity', 0.5)
        .on('mouseover', handleMouseOver)
        .on('mouseout', handleMouseOut);

      // Function to handle mouseover event
      function handleMouseOver(event, d) {
        // Show a tooltip or highlight the circle on mouseover
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', 8) // Increase the radius on mouseover
          .style('fill', 'orange'); // Change the fill color on mouseover

        tooltip
          .html(`Country: ${d.Country}<br>Combined Figures: ${d['combined figures (kg/capita/year)']}<br>Household Estimate: ${d['Household estimate (kg/capita/year)']}`)
          .style('left', (event.pageX + 10) + 'px')
          .style('top', (event.pageY - 10) + 'px')
          .style('opacity', 0.9);
      }

      // Function to handle mouseout event
      function handleMouseOut() {
        // Reset the circle appearance on mouseout
        d3.select(this)
          .transition()
          .duration(200)
          .attr('r', 5) // Reset the radius
          .style('fill', 'steelblue'); // Reset the fill color

        // Hide the tooltip on mouseout
        tooltip.style('opacity', 0);
      }

      // Create a tooltip div
      const tooltip = d3.select('#scatter-plot-container')
        .append('div')
        .attr('class', 'tooltip')
        .style('opacity', 0);

      // Create x-axis
      chart
        .append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height - margin.bottom})`)
        .call(d3.axisBottom(xScale));

      // Create y-axis
      chart
        .append('g')
        .attr('class', 'y-axis')
        .attr('transform', `translate(${margin.left}, 0)`)
        .call(d3.axisLeft(yScale));

      // Add the brush and zoom functionality
      const brush = d3.brushX() // only x axis
        .extent([[0, 0], [width - margin.left - margin.right, height - margin.top - margin.bottom]])
        .on('end', handleBrush);

      // Create a group for the brush
      chart
        .append('g')
        .attr('class', 'brush')
        .call(brush)
        .call(brush.move, null); 

      // Function to handle brush event
      function handleBrush() {
        const selectedExtent = d3.event.selection;
        // Check if selectedExtent is not null before updating the chart
        if (selectedExtent) {
          const x0 = xScale.invert(selectedExtent[0]);
          const x1 = xScale.invert(selectedExtent[1]);

          xScale.domain([x0, x1]);

          // Update the circles and x-axis based on the new domain
          scatter.selectAll('circle')
            .attr('cx', d => xScale(+d['combined figures (kg/capita/year)']));

          chart.select('.x-axis').call(d3.axisBottom(xScale));
         }
        }
        // Function to handle the reset button click
        const handleReset = () => {
          // Reset the xScale to its original domain
          xScale.domain([0, d3.max(this.data, d => +d['combined figures (kg/capita/year)'])]);

          // Update the circles and x-axis
          scatter.selectAll('circle')
            .attr('cx', d => xScale(+d['combined figures (kg/capita/year)']));

          chart.select('.x-axis').call(d3.axisBottom(xScale));

          // Clear the brush selection
          chart.select('.brush').call(brush.move, null);
        }

        // Select the reset button element
        const resetButton = document.getElementById('reset-button');

        // Add a click event listener to the button
        resetButton.addEventListener('click', handleReset);

    },

  },
};

</script>

<style scoped>

.filter-controls {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; 
  height: 200px; 
}

#reset-button {
  
  background-color: #ffffff;
  color: #000000;
  border: 1px solid #000000; 
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

#reset-button:hover {
  background-color: #95c8ff;
  transform: scale(1.05);
}


input[type="checkbox"] {
  margin-right: 5px;
}

.visualization-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.chart-container {
  width: 90%;
  max-width: 800px; 
  height: 500px; 
  border: 1px solid #ccc;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  margin: 0 auto; 
}

.x-axis text,
.y-axis text {
  font-size: 12px;
  fill: #333;
}

.chart-title {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

#scatter-tooltip {
  position: absolute;
  background-color: #f9f9f9;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 3px;
  pointer-events: none;
  opacity: 0;
  font-size: 12px;
}
</style>