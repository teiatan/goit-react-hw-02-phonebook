//import PropTypes from 'prop-types';
import { Component } from "react";
import { Label, Input } from "./Filter.styled";

export class Filter extends Component {
    state = {
        filter: "",
    };

    handleInputChange = e => {
        const { name, value } = e.currentTarget;
        this.setState( () => {
            return  {[name]: value};
        }
           
        );
        setTimeout(this.rewriteFilterState);
    };

    rewriteFilterState = () => {
        this.props.filter(this.state.filter); 
    };

    render() {
        return (
            <Label>
                Find contacts by name
                <Input
                    type="text"
                    name="filter"
                    value={this.state.filter}
                    onChange={this.handleInputChange}
                />
            </Label>
        );
    } 
};

Filter.propTypes = {
    
};
