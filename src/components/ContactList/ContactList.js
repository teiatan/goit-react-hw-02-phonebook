import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array,
        filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };
    
    state = {
        renderArray: [],
    }
    
    chooseArrayForRender = () => {
        let renderArray = this.props.contacts;
        if(this.props.filter !== "") {
            renderArray = this.props.filter;
        };
        return renderArray;
    };

    onDeleteContact = name => {
        const index = this.props.contacts.findIndex((element) =>
            element.name === name
          );
        this.chooseArrayForRender().splice(index, 1);
        this.setState({renderArray: this.props.contacts})
        
    };

    render() {
        return (
            <ul>

                {this.chooseArrayForRender().map((contact) => {
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