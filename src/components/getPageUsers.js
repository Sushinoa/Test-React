/**
 * Created by Oksana Sushinskaya on 5/29/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import {getPage} from '../actions/getPage';
import { Link }   from 'react-router-dom';


class getPageUsers extends Component {
  componentWillMount() {
    console.log(this.props.location.pathname)
    this.props.getPage('http://o96478l3.beget.tech/api/v1/users?page=2');
  }
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

    userStore: state.getPage.list

  }

}
function mapDispatchToProps(dispatch) {

  return {
    getPage: bindActionCreators(getPage, dispatch)
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(getPageUsers);

