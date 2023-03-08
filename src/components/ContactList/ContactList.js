import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array,
        filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };
    
    state = {
        renderArray: this.props.renderArray,
    }

    onDeleteContact = name => {
        this.props.deleteName(name);
        /* const contactsIndex = this.props.contacts.findIndex((element) =>
            element.name === name
          );
        const newContactsArray = this.props.contacts.splice(contactsIndex, 1);
        console.log(newContactsArray);
        const filterIndex = this.props.contacts.findIndex((element) =>
            element.name === name
          );
        const newFilterArray = this.props.filter.splice(filterIndex, 1);
        this.setState({renderArray: this.props.contacts}); */
        
        
    };

    render() {
        return (
            <ul>

                {this.props.renderArray.map((contact) => {
                        return (
                            <ContactItem key={contact.name}
                            name={contact.name}
                            number={contact.number}
                            onDeleteContact={this.onDeleteContact}/>
                        );
                    })}
                
            </ul>
        );
    };
};