### React.js 

An open source framework to build web application [https://reactjs.org](https://reactjs.org){:target="_blank"}. You need to have node.js installed in your system. 

```js 
// create your app. npx allows to run create-react-app without installing
npx create-react-app my-react-app 
// move to my-react project directory 
cd my-react-app 
// start app 
npm start 
``` 

This will start a server in the localhost. A browser should be launched and you can see a spinning react logo. 

Now head over to `src/index.js` that is the starting point of the app. We can simplify this file: 
```js 
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( 
  <h1>Hello React! </h1> 
  <p>I am learning react and liking it. </p>
  ,document.getElementById('root')
);
``` 

##### Creating react component 
React component allows bit more modular approach: 

```js
import React from 'react';
import ReactDOM from 'react-dom';

class Heading extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React! </h1>
        <p>I am learning React and I am liking it.</p>
      </div>
    )
  }
}; 

ReactDOM.render(< Heading />, document.getElementById('root'));
```

**Important:** React component names must start with uppercase letter. 

##### Fetch data from API 
```js 
import React from 'react'; 

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false, 
      planet: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.dev/api/planet/1")
        .then(response => response.json())
        .then(data => {
          this.setState({ 
            loading: false, 
            planet: data
          })
        })
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.planet.name 
    return (
      <div>
        <p>{text}</p>
      </div>
    )
  }
}

export default App;
```
