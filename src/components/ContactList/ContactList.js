//import PropTypes from 'prop-types';

export function ContactList({contacts}) {
    return (
        <ul>
            {contacts.map((contact) => {
                return (
                    <li key={contact.name}>{contact.name}: {contact.number}</li>
                );
            }

            )}
        </ul>
    );
};

ContactList.propTypes = {
    
};