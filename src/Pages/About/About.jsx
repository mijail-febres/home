import AboutContainer from "./AboutStyles";

const About = () => {
    const bio = 'I am Full Stack software developer and a former scientist. '
    return (
        <AboutContainer>
            <h2>Mijail Febres Soria</h2>
            <p>{bio}</p>
        </AboutContainer>
    )
}

export default About;
