import {
	Text,
	Link,
	Heading,
	List,
	ListItem,
	Grid,
	Flex,
	Box,
	Image
} from '@chakra-ui/react';
	
import projects from '../projects.json';

function projectsByType(type: String) {
	const typeProjects = projects.filter(project => project.type === type)
	return (
		<List>
			{typeProjects.map(({name, posterURL, codeURL, websiteURL, description, tools}, idx) => {
			const libraries = Object.values(tools).join(', ');
			return (
				<ListItem key={idx + 1} p='10px' justifySelf='start' justifyContent='flex-start'>
					<Heading as="h3" fontSize='24px' marginBottom="15px"> {name}
						<span> </span>
						<Link textDecor='underline' fontWeight='400'
							fontSize='20px'
							href={codeURL}
							target="_blank">
							[code resource]
						</Link>
					</Heading>
					<Flex flexDir='column' textAlign='justify'>
						<Box marginRight='15px'>
						<Link href={websiteURL} target="_blank">
							<Image src={posterURL} alt={name} w="100%"/>
						</Link>
						</Box>
						<Box>
							<Text marginTop='10px' marginBottom='10px'>{description}</Text>
							<Text>
								<span className='allocating-text'>Technologies: </span> {libraries}.
							</Text>
						</Box>
						<Box minW='50%' marginTop="15px" border='1px ' borderColor='#004D00'/>
					</Flex>
				</ListItem>
				)}
			)}
		</List>
	)}

function Projects (){
return (
	<Flex gap='20px' padding='20px'>
	<Flex flexDirection="column">
		<Heading as="h2" marginLeft="10px" textTransform='capitalize'>
			team projects
		</Heading>
		<Box minW='50%' border='1px ' borderColor='#004D00'/>
		<Grid justifyItems='start'>
			{projectsByType('team')}
		</Grid>
	</Flex>
	<Box minH='800px' border='1px ' borderColor='#004D00'/>
	<Flex flexDirection="column">
		<Heading as="h2" marginLeft="10px" textTransform='capitalize'>
			individual projects
		</Heading>
		<Box minW='50%' border='1px ' borderColor='#004D00'/>
		<Grid justifyItems='start'>
			{projectsByType('individual')}
		</Grid>
	</Flex>
	</Flex>
	)
};

export default Projects;