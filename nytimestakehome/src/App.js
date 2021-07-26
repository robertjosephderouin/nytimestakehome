import './App.css';
import Articles from './Article'
import React, { Component } from 'react';
import { getArticles } from './service'

class App extends Component {
  constructor() {
    super();
    this.state= {
      articles: [],
      search: "",
    }
  }

  componentDidMount = () => {
    getArticles("science")
    .then(data => {
      this.setState({ articles: data.results })
    })
    .catch(() => {
      this.setState({ error: 'something went wrong' })
    })
  }

  render() {  
    return (
      <main>
        <h1>Today's Top Articles from the New York Times</h1>
        <Articles articles={this.state.articles}/>
      </main>

    )
  }
}

export default App;
