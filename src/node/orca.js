const fs = require('fs'); 
const orca = require('orca/src')
 
const app = orca.run({
  component: 'plotly-graph',
//   input: 'path-to-file' || 'glob*' || url || '{data: [], layout: {}}' || [/* array of those */],
  input: '{ "data": [{"y": [1,2,1]}] }', 
//   debug: true
})
 
app.on('after-export', (info) => {
  fs.writeFile('output.png', info.body, (err) => console.warn(err))
// fs.writeFile('output.png', (err) => console.warn(err))
})
