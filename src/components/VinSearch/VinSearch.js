import React, {Component} from 'react';
import './VinSearch.css';

class VinSearch extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            searchfFieldValue: '',
            disableSearchButton: true,
            showResults: false
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleVinClick = this.handleVinClick.bind(this);
        this.vins = [
            {
                id: 'KFDH45LK3EH415641',
                value: 'KFDH45LK3EH415641'
            },
            {
                id: 'SALFA2AC9EH415641',
                value: 'SALFA2AC9EH415641'
            },
            {
                id: 'ZFHDOS13ODH415641',
                value: 'ZFHDOS13ODH415641'
            }
        ];
        this.searchResults = null;
        this.showResults = false;
    }

    handleClick() {
        let arrVins = [];
        for(let i=0; i<this.vins.length;i++) {
            if(this.vins[i].value.toLowerCase().indexOf(this.state.searchfFieldValue.toLowerCase()) > -1) {
                arrVins.push(this.vins[i]);
            }
        }
        if(arrVins.length > 0) {
            this.searchResults = arrVins.map((vin)=>
                <li key={vin.id} onClick={this.handleVinClick}>
                    {vin.value}
                </li>
            );
        } else {
            this.searchResults = <li>No VIN found!</li>
        }
        this.setState({
            showResults: true
        });
    }

    handleVinClick(e) {
        this.setState({
            searchfFieldValue: e.target.innerHTML,
            showResults: false
        });
    }

    handleChange(e) {
        const pattern = new RegExp('^.{6,}$');
        let disableButton = (pattern.test(e.target.value.trim())) ? false : true;
        this.setState({
            searchfFieldValue: e.target.value.trim(),
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
                        value={this.state.searchfFieldValue} 
                        onChange={this.handleChange} />
                    {(this.state.showResults) && <ul className="results--panel">{this.searchResults}</ul>}
                    <button className={(this.state.disableSearchButton) ? 'glyphicon glyphicon-search btnVinSearch disabled' : 'glyphicon glyphicon-search btnVinSearch'} onClick={this.handleClick} disabled={this.state.disableSearchButton}></button>
                </div>
            </div>
        )
    }
}

export default VinSearch;