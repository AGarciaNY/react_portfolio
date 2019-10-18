import React,{Component} from 'react'
//import { View, Text } from 'react-native';
import './App.css';
import firebase from 'firebase/app';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import ArtWork from './components/art-work';
import Projects from './components/projects';
// import firebaseConfig from './config';

export default class App extends Component{
  
  constructor() {
    super();
    this.state = {
      pickapage: 'test',
    }
  }

  pickAPage = (page) => {
    this.setState({
      pickapage: page
    });
    console.log(page);
  }  

  render(){

    if(this.state.pickapage === 'test'){
      return (
      <div id="body">
        <Nav changepage={(page)=> this.pickAPage(page)}/>
        <Home />
        <Footer />
      </div>
      );
    }

    if(this.state.pickapage === 'home'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Home />
          <Footer />
        </div>
      )
    }

    if(this.state.pickapage === 'artwork'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <ArtWork />
          <Footer />
        </div>
      )
    }

    if(this.state.pickapage === 'projects'){
      return (
        <div id="body">
          <Nav changepage={(page)=> this.pickAPage(page)}/>
          <Projects />
          <Footer />
        </div>
      )
    }
  }
}