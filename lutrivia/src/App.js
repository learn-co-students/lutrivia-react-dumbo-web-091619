import React from 'react';
import './App.css'
import questions from './data.js'
import Container from './Container.js'

export default class App extends React.Component {

  render(){
    return(
       <Container questions={ questions } />
    )
  }

}
