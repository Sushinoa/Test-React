/**
 * Created by Oksana Sushinskaya on 5/25/2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../App.css';


class Users extends Component {

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Welcome to My First App with React</h2>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        inputStore: state.getUsers

    }

}
export default connect(mapStateToProps)(Users);
