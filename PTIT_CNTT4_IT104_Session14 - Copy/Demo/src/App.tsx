import React, { Component } from 'react'
import Controll from './components/Controll';
import UserManager from './components/BTTH/UserManager';
type User = {
  fullName: string
}
export default class App extends Component  <object, User>{
  /* LifeCycle: Class Componenr
      1. mount
      2. update
      3. unmount

      Form
  */
 constructor(props: object){
    super(props);
    this.state = {
      fullName: "Hoa Hong"
    }
 }
 componentDidMount(): void {
     console.log("component Dismount duoc goi");
     //Thường sử dụng để gọi API data đưa vào DOM
 }
  changeName = () => {
    this.setState({fullName: "HELLO"});
 }
 shouldComponentUpdate(nextProps: object, nextState: Readonly<User>, nextContext: any): boolean {
     console.log("ShowldComponent");
     return true;
 }
 componentDidUpdate(prevProps: object, prevState: Readonly<User>, snapshot?: any): void {
     console.log("Component Update");
 }
 componentWillUnmount(): void {
    //Khi mà component bị remove khỏi DOM
 }
  render() {
    console.log("Component Lan dau");
    return (
      <div>
        Class Component
        <p>Full Name: {this.state.fullName}</p>
        <button onClick={this.changeName}>Click</button>
        <Controll></Controll>
        <UserManager></UserManager>
      </div>
    )
  }
}
