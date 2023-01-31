import {
	Container,
	Heading,
	Text
} from '@chakra-ui/react';
import logo from '../image/logo.png';

import Education from '../components/Education';

function About (){

return (
	<Container>
		<Heading>Veronika Savluk</Heading>
		<img src={logo} className="App-logo" alt="logo" />
		<Text>Full Stack Developer</Text>
		<Education/>
	</Container>
)
};

export default About;