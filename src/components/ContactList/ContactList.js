import PropTypes from 'prop-types';
import { Component } from "react";
import { ContactItem } from 'components/ContactItem/ContactItem';

export class ContactList extends Component {
    static propTypes = {
        contacts: PropTypes.array,
        filter: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    };
    rendrArray = this.props.components;
    arrayForRender = () => {
        if(this.props.filter === "") {
            this.rendrArray = this.props.filter;
        };
    };

    render() {
        this.arrayForRender();
        const { filter, contacts } = this.props;
        return (
            <ul>
                {filter === "" ?
                    (contacts.map((contact) => {
                        return (
                            <ContactItem key={contact.name}
                            name={contact.name}
                            number={contact.number}/>
                        );
                    })) :
                    (filter.map((contact) => {
                        return (
                            <ContactItem key={contact.name}
                            name={contact.name}
                            number={contact.number}/>
                        );
                    }))
                }
            </ul>
        );
    };
};
