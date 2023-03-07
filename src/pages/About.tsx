import {
	Container,
	Flex,
	Heading,
	Text,
	Image,
	Box
} from '@chakra-ui/react';

import photo from '../images/my-photo.jpg';
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
		<Flex marginTop='25px' alignItems='center' textAlign='justify'>
			<Image src={photo} alt='my photo'
				w='300px'
				boxShadow='portret'
				borderRadius='175px'
				border='4px solid'
				marginRight='15px'
			/>
			<Box>
				<Text>I am a Full Stack Developer with practical experience in JavaScript, React, Redux, Node.js, HTML and CSS3 and 13 years in the banking sector as a risk manager.</Text>
				<Text>If you wish to have reliable person who values time and likes to help other then I am waiting for your feedback.</Text>
			</Box>
		</Flex>
	</Container>
)
};

export default About;