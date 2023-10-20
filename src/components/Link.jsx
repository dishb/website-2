import PropTypes from 'prop-types';

function Link ({link, children}) {
    return (
        <a href = {link} className = 'underline underline-offset-4 text-accent hover:text-hover dark:text-darkaccent dark:hover:text-darkhover'>
            {children}
        </a>
    );
}

Link.propTypes = {
    children: PropTypes.node.isRequired,
    link: PropTypes.string.isRequired
};

export default Link;
