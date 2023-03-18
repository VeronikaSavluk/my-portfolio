import {
	Box,
	Heading,
	Image,
	Link,	
	Flex
} from '@chakra-ui/react';

import techskills from '../techskills.json';

function TechSkills () {
	return <>
	<Heading as="h2" marginY='20px' textTransform='uppercase'>tech skills</Heading>
	<Flex flexWrap='wrap' gap='20px' alignItems='center'>
		{techskills.map(({name, url, logotype}, idx) => 
		<Box key={idx + 1}>
			<Link href={url} target="_blank">
				<Flex maxW="100px" maxH="100px" alignItems="center">
			{logotype && <Image src={logotype} alt={name} w="100%" h='auto'/>}
				</Flex>
			</Link>
			</Box>)}
	</Flex>
	</>
}

export default TechSkills;