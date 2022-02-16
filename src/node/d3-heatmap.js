var fs = require('fs');
var d3 = require('d3');
var JSDOM = require('jsdom').JSDOM; 

const window = (new JSDOM(`<html><head></head><body></body></html>`, { pretendToBeVisual: true })).window;

window.d3 = d3.select(window.document); //get d3 into the dom 

// var svg = window.d3.select('body') 

var size = 10;
dataset = [];
for(var y = 0; y<size; y++){
    var tempData = [size];
    for(var x = 0; x<size; x++){
        tempData[x] = 5;
    };
    dataset.push(tempData);
};

var svg = window.d3.select('body') 
.append('div').attr('class', 'container')
    .append("svg")
    .attr("width", size * 20)
   .attr("height", size * 20)
   .selectAll("rect")
   .data(dataset)
   .enter()
   .append("g")
   .selectAll("rect")
   .data(function (d,i) {return d;})
   .enter()
   .append("rect")
   .attr("x", function(d,i){
            return i*20;
   })
   .attr("y", function(d, i, j){
            return j*20;
   })
   .attr("height", 15)
   .attr("width", 15)
   .attr("fill", "green");

   fs.writeFileSync('test2.svg', window.d3.select('.container').html())
