import {
	Text,
	Link,
	Heading,
	OrderedList,
	ListItem,
	Grid,
	Flex
} from '@chakra-ui/react';
	
import projects from '../projects.json';

function projectsByType(type: String) {
	const typeProjects = projects.filter(project => project.type === type)
	return (
		<OrderedList>
			{typeProjects.map(({name, codeURL, websiteURL, description, tools}, idx) => {
			const libraries = Object.values(tools).join(', ');
			return (
				<ListItem key={idx + 1} justifySelf='start' justifyContent='flex-start'>
					<Link href={websiteURL} target="_blank">{name}</Link>
					<Link href={codeURL} target="_blank"> [code resource]:</Link>
					<Text>{description}</Text>
					<Text>Technologies: {libraries}</Text>
				</ListItem>
				)}
			)}
		</OrderedList>
	)}

function Projects (){
return (
	<>
	<Heading textTransform='capitalize'>Projects</Heading>
	<Flex justifyItems='start'>
		<Flex flexDirection="column">
		<Heading textTransform='capitalize'>team</Heading>
		<Grid justifyItems='start' width="48vw">
			{projectsByType('team')}
		</Grid>
		</Flex>
		<Flex flexDirection="column">
		<Heading textTransform='capitalize'>individual</Heading>
		<Grid justifyItems='start' width="48vw">
			{projectsByType('individual')}
		</Grid>
		</Flex>
	</Flex>
	</>
	)
};

export default Projects;