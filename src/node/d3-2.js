// load the jsdom constructor and d3
const JSDOM = require( 'jsdom' ).JSDOM; 

const d3 = require( 'd3' );

// initialize a new document
// wrapper is a generic HTML document serving as the base (not sure, if it is needed in your case)
const jsdom = new JSDOM( wrapper, { runScripts: "outside-only" } );

// get a reference of the document object
const document = jsdom.window.document;

// start with the visualization
d3.select( document )
  .select( 'svg' )
/* ... */
