import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';

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
    };

    render() {
        return (
            <ContactListEl>

                {this.props.renderArray.map((contact) => {
                        return (
                            <ContactItem key={contact.name}
                            name={contact.name}
                            number={contact.number}
                            onDeleteContact={this.onDeleteContact}/>
                        );
                    })}
                
            </ContactListEl>
        );
    };
};