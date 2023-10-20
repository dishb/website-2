import PropTypes from 'prop-types';

import Spacer from './Spacer';
import Path from './Path';

function Container ({path, children}) {
    return (
        <div className = 'flex flex-col min-h-screen items-center justify-center mx-5'>
            <Spacer />
            <div className = 'flex flex-col flex-grow max-w-xl w-full'>
                <Path path = {path} />
                {children}
            </div>
            <Spacer />
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string.isRequired
};

export default Container;
