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
        setTimeout(this.giveFilter);
    };

    giveFilter = () => {
        this.props.filter(this.state.filter); 
    }

    render() {
        return (
            <label>
                Find contacts by name
                <input
                    type="text"
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleInputChange}
                />
            </label>
        );
    } 
};

Filter.propTypes = {
    
};
