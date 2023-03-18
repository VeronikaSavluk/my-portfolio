import { NavLink } from 'react-router-dom';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink
} from '@chakra-ui/react';

function AppBar () {
	return (
		<Breadcrumb fontWeight='bold' fontSize='m' separator=' '>
		<BreadcrumbItem>
				<BreadcrumbLink as={NavLink} to='/' isCurrentPage>
				About
				</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbItem>
				<BreadcrumbLink as={NavLink} to='/experionce'>
				Experience
				</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbItem>
				<BreadcrumbLink as={NavLink} to='/projects'>
				Projects
				</BreadcrumbLink>
		</BreadcrumbItem>
		<BreadcrumbItem>
				<BreadcrumbLink as={NavLink} to='/skills'>
				Tech Skills
				</BreadcrumbLink>
		</BreadcrumbItem>
		</Breadcrumb>
	)
};

export default AppBar;