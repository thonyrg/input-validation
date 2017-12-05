import React, {Component} from 'react';
import './InputText.css';

class InputText extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.state = {
                        isValid: false,
                        isTouched: false
                    };
    }
    handleChange(e) {
        const pattern = new RegExp(this.props.expression);
        let isValid = (pattern.test(e.target.value.trim())) ? true : false;
        this.setState({
                        isValid: isValid
                    });
    }
    handleBlur() {
        this.setState({isTouched: true});
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <label htmlFor="txtUsername">
                        Minimum of 6 characters
                    </label>
                </div>
                <div className="col-md-9 col-lg-10">
                    <input type="text" className="input--text" name="txtUsername" id="txtUsername" onChange={this.handleChange} onBlur={this.handleBlur} placeholder="Username" />
                    {(this.state.isValid && this.state.isTouched) && <span className="glyphicon glyphicon-ok check"></span>}
                    {(!this.state.isValid && this.state.isTouched) && <span className="glyphicon glyphicon-remove error"></span>}
                </div>
            </div>
        )
    }
}

export default InputText;