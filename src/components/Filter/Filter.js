//import PropTypes from 'prop-types';
import { Component } from "react";

export class Filter extends Component {
    state = {
        filter: "",
    };

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState(
            {[name]: value}
        );
        this.props.filter(this.state.filter);  
    };

    render() {
        return (
            <label>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    value={this.state.value}
                    onChange={this.handleInputChange}
                />
            </label>
        );
    } 
};

Filter.propTypes = {
    
};
