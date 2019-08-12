import React,{Component} from 'react'
//import { View, Text } from 'react-native';
import './App.css';
import firebase from 'firebase/app';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import ArtWork from './components/art-work';
import Projects from './components/projects';
import AppComponent from './appcomponent';
// import firebaseConfig from './config';

export default class App extends AppComponent{
  
  constructor(props) {
    super(props);
    this.getSessionDatabaseRef().update({
      hostScore: 0,
      guestScore: 0,
      hasGameStarted: false,
      timelefts: 0,
      timeleftm: 0
    });
    this.state = {
      pickapage: 'first',
    }
  }

  // componentDidMount(){
  //   var firebaseConfig = {
  //     apiKey: "AIzaSyBybFMb2UKqxDtBzxsbDYerGlc5xotyC90",
  //     authDomain: "react-portfolio-4cfd9.firebaseapp.com",
  //     databaseURL: "https://react-portfolio-4cfd9.firebaseio.com",
  //     projectId: "react-portfolio-4cfd9",
  //     storageBucket: "",
  //     messagingSenderId: "820052323298",
  //     appId: "1:820052323298:web:1c3a80bf936918d8"
  //   };
  //   // Initialize Firebase
  //   firebase.initializeApp(firebaseConfig);
  //   firebase.database().ref('users/002').set(
  //     {
  //       name:'me',
  //       age:22,
  //     }then(()=)
  //   )
  //   console.log(firebase.database);
  // }

  pickAPage = (page) => {
    this.setState({
      pickapage: page
    });
    console.log(page);
  }  

  render(){
    if(this.state.pickapage === 'first'){
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