import {
	Image,
	Link,	
	Flex
} from '@chakra-ui/react';

import contacts from '../contacts.json';

function Contacts () {
	return <>
	<Flex justifyContent='flex-end' gap='8px'>
		{contacts.map(({contact, contactURL, iconURL}, idx) => 
			<Link href={contactURL} key={idx + 1}>
				<Image src={iconURL} alt={contact} w="30px" h='30px'/>
			</Link>
		)}
	</Flex>
	</>
}

export default Contacts;