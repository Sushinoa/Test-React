import React, { Component } from 'react';
import { connect } from 'react-redux';


class Sum extends Component {

    render() {
        return (
        <div>
            <p className="Sum">Sum: {this.props.inputStore}</p>
        </div>

        );
    }
}

function mapStateToProps(state) {

    return {

        inputStore: state.sumNumber

    }

}
export default connect(mapStateToProps)(Sum);