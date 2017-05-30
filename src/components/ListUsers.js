import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import {getUsers } from '../actions/getUsers';
import { Link }   from 'react-router-dom';

class ListUsers extends Component {

    render() {

        return (

            <div className="list">
                {this.props.userStore.map((user)=>{

                    return <div key={user.id}>
                        <div>{user.id}</div>
                        <div>{user.phone_number}</div>
                        <div>{user.name}</div>
                        <div>{user.email}</div>

                        <Link to={'/users/'+ user.id}>Просмотр {user.id}</Link>
                    </div>
                })}
            </div>

        );
    }
}

function mapStateToProps(state) {

    return {

        userStore: state.getUsers.list

    }

}

export default connect(mapStateToProps)(ListUsers);