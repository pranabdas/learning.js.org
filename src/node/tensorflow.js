const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node'); 

const x = tf.tensor([1, 2, 3, 4]);
const y = x.square();  // equivalent to tf.square(x)
y.print();
