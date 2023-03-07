import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem';

export function ContactList({contacts, filter}) {
    return (
        <ul>
            <>
                {filter === "" ?
                (contacts.map((contact) => {
                    return (
                        <ContactItem key={contact.name}
                        name={contact.name}
                        number={contact.number}/>
                    );
                }
    
                )) :
                (<p>По пошуку</p>)
                }
            
            </>


            
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.any,
};