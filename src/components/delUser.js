/**
 * Created by Oksana Sushinskaya on 5/26/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {getUsers } from '../actions/getUsers'

class delUser extends Component {

    render() {
        const { getAllUsers } = this.props;
        return (
            <div >

                <button className="btn" onClick={() => getAllUsers('http://jsonplaceholder.typicode.com/posts',5)}>Delete User</button>
                <div className="list">
                    {this.props.userStore.map((user)=>{
                        return <div key={user.id}>
                            <div>{user.id}</div>
                            <div>{user.name}</div>
                            <div>{user.body}</div>
                        </div>
                    })}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        userStore: state.getUsers.list

    }

}
function mapDispatchToProps(dispatch) {

    return {
        getAllUsers: bindActionCreators(getUsers, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(delUser);