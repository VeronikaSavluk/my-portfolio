import {
	Container,
	Flex,
	Heading,
	Text
} from '@chakra-ui/react';
import Logo from '../components/Logo';

function About (){
return (
	<Container>
		<Flex justifyContent="space-between" alignItems="center" >
			<Logo/>
			<Flex flexDirection="column" alignItems="center" >
				<Heading as='h1' size='2xl'>Veronika Savluk</Heading>
				<Text>Full Stack Developer</Text>
			</Flex>
		</Flex>
		<></>
	</Container>
)
};

export default About;