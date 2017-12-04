import React, {Component} from 'react';
import './InputText.css';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
                        isValid: false
                    };
    }
    handleChange(value) {
        const pattern = new RegExp(this.props.expression);
        let isValid = (pattern.test(value.target.value.trim())) ? true : false;
        this.setState({
                        isValid: isValid
                    });
    }
    render() {
        return (
            <div>
                <label htmlFor="txtUsername">Minimum of 6 characters&nbsp;</label>
                <input type="text" name="txtUsername" id="txtUsername" onChange={this.handleChange} placeholder="Username" />
                {this.state.isValid && <span className="glyphicon glyphicon-ok check"></span>}
                {!this.state.isValid && <span className="glyphicon glyphicon-remove error"></span>}
            </div>
        )
    }
}

export default InputText;