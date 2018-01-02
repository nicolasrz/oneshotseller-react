import React, { Component } from 'react';
import {Card } from 'semantic-ui-react';
import './App.css';
import CardArticle from './components/CardArticle';
import Page from './components/Page';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      articles : {}
    };
  }

  componentWillMount(){
    const url = "http://localhost:8080/article/";
    const that = this;
    fetch(url)
    .then(function(response){
      const data = response.json();
      data.then(function(articles){
        that.setState({articles : articles});
      });
    })
  }

  render() {
    return (
      <div className="App">
        <Page>
            <Card.Group itemsPerRow={4}>
            {
              Object
              .keys(this.state.articles)
              .map(key => 
                <CardArticle key={key} article={this.state.articles[key]} />
                )
            }
            </Card.Group>
        </Page>
        
      </div>

    );
  }
}

export default App;
