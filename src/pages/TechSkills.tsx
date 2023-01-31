import {
	Heading,
	Grid,
	GridItem, 
} from '@chakra-ui/react';

import techskills from '../techskills.json';

function TechSkills () {
	return <>
	<Heading>TechSkills</Heading>
	<Grid>
		{techskills.map(({name}, idx) => <GridItem key={idx + 1}>{name}</GridItem>)}
	</Grid>
	</>
}

export default TechSkills;