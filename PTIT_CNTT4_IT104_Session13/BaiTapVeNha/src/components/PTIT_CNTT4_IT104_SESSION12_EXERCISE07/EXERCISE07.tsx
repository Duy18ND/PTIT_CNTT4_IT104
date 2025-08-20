import React, { Component } from 'react'
type AppState = {
    theme: 'light' | 'dark',
    language: 'english' | 'vietnamese',
}

export default class EXERCISE07 extends Component <object, AppState>{
    constructor(props: object){
        super(props);
        this.state = {
            theme: 'light',
            language: "english"
        }
    }
    toggle = () => {
        this.setState(item => ({
            theme: item.theme === 'light' ? 'dark' : 'light',
            language: item.theme === 'light' && item.language === 'vietnamese' ? 'english' : 'vietnamese'
        }));
    }
  render() {
    const {theme, language} = this.state;
    const appStyle = {
      backgroundColor: theme === 'light' ? '#ffffff' : '#333333',
      color: theme === 'light' ? '#000000' : '#ffffff',
      width: '100vh',
      height: '100vh'
    };
    return (
      <div style= {appStyle}>
        <h1>Nền: {theme} <br />
            Ngôn ngữ: {language}   
        </h1>
        <button onClick={this.toggle}>Click</button>
      </div>
    )
  }
}
