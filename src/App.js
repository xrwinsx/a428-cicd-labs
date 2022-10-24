import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Selamat datang di Dicoding Submission</h1>
        </header>
        <p className="App-intro">
          Perubahan ini dilakukan untuk memenuhi saran-saran yang diberikan untuk menyelesaikan kelas Belajar implementasi CI/CD 
        </p>
      </div>
    );
  }
}

export default App;
