import PropTypes from 'prop-types';

function Code ({children}) {
    return (
        <code className = 'font-rmono text-sm px-1 rounded-sm'>
            {children}
        </code>
    );
}

Code.propTypes = {
    children: PropTypes.node.isRequired
};

export default Code;
