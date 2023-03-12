import {
	Container,
	Flex,
	Heading,
	Text,
	Image,
	Link,
	Button,
	Box
} from '@chakra-ui/react';

import Contacts from '../components/Contacts';
import Photo from '../images/my-photo.jpg';
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
		<Contacts/>
		<Flex marginTop='25px' alignItems='center' textAlign='justify'>
			<Image src={Photo} alt='my photo'
				w='300px'
				boxShadow='portret'
				borderRadius='175px'
				border='4px solid'
				marginRight='15px'
			/>
			<Box position='relative'>
				<Text>
					I am a Full Stack Developer with practical experience
					in JavaScript, React, Redux, Node.js, HTML
					and CSS3 and 13 years in the banking sector as a Risk Manager.
				</Text>
				<Text>
					If you wish to have reliable person who values time and likes
					to help other then I am waiting for your feedback.
				</Text>
				<Link href="veronika_savluk.pdf" download=""
				>
    			<Button
					position='absolute'
					right='0'
					bottom='-50px'
					>Download CV
					</Button>
				</Link>
			</Box>
		</Flex>
	</Container>
)
};

export default About;

// https://drive.google.com/file/d/1t8kIGarqJERj6YaULNYDm82DdTaXyhDu/view?usp=sharing