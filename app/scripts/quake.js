const canvas = d3.select(".canva");

var width = 600;
var height = 600;
const api_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_hour.geojson"
const svg = canvas.append("svg")
        .attr("width", width)
        .attr("height", height);

d3.json(api_url)
  .then(data => {
    //Here we have data
    const circle = svg.selectAll("circle")
            .data(data.features);

    circle.attr("cx",10)
          .attr("cy", 14)
          .attr("r", 10)
          .attr("fill", 'purple');


    circle.enter()
          .append("circle")
          .attr("cx", 14)
          .attr("cy", 14)
          .attr("r",14)
          .attr("fill", "blue");

            console.log(data.features);

  })
