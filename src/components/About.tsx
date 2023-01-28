import {
	Container,
	Heading
} from '@chakra-ui/react';

import Education from './Education';
import Projects from './Projects';

function About (){

return (
	<Container>
		<Heading>About</Heading>
		<Education/>
		<Projects/>
	</Container>
)
};

export default About;