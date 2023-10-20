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

                <LinkContainer rows = '1'>
                    <Link link = '/'>Home</Link> <Link link = '/'><Arrow /></Link>
                </LinkContainer>

            </Container>
        </>
    );
}

export default Projects;
