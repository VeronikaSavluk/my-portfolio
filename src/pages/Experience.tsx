import { 
	Box,
	Text,
	Image,
	Heading,
	Grid,
	Flex,
	GridItem
	} from '@chakra-ui/react';

import experience from '../experience.json';

function Experience (){
return (
	<Flex marginY='20px' alignItems='center' flexDir="column">
		<Heading as="h2" textTransform='uppercase'>my education
			<Text as='span' color='#F96B00'>&</Text>
			jobs
		</Heading>
		<Flex flexDir="column">
			{experience.map(({institution, specialization, period, documentURL, jobs}, idx) => (
				<Flex 
					flexDir="column"
					key={idx + 1}
				>
					<Heading as="h3"
							fontSize='24px'
							marginY="15px"
							textTransform='capitalize'
							color='#F96B00'
					>{specialization}
					</Heading>
					<Grid gap="10px" templateColumns={'400px 720px'} >
						<GridItem borderRadius="10px" border="20px outset" borderColor='#004D00'>
							<Heading as="h4" 
								fontSize='20px'
								marginBottom="10px"
							>My document
							</Heading>
							<Text
								textTransform='capitalize'
								fontSize='18px'
								fontWeight="600"
							>{institution}
							</Text>
							<Text textTransform='capitalize'
								marginBottom="2px"
							>({period})
							</Text>
							<Image
								src={documentURL}
								alt="diploma"
								w="auto"
								maxH="550px"
								borderRadius="20px"
							/>
						</GridItem>
						<GridItem border="20px outset" borderColor='#004D00' borderRadius="10px">
						<Flex
							marginLeft="15px"
							flexDir="column"
						>
							<Heading as="h4"
								fontSize='20px'
								marginBottom="10px"
							>My work in the spesialization
							</Heading>
							{jobs.length > 0 ? (
							<Flex marginRight="15px" flexDir="column">
								{jobs.map(({place, position, period, duties}, idx, arr) => 
									<Box
										key={idx + 1}
										borderRadius="10px"
									>
									<Text
										textTransform='capitalize'
										fontSize='18px'
										fontWeight="600"
										>{position}
										</Text>
										<Text
											textTransform='capitalize'
											marginBottom="15px"
										>{place} ({period})
										</Text>
										<Flex
											flexDir="column"
											marginBottom="15px"
										>
											{duties.map((duty, idx) => <Text key={idx + 1}>{duty}</Text>)}
										</Flex>
									</Box>
								)}
							</Flex>
							) : (
								<Heading as="h4"
								fontSize='20px'
								marginBottom="4px"
								color='#F96B00'
							>I'm open to work
							</Heading>
							)}
						</Flex>
						</GridItem>
					</Grid>
				</Flex>
			))}
		</Flex>
	</Flex>
)
};

export default Experience;