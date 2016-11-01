import React from 'react';
import './styles.css!';
import './foundation.min.css!';

var colors = ['red', 'white', 'blue']

class Clicker extends React.Component {
    constructor() {
        // Always call super() as the first thing you do in an extended constructor!
        super()
        // In ES6, initial state is set as a property of the class
        this.state = {
            colorIndex: 0
        }
    }
    handleClick(e) {
        e.preventDefault()
        let nextColor = this.state.colorIndex + 1
        let setColor = nextColor > colors.length - 1 ? 0 : nextColor
        this.setState({
            colorIndex: setColor
        })
    }
    render() {
        let color = colors[this.state.colorIndex]
        return <h2><a href="#" style={{color: color}} onClick={this.handleClick.bind(this)}>
            Click {this.props.status}!
        </a></h2>
    }
}
export default Clicker