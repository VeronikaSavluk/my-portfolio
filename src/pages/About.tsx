import {
	Container,
	Heading,
	Text
} from '@chakra-ui/react';
import Logo from '../components/Logo';


import Education from '../components/Education';

function About (){

return (
	<Container>
		<Heading>Veronika Savluk</Heading>
		<Logo/>
		<Text>Full Stack Developer</Text>
		<Education/>
	</Container>
)
};

export default About;