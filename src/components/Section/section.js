import PropTypes from 'prop-types';
import clsx from 'clsx';
import css from './section.module.css';

export function Section({name, title, children}) {
    return (
        <section className={clsx(name, css.section)}>
            {title && (<h2 className={css.title}>{title}</h2>)}
            {children}
        </section>
    );
};

Section.propTypes = {
    name: PropTypes.string, 
    title: PropTypes.string, 
    children: PropTypes.node,
};