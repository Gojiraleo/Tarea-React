import React, { Component } from 'react';
import './App.css';
import Banner from './Components/Banner';
import Header from './Components/Header';
import Banner2 from './Components/Banner2';
import Body from './Components/Body';
import Footer from './Components/Footer';

class App extends Component {
  render(){
  return (
    
    <div className='App'>
          <Banner/>
          <Header/>
          <Banner2/>
          <Body/>
          <Footer/>
    </div>
     


  )};
}

export default App;
