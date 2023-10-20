import PropTypes from 'prop-types';

function Project ({children, name, link}) {
    const sourceLink = `https://github.com/dishb/${name}`;

    return (
        <div className = 'flex mb-5 rounded-md'>
            <div className = 'm-5 w-full'>
                <h1 className = 'underline underline-offset-4 inline-block'>{name}</h1>

                <div className = 'float-right'>
                    <a rel = 'noreferrer' target = '_blank' href = {sourceLink}
                    className = 'mx-1 fa-brands fa-github text-accent hover:text-hover dark:text-darkaccent dark:hover:text-darkhover' />
                    <a rel = 'noreferrer' target = '_blank' href = {link}
                    className = 'mx-1 fa-solid fa-solid fa-arrow-up-right-from-square text-accent hover:text-hover dark:text-darkaccent dark:hover:text-darkhover' />
                </div>

                <p className = 'mt-2'>{children}</p>
            </div>
        </div>
    );
}

Project.propTypes = {
    children: PropTypes.node,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
};

export default Project;
