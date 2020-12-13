### React.js 

An open source framework to build web application [https://reactjs.org](https://reactjs.org){:target="_blank"}. You need to have node.js installed in your system. Alternatively, you can run your development environment in Docker: 
```sh
docker run -ti -p 127.0.0.1:3000:3000 -v ${PWD}:/home node:lts-buster-slim bash
```

```js 
// create your app. npx allows to run create-react-app without installing
npx create-react-app my-react-app 
// move to my-react project directory 
cd my-react-app 
// start app 
npm start 
``` 

This will start a server in the localhost. A browser should be launched and you can see a spinning react logo. 

We will clear all files in `public` and `src` directory, except `index.html` and `index.js`, respectively. Open `src/index.js` that is the starting point of the app. We can simplify this file: 
```js 
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render( 
  <div>
    <h1>Hello React! </h1> 
    <p>I am learning react and liking it. </p>
  </div>
  ,document.getElementById('root')
);
``` 

If we have more than one html element, we have to put everything inside a single `div`. 

##### Creating react component 
React component allows bit more modular approach: 

```js
import React from 'react';
import ReactDOM from 'react-dom';

function Heading() {
  return (
    <div>
      <h1>Hello React! </h1>
      <p>I am learning React and I am liking it.</p>
    </div>
  )
}; 

ReactDOM.render(< Heading />, document.getElementById('root'));
```

Alternative where we can use extension of `React.Component`: 

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

Now let's separate our App component in a separate file. Our `index.js` entry becomes:
```js
import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.render(< App />, document.getElementById('root'));
```

We use `App.jsx` in the `src` directory: 
```js
import React from 'react';

function App() {
    return(
      <>
        <h1>Hello React! </h1>
        <p>I am learning React and I am liking it.</p>
      </>
    )
  }

export default App
```

Now let's display some data. You can get the data from `https://api.github.com/users/<username>`. 

```js
import React from 'react';

const user = {
    "login": "pranabdas",
    "id": 31024886,
    "node_id": "MDQ6VXNlcjMxMDI0ODg2",
    "avatar_url": "https://avatars2.githubusercontent.com/u/31024886?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/pranabdas",
    "html_url": "https://github.com/pranabdas",
    "followers_url": "https://api.github.com/users/pranabdas/followers",
    "following_url": "https://api.github.com/users/pranabdas/following{/other_user}",
    "gists_url": "https://api.github.com/users/pranabdas/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/pranabdas/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/pranabdas/subscriptions",
    "organizations_url": "https://api.github.com/users/pranabdas/orgs",
    "repos_url": "https://api.github.com/users/pranabdas/repos",
    "events_url": "https://api.github.com/users/pranabdas/events{/privacy}",
    "received_events_url": "https://api.github.com/users/pranabdas/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Pranab Das",
    "company": null,
    "blog": "https://pranabdas.github.io",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": "pranab_das",
    "public_repos": 24,
    "public_gists": 1,
    "followers": 0,
    "following": 0,
    "created_at": "2017-08-15T02:36:34Z",
    "updated_at": "2020-12-02T09:35:04Z"
}

function App() {
    return(
    <>
        <img src={user.avatar_url} alt={user.name} />
        <h3>Hello {user.name}!</h3>
        <p>Twitter: <a href={`https://twitter.com/${user.twitter_username}`}>@{user.twitter_username}</a></p>
      </>
    )
  }

export default App

```

Let's create an app to add two numbers. Here we will learn how to accept user inputs. We just work in our `App.jsx` file from previous example. 
```js
import React, { useState } from 'react';

function App() {
    const [input1, setInput1] = useState(0);
    const [input2, setInput2] = useState(0);
    const [total, setTotal] = useState(input1 + input2);

    function add() {
        setTotal(input1 + input2)
    }

    return(
    <>
        <h3>Adding two numbers</h3>
        <input 
            type="number"
            value={input1}
            onChange={e => setInput1(+e.target.value)}
            placeholder="0"
        />
        <input 
            type="number"
            value={input2}
            onChange={e => setInput2(+e.target.value)}
            placeholder="0"
        />
        <button onClick={add}>Add</button>
        <p>{total}</p>
      </>
    )
  }

export default App
```

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
    fetch("https://swapi.dev/api/planets/2/")
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

Finally, let's combine all that we have learned. We will accept an user input of their Github username, and later show them some info based their Github profile data. 
