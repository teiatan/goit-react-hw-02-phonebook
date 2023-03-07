import PropTypes from 'prop-types';

export function ContactItem({name, number}) {
    return (
        <li>{name}: {number}</li>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string,
    number: PropTypes.any,
}
