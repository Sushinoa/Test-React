import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { onAddNumber } from '../actions/addNumber';

class Add extends Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }
//первым параметром идет название ключа
    handleChange(d, event) {
        //console.log(d);
        this.setState({tit: event.target.value});
    }

    addValue = (number) => {
        this.setState({
            value: number
        });
    }

    render() {
        const { onAddNumber } = this.props;
        return (
            <div >
                <input
                    type="number"
                    value={this.state.value}
                    onChange={this.handleChange.bind(this, '1223')} //в контексте выполнения всегда привязываются праметры
                />
                <button className="btn" onClick={() => onAddNumber(this.state.value)}>Click me</button>
            </div>
        );
    }
}

function mapStateToProps(state) {

    return {

        inputStore: state.sumNumber

    }

}
function mapDispatchToProps(dispatch) {

    return {
        onAddNumber: bindActionCreators(onAddNumber, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Add);