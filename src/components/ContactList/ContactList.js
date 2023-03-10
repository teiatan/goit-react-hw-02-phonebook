import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';

export function ContactList({renderArray, onDeleteContact}) {
    return (
        <ContactListEl>
            {renderArray().map((contact) => {
                    return (
                        <ContactItem 
                            key={contact.name}
                            name={contact.name}
                            number={contact.number}
                            onDeleteContact={onDeleteContact}
                        />
                    );
                })}                
        </ContactListEl>
    );
};

ContactList.propTypes = {
    renderArray: PropTypes.func,
    onDeleteContact: PropTypes.func,
};