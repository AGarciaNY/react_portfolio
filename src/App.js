import React from 'react';

import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import PortfolioComponent from './portfoliocomponent'
import './App.css';

export default class App extends PortfolioComponent{

  constructor(props) {
    super(props);
    this.getSessionDatabaseRef().update({
      homepage: false,
      artpage: false,
      projpage: false,
    });
  }

  onSessionDataChanged(data) {
    this.setState({
      homepgae: data.homepage,
      artpage: data.artpage,
      projpage: data.projpage,
    });
  }

  render(){
    return (
    <div id="body">
      <Nav />
      <Home 
      sethomepage={this.state.homepage}
      setartpage={this.state.artpage}
      setprojpage={this.state.projpage}
      />
      <Footer />
    </div>
    );
  }
}

