import React, {Component} from 'react';
import './CarInfo.css';

class CarInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            carInfo: this.props.carInfo
        }
    }
    render() {
        return (
            <div>
                <div className="col-md-12 col-lg-12 car-info">
                    <span className="fa fa-car car-icon" aria-hidden="true" />
                    <div className="car-model">
                        <div>{this.state.carInfo[0].model}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CarInfo;