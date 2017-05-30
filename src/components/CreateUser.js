/**
 * Created by Oksana Sushinskaya on 5/26/2017.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { postUser } from '../actions/postUser'

class CreateUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:''
        };
       // this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(event) {
        this.setState({
            title: event.target.value
        });
    }
    updateBody(event) {
        this.setState({
            body: event.target.value
        });
    }
    // addValue = (title, body) => {
    //     this.setState({
    //         title: title,
    //         body: body
    //     });
    // };

    // handleSubmit(e) {
    //     e.preventDefault();
    //
    //     const formData = {};
    //     for (const field in this.refs) {
    //         formData[field] = this.refs[field].value;
    //     }
    //      this.props.postUser('http://jsonplaceholder.typicode.com/posts',formData);
    //
    //     //console.log('data', formData);
    //    // console.log(e.target);
    //    // console.log(e);
    // }
    render() {
        const { postUser} = this.props;
      //  console.log(this.state)
        return (
            <div>

                <input
                    placeholder="title"
                    type='text'
                    value={this.state.title}
                    onChange={this.updateTitle.bind(this)}
                />

                <input
                    placeholder="body"
                    type='text'
                    value={this.state.body}
                    onChange={this.updateBody.bind(this)}
                />
                <button className="btn" onClick={() => postUser('http://jsonplaceholder.typicode.com/posts',this.state)}>Create User</button>
                {/*<form onSubmit={this.handleSubmit}>*/}
                    {/*<input ref="title" placeholder="title"  type='tel' name="title"/>*/}
                    {/*<input ref="body" placeholder="body"  type='tel' name="body"/>*/}
                    {/*<input type="submit" value="Submit"/>*/}
                {/*</form>*/}
                <div>
                    {this.props.userStore.id}
                    {this.props.userStore.title}
                    {this.props.userStore.body}
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {

    return {

        userStore: state.postUser.list

    }

}
function mapDispatchToProps(dispatch) {

    return {
        postUser: bindActionCreators(postUser, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(CreateUser);