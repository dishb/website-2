import Container from '../components/Container';
import Theme from '../components/Theme';
import Link from '../components/Link';
import Arrow from '../components/Arrow';
import LinkContainer from '../components/LinkContainer';
import Project from '../components/Project';
import Code from '../components/Code';

function Projects () {
    document.title = 'projects';

    return (
        <>
            <Theme />
            <Container path = 'projects'>

                <Project name = 'monstera' link = 'https://pypi.org/project/monstera'>
                    <Code>monstera</Code> is a command line tool that retrieves system information such as the version of
                    Python & pip, as well as their installation locations. It is especially helpful for maintainers of 
                    Python projects, who need information such as the operating system to help reproduce & solve issues.
                </Project>
                <Project name = 'firestarter' link = 'https://pypi.org/project/firestarter'>
                    <Code>firestarter</Code> is a command line tool that helps Python developers quickly create boilerplate
                    for a Python project. firestarter is like the ViteJS of Python. It lets you configure things like a testing
                    framework and linter. You can create code for a blank project, Python package, and more.
                </Project>
                <Project name = 'recycle-it' link = 'https://github.com/dishb/recycle-it'>
                    <Code>recycle-it</Code> was a small project I made with a partner in my first 24 hour hackathon. It was a
                    ton of fun for me! We created a desktop application that used a public API to analyze images (taken with
                    the camera) for waste. The app would tell you whether to trash, compost, or recycle the waste.
                </Project>
                <Project name = '2024-website' link = 'https://dishb.vercel.app'>
                    <Code>2024-website</Code> is the website you are currently on! I created it because I had been inspired by
                    another website design. I wanted to go for a minimalistic, simple look. I also wanted to refresh myself on my
                    web development skills, and what better way to do that than make a project? In this project, I also learned how
                    to host with Vercel.
                </Project>
                <Project name = '2023-website' link = 'https://dishb-2023.vercel.app'>
                    <Code>2023-website</Code> was my second personal website I'd ever made. I made this website for myself to showcase my projects
                    while learning web development with React. I originally used Create-React-App, but then learned about
                    ViteJS and began to use that instead. This website is a simple, one-page, responsive, personal portfolio.
                </Project>

                <LinkContainer rows = '1'>
                    <Link link = '/'>Home</Link> <Link link = '/'><Arrow /></Link>
                </LinkContainer>

            </Container>
        </>
    );
}

export default Projects;
