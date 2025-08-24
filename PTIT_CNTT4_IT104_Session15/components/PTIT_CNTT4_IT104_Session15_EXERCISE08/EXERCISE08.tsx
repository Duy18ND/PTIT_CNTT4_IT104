import React, { Component } from "react";

type State = {
  count: number;
};

export default class Counter extends Component<object, State> {
  private timerId?: ReturnType<typeof setInterval>;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1)
      }));

      if(this.state.count === 10){
        this.setState({count: 0});
      }
    }, 1000);
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearInterval(this.timerId);
    }
  }

  render() {
    return (
      <div>
        <h1>Counter: {this.state.count}</h1>
      </div>
    );
  }
}
