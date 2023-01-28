import {
	Text,
	Link,
	Heading,
	Grid,
	GridItem, 
	Flex} from '@chakra-ui/react';
	
import projects from '../projects.json';

function projectsByType(type: String) {
	const typeProjects = projects.filter(project => project.type === type)
	return typeProjects.map(({name, codeURL, websiteURL, description, tools}, idx) => {
		const libraries = Object.values(tools).join(', ');
		return (
		<GridItem key={idx + 1} justifySelf='start' justifyContent='flex-start'>
			<Link href={websiteURL}>{name}</Link>
			<Text>{description}</Text>
			<Link textTransform='capitalize' href={codeURL}>{libraries}</Link>
		</GridItem>
		)}
		)
}

function Projects (){
return (
	<Flex justifyItems='start'>
		<Heading textTransform='capitalize'>Projects</Heading>
		<Heading textTransform='capitalize'>team</Heading>
		<Grid justifyItems='start'>
			{projectsByType('team')}
		</Grid>
		<Heading textTransform='capitalize'>individual</Heading>
		<Grid justifyItems='start'>
			{projectsByType('individual')}
		</Grid>
	</Flex>
	)
};

export default Projects;