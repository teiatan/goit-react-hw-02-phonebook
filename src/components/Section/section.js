import PropTypes from 'prop-types';
import { SectionEl, Title } from './section.styled';

export function Section({name, title, children}) {
    return (
        <SectionEl>
            {title && (<Title>{title}</Title>)}
            {children}
        </SectionEl>
    );
};

Section.propTypes = {
    name: PropTypes.string, 
    title: PropTypes.string, 
    children: PropTypes.node,
};