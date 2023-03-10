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
        });
        this.setState( prevState => {
            this.props.filter(prevState.filter);
        });
    };


    render() {
        return (
            <Label>
                Find contacts by name
                <Input
                    type="text"
                    name="filter"
                    value={this.props.value}
                    onChange={this.props.onChange}
                />
            </Label>
        );
    } 
};

Filter.propTypes = {
    
};
