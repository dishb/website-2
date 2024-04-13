import PropTypes from 'prop-types';

function LinkContainer ({children, rows}) {
    return (
        <>
            <br />
            <div className = {`grid grid-rows-${rows} grid-cols-2 w-fit items-center`}>
                {children}
            </div>
        </>
    );
}

LinkContainer.propTypes = {
    children: PropTypes.node,
    rows: PropTypes.string.isRequired
};

export default LinkContainer;
