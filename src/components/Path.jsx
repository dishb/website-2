import PropTypes from 'prop-types';

function Path (props) {
    const path = `dishb / ${props.path}`

    return (
        <h1 className = 'font-rmono text-sm underline underline-offset-4 decoration-[1.5px] mb-5'>{path}</h1>
    );
}

Path.propTypes = {
    path: PropTypes.string.isRequired,
};

export default Path;
