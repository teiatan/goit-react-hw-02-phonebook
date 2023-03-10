import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactListEl } from './ContactList.styled';

export function ContactList({renderArray, onDeleteContact}) {
    return (
        <ContactListEl>
            {renderArray.map((contact) => {
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
    renderArray: PropTypes.arrayOf(PropTypes.shape({ 
        name: PropTypes.string, 
        number: PropTypes.oneOfType([
            PropTypes.string.isRequired,
            PropTypes.number.isRequired,
        ]),
    })), 
    onDeleteContact: PropTypes.func,
};