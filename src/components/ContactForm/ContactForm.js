import PropTypes from 'prop-types';
import { Component } from "react";

export class ContactForm extends Component {

    static defaultProps = {
        initialContacts: [],
        initialFilter: '',
    };
    
    static propTypes = {
        initialContacts: PropTypes.array,
        initialFilter: PropTypes.string,
    };

    state = {
        name: "",
        number: "",
    };

    handleInputChange = e => {
      this.setState(
        {[e.currentTarget.name]: e.currentTarget.value}
      );  
    };

    render() {
        return (
            <form>
                <label>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                    />
                </label>
               
                <label>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                    />
                </label>  
    
                <button type="submit">Add contact</button>
            </form>
        );
    };
};