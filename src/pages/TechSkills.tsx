import {
	Box,
	Heading,
	Grid,
	GridItem,
	Image,
	Link	
} from '@chakra-ui/react';

import techskills from '../techskills.json';

function TechSkills () {
	return <>
	<Heading>TechSkills</Heading>
	<Grid>
		{techskills.map(({name, url, logotype}, idx) => 
		<GridItem key={idx + 1}>
			<Link href={url} target="_blank">
				<Box w="60px" h="auto">
			{logotype && <Image src={logotype} alt={name} w="100%"/>}
				</Box>
			</Link>
			</GridItem>)}
	</Grid>
	</>
}

export default TechSkills;