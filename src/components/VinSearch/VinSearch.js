import React, {Component} from 'react';
import './VinSearch.css';

class VinSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            disableSearchButton: true
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleClick() {
        alert('Ok');
    }

    handleChange(e) {
        const pattern = new RegExp('^.{6,}$');
        let disableButton = (pattern.test(e.target.value.trim())) ? false : true;
        this.setState({
            disableSearchButton: disableButton
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3 col-lg-2">
                    <label htmlFor="txtVin">
                        VIN
                    </label>
                </div>
                <div className="col-md-9 col-lg-10">
                    <input 
                        className="input--vin-search" 
                        type="text" 
                        id="txtVin" 
                        placeholder="min 6 characters (8 recommended)" 
                        onChange={this.handleChange} />
                    <button className={(this.state.disableSearchButton) ? 'glyphicon glyphicon-search btnVinSearch disabled' : 'glyphicon glyphicon-search btnVinSearch'} onClick={this.handleClick} disabled={this.state.disableSearchButton}></button>
                </div>
            </div>
        )
    }
}

export default VinSearch;