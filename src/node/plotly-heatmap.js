const fs = require('fs'); 
const JSDOM = require('jsdom').JSDOM; 
 

let outputLocation = 'test2.svg'; 

const window = (new JSDOM(`<html><head></head><body><div id='plotly'></div></body></html>`, { resources: "usable", runScripts: "dangerously" })).window; 

window.HTMLCanvasElement.prototype.getContext = function() { return null; };
window.URL.createObjectURL = function() { return null; }; 

// var document = jsdom("<html><head></head><body><div id='plotly'></div></body></html>");
// var window = document.parentWindow; 

console.log(window.document.querySelector('body').innerHTML); 
var Plotly = require('plotly.js-dist'); 

// var data = [
//     {
//       z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
//       type: 'heatmap'
//     }
// ]; 
  
// plotly.newPlot('plotly', data); 

// fs.writeFileSync(outputLocation, window.d3.select('.container').html()); 
