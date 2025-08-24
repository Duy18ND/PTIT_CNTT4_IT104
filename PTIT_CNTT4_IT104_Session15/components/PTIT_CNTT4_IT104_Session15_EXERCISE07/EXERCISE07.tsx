import React, { Component } from 'react';

type ClockState = {
    time: string;
};

export default class Clock extends Component<object, ClockState> {
    timerId?: number; 

    constructor(props: object) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString()
        };
    }

    componentDidMount() {
        this.timerId = window.setInterval(() => {
            this.setState({ time: new Date().toLocaleTimeString() });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timerId) {
            clearInterval(this.timerId);
        }
    }

    render() {
        return (
            <h2>
                Thời gian hiện tại: {this.state.time}
            </h2>
        );
    }
}
