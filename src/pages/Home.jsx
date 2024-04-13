import Container from '../components/Container';
import Theme from '../components/Theme';
import Link from '../components/Link';
import Arrow from '../components/Arrow';
import LinkContainer from '../components/LinkContainer';

function Home () {
    document.title = 'dishb';

    return (
        <>
            <Theme />
            <Container path = ''>

                <p>
                    Hello, I&apos;m Dishant, a 14-year-old boy living in California. I like to code and play soccer.
                    You can learn more about me and my work through the links below.
                </p>
                
                <LinkContainer rows = '2'>
                    <Link link = '/about'>About</Link> <Link link = '/about'><Arrow /></Link>
                    <Link link = '/projects'>Projects</Link> <Link link = '/projects'><Arrow /></Link>
                </LinkContainer>

            </Container>
        </>
    );
}

export default Home;
