
import React from "react";
export class Relogio extends React.Component {

        constructor(props) {
    super(props);
    this.state = {
        horario: new Date()
    }
    }
    componentDidMount() {
    this.timer = setInterval(() => {
        this.setState({
            horario: new Date()
        });   
        }, 1000);
    }
    componentWillUnmount() {
    clearInterval(this.timer);
    }
    render() {
    return <p>{this.state.horario.toLocaleTimeString()}</p>
    }
}