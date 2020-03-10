// javascript
var dataset_bis = [100, 200, 100, 100, 150, 200, 100, 100, 200, 900];
var dataset_von = [800, 950, 1300, 900, 1300, 1400, 900, 1100, 1400, 800];
var dataset_color = ["red", "red", "red", "green", "green", "yellow", "blue", "blue", "blue"];
var svgWidth = 900, svgHeight = 200, barPadding = 5, startTime = 800;
var barHeight = svgHeight / dataset_bis.length;
var svg = d3.select('svg')
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var barChart = svg.selectAll("rect")
  .data(dataset_bis)
  .enter()
  .append("rect")
  .style("fill", function (d, i) {
    return dataset_color[i];
  })
  .attr("x", function(d, i) {
    return dataset_von[i]-startTime;
  })
  .attr("width", function(d) {
    return d;
  })
  .attr
  .attr("height", barHeight - barPadding)
  .attr("class", "bar")
  .attr("transform", function (d, i) {
    var translate = [0, barHeight * i];
    return "translate("+ translate +")";
  });
