import React, { Component } from "react";
import axios from 'axios';


import "./App.css";
class App extends React.Component {
  state = {
    advice: " ",
  };

  componentDidMount(){
    this.fetchQuote();
  }

  
  fetchQuote = () => {
    let number = Math.floor(Math.random() * 101); 
    console.log(`https://api.adviceslip.com/advice/${number}`)
    axios.get(`https://api.adviceslip.com/advice/${number}`)
    .then((response)=> {
      var data = JSON.parse(response.data + "}");
      const advice  = data.slip;
      this.setState({advice:advice})
      console.log(advice)
    })
    .catch((error)=>{
        console.log(error)
    }) 
    }
    // const res = await  axios.get(`https://api.adviceslip.com/advice/${number}`);

   
  render() {
    
    return (
    
    <div className="app">
      <div className="card">
        <h1 className="heading">{this.state.advice.advice}</h1>
        <button className="button" onClick={this.fetchQuote}>
          <span> New Advice Please !!</span>
        </button>
      </div>
    </div>
        );
    
  }
}

export default App;
