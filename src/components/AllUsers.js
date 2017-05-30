/**
 * Created by Oksana Sushinskaya on 5/29/2017.
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css';
import GetListUsers from './GetListUsers';


class AllUsers extends Component {
    //params start
    render() {
        //console.log(this.props.testStore)
        return (
            <div>
                <GetListUsers/>
            </div>


        );
    }
}

function mapStateToProps(state) {

    return {

        inputStore: state.getUsers

    }

}
export default connect(mapStateToProps)(AllUsers);
