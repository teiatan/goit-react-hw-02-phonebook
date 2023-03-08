import PropTypes from 'prop-types';

export function ContactItem({name, number, onDeleteContact}) {
    return (
        <li>{name}: {number}
            <button type='button' onClick={() => {onDeleteContact(name);}}>Delete</button>
        </li>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.any,
}
