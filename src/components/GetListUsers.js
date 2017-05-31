import React, {Component} from 'react';
import {connect} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'
import { bindActionCreators } from "redux";
import {getUsers } from '../actions/getUsers';
import ListUsers from './ListUsers';

class GetListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {currentPageNumber: '5'};
  }
    componentWillMount() {
      let param = 1;
      let page = getUrlVars()["page"];
      function getUrlVars() {
        let vars = {};
        let parts = window.location.search.replace(/[?&]+([^=&]+)=([^=&]+)/gi, function(m,key,value) {
          vars[key] = value;
        });
        return vars;
      }
      if(page!==undefined){
       //BrowserRouter.push({query : param})
       // window.location.search = '?page=1';
        param = page

      }
        this.props.getAllUsers('http://o96478l3.beget.tech/api/v1/users?page=' + param);
    }
    render() {
   
      //console.log(this.props.headersList);

        return (

            <div >
               <ListUsers/>
              {/*<Pagination className="users-pagination pull-right" bsSize="medium" maxButtons={10} first last next*/}
                          {/*prev boundaryLinks items='1' activePage='1' onSelect={this.changePage}/>*/}
              <div className="headers">

              </div>
              <button className="btn">Назад</button>
              <div className="btn">{this.state.currentPageNumber} из {typeof this.props.headersList['x-pagination-page-count']!=='undefined' ? this.props.headersList['x-pagination-page-count'] : 'Loading...'}</div>
              <button className="btn">Вперед</button>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        userStore: state.getUsers.list,
        headersList:state.getUsers.headers
    }

}
function mapDispatchToProps(dispatch) {

    return {
        getAllUsers: bindActionCreators(getUsers, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(GetListUsers);