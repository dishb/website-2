import Container from '../components/Container';
import Theme from '../components/Theme';
import Code from '../components/Code';
import Link from '../components/Link';
import Arrow from '../components/Arrow';
import LinkContainer from '../components/LinkContainer';

function About () {
    document.title = 'about';

    return (
        <>
            <Theme />
            <Container path = 'about'>

                <p>
                    Hello, I&apos;m Dishant, a 14-year-old boy living in California. I like to code and play soccer.
                    <br /> <br />
                    I&apos;ve been coding for around 3 years now, but I&apos;ve only really started diving into web development
                    recently. Prior to that, I worked with Python and did all sorts of things. I started out by learning the syntax
                    and language itself. Then, I transitioned to learning game development with the <Code>pygame</Code> library.
                    Next, I created GUIs and Python applications with <Code>customtkinter</Code> and <Code>tkinter</Code>. Now,
                    I&apos;m working on tools (such as CLIs) that help developers. I&apos;m also contributing to the open source
                    community on GitHub.
                    <br /> <br />
                    As for my soccer journey, it started at a very young age (around 6 or 7 I believe). Ever since then, I&apos;ve loved
                    and played the sport for my local club. Now that I&apos;m in highschool, I look forward to joining my the team. I
                    will say though, I&apos; not the best player and really play for fun. My main position is centerback, but I can play
                    anywhere in the defensive line.
                    <br /> <br />
                    If you&apos;re interested in what I&apos;m working on, you can check out my projects using the link below. Or, head back to the
                    home page.
                </p>
                
                <LinkContainer rows = '2'>
                    <Link link = '/projects'>Projects</Link> <Link link = '/projects'><Arrow /></Link>
                    <Link link = '/'>Home</Link> <Link link = '/'><Arrow /></Link>
                </LinkContainer>

            </Container>
        </>
    );
}

export default About;
