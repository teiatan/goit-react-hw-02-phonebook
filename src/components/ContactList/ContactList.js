import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array,
        filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };
    
    rendrArray = this.props.contacts;
    
    arrayForRender = () => {
        if(this.props.filter !== "") {
            this.rendrArray = this.props.filter;
        };
    };

    render() {
        this.arrayForRender();
        //console.log(this.rendrArray);
        //const { filter, contacts } = this.props;
        return (
            <ul>

                {this.rendrArray.map((contact) => {
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