import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {getUsers } from '../actions/getUsers';
import ListUsers from './ListUsers';
import {  Pagination } from "react-bootstrap";
import { Link }   from 'react-router-dom';

class GetListUsers extends Component {

    componentWillMount() {
        this.props.getAllUsers('http://o96478l3.beget.tech/api/v1/users?page=1');
    }
    render() {

        return (

            <div >
               <ListUsers/>
              {/*<Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next*/}
                          {/*prev boundaryLinks items='1' activePage='1' onSelect={this.changePage}/>*/}
                <Link to={'/users?' + 'page1'}>Page1</Link>
                <Link to={'/users?'+'page2'}>Page2</Link>
                <Link to={'/users?'+'page3'}>Page3</Link>
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
export default connect(mapStateToProps,mapDispatchToProps)(GetListUsers);