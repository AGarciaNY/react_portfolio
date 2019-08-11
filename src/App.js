import React,{Component} from 'react'
import './App.css';
// import firebase from 'firebase/app';
import Nav from './components/nav';
import Footer from './components/footer';
import Home from './components/home';
import ArtWork from './components/art-work';
import  Projects from './components/projects';

export default class App extends Component{
  // componentDidMount(){
  //   // Your web app's Firebase configuration
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

  //   firebase.database().ref('users/001').set(
  //     {
  //       name:'this testing',
  //       age: 21,
  //     }
  //   ).then(()=>{
  //     console.log('Inserted !');
  //   }).catch((error) => {
  //     console.log(error)
  //   });
  //   firebase.database().ref();
  // }
  constructor() {
    super();
    this.state = {
      pickapage: 'default',
    }
  }

  pickAPage = (page) => {
  this.setState({
    pickapage: page
  });
  console.log(page);
  }  

  render(){
    if(this.state.pickapage === 'default'){
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