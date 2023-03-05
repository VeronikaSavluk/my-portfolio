import { 
	Box,
	Text,
	Image,
	Heading,
	Flex,
	} from '@chakra-ui/react';
import education from '../education.json';

function Education (){
return (
	<Flex gap='20px' padding='20px' flexDir="column">
		<Heading as="h2" textTransform='capitalize'>documents</Heading>
		<Flex marginRight="15px">
			{education.map(({institution, specialization, period, documentURL}, idx) => (
				<Box key={idx + 1} borderRadius="10px">
					<Heading as="h3" fontSize='24px' marginBottom="15px" textTransform='capitalize'>{institution}
					<span>: {specialization}</span>
					</Heading>
					<Text textTransform='capitalize' marginBottom="15px">{period}</Text>
					<Image src={documentURL} alt="diploma" w="auto" h="350px" borderRadius="20px"/>
				</Box>
			))}
		</Flex>
		<Heading as="h2" textTransform='capitalize'>experience</Heading>
	</Flex>
)
};

export default Education;