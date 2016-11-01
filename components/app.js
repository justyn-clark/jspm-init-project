// imports
import { jquery } from 'jquery';
import React, { Component } from 'react';
import Welcome from './Welcome';
import Clicker from './Clicker';
import Timer from './Timer';
import TodoApp from './TodoApp';
import Grid from './Grid';
import './styles.css!';


class App extends Component {
    render () {
        return (
            <div className="text-center">
                <Welcome name="User" age="34" />
                <Clicker />
                <Timer />
                <TodoApp />
                <Grid />
            </div>
        );
    }
}

export default App;




