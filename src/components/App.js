import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';
import Sum from "./Sum";
import Add from "./Add";


class App extends Component {

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to My First App with React</h2>
                </div>
                <div>
                    <Add/>
                    <Sum/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        inputStore: state.sumNumber

    }

}
export default connect(mapStateToProps)(App);
