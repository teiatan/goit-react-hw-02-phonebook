import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({contacts}) {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <ContactItem key={contact.name}
                    name={contact.name}
                    number={contact.number}/>
                );
            }

            )}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
};