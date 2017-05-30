import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {getOneUser } from '../actions/getOneUser';

class getUser extends Component {
    componentWillMount() {
        console.log(this.props.location.pathname)
        this.props.getOneUser('http://o96478l3.beget.tech/api/v1'+this.props.location.pathname);
    }
    render() {

        return (
            <div >
                <p>{this.props.userStore.id}</p>
                <p>{this.props.userStore.phone_number}</p>
                <p>{this.props.userStore.name}</p>
                <p>{this.props.userStore.email}</p>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        userStore: state.getOneUser.list

    }

}
function mapDispatchToProps(dispatch) {

    return {
        getOneUser: bindActionCreators(getOneUser, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(getUser);