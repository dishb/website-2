function toggleMode () {
    const themeIcon = document.getElementById('theme-icon');
    const body = document.documentElement;

    if (themeIcon.classList.contains('fa-moon')) {
        themeIcon.classList.remove('fa-moon')
        themeIcon.classList.add('fa-sun')
        body.classList.add('dark')
    } else if (themeIcon.classList.contains('fa-sun')) {
        themeIcon.classList.remove('fa-sun')
        themeIcon.classList.add('fa-moon')
        body.classList.remove('dark')
    }
}

function Theme () {
    return (
        <button className = 'm-5 fixed'>
            <i id = 'theme-icon' onClick = {toggleMode} className = 'fa-solid fa-moon text-2xl text-accent hover:text-hover dark:text-darkaccent dark:hover:text-darkhover' />
        </button>
    );
}

export default Theme;
