import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array,
        filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };
    
    
    
    chooseArrayForRender = () => {
        let renderArray = this.props.contacts;
        if(this.props.filter !== "") {
            renderArray = this.props.filter;
        };
        return renderArray;
    };

    render() {

        return (
            <ul>

                {this.chooseArrayForRender().map((contact) => {
                        return (
                            <ContactItem key={contact.name}
                            name={contact.name}
                            number={contact.number}/>
                        );
                    })}
                
            </ul>
        );
    };
};