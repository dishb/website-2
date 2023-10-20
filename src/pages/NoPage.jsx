import Container from '../components/Container';
import Theme from '../components/Theme';
import Link from '../components/Link';
import Arrow from '../components/Arrow';
import LinkContainer from '../components/LinkContainer';

function NoPage () {
    document.title = '404';

    return (
        <>
            <Theme />
            <Container path = '404'>

                <p>
                    Uh oh, you got a 404 error... Looks like that page doesn&apos;t exist. Why not go back
                    to the home page with the link below?
                </p>
                
                <LinkContainer rows = '1'>
                    <Link link = '/'>Home</Link> <Link link = '/'><Arrow /></Link>
                </LinkContainer>

            </Container>
        </>
    );
}

export default NoPage;