const fsPromises = require('fs').promises;
const jsdom = require('jsdom')

const pathToPlotly = require.resolve('plotly.js-dist') 

let data = [{
    x: [1999, 2000, 2001, 2002],
    y: [10, 15, 13, 17],
    type: 'scatter'
  }]; 

// let data = [
// {
//     z: [[1, 20, 30], [20, 1, 60], [30, 60, 1]],
//     type: 'heatmap'
// }
// ];

// const fig = { data: [trace, trace2] }
const fig = { data: data }
const opts = { format: 'svg', imageDataOnly: true }

const virtualConsole = new jsdom.VirtualConsole()
virtualConsole.sendTo(console)

const w = new jsdom.JSDOM('', { runScripts: 'dangerously', virtualConsole }).window

// mock a few things that JSDOM doesn't support out-of-the-box
w.HTMLCanvasElement.prototype.getContext = function() { return null; };
w.URL.createObjectURL = function() { return null; };

fsPromises.readFile(pathToPlotly, 'utf-8')
  .then(w.eval)
  .then(() => w.Plotly.toImage(fig, opts))
  .then(img => fsPromises.writeFile('fig.svg', img))
  .catch(console.warn)
