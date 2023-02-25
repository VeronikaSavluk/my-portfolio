import { 
	Box,
	Text,
	Heading,
	Grid,
	GridItem } from '@chakra-ui/react';
import education from '../education.json';

function Education (){
return (
	<Box>
		<Heading textTransform='capitalize'>Education</Heading>
		<Grid>
			{education.map(({institution, specialization, period}, idx) => (
				<GridItem key={idx + 1}>
				<Text textTransform='capitalize'>{institution}</Text>
				<Text textTransform='capitalize'>{specialization}</Text>
				<Text textTransform='capitalize'>{period}</Text>
				</GridItem>
			))}
	</Grid>
	</Box>
)
};

export default Education;